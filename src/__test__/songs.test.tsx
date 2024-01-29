import { createSong, deleteSong, updateSong, getAllSongs } from '../controllers/songs.controllers';
import { mongoClient } from '../db/client';

jest.mock('../../prisma/generated/mongodb_client', () => ({
  PrismaClient: jest.fn(() => ({
    song: {
      findMany: jest.fn(),
      create: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  })),
}));

describe('CRUD Song Functionalities', () => {
  let mockRequest: any;
  let mockResponse: any;

  beforeEach(() => {
    mockRequest = {
      body: {},
      params: {},
    };
    mockResponse = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };
  });

  it('should create a new song', async () => {
    mockRequest.body = {
      name: 'New Song',
      url: 'song-url',
      cover: 'cover-url',
      genresId: ['genreId1', 'genreId2'],
      artistId: 'artistId',
      albumId: 'albumId',
    };
    const createdSong = { id: 'someId', name: 'New Song' };
    (mongoClient.song.create as jest.Mock).mockResolvedValueOnce(createdSong);

    await createSong(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledTimes(1);
    expect(mockResponse.status).toHaveBeenCalledWith(201);

    if (mockResponse.status.mock.calls[0][0] === 201) {
      expect(mockResponse.json).toHaveBeenCalledWith(createdSong);
    } else {
      expect(mockResponse.json).toHaveBeenCalledWith(expect.any(Error));
    }   
  });

  it('should get all songs successfully', async () => {
   
    const mockSongs = [
      {
        id: 'SongId1',
        name: 'SongName1',
        url: 'SongUrl1',
        cover: 'SongCoverUrl1',
        Genres: [],
        artistId: 'ArtistId1',
        albumId: 'AlbumId1',
      },
      {
        id: 'SongId2',
        name: 'SongName2',
        url: 'SongUrl2',
        cover: 'SongCoverUrl2',
        Genres: [], 
        artistId: 'ArtistId2',
        albumId: 'AlbumId2',
      },
      {
        id: 'SongId3',
        name: 'SongName3',
        url: 'SongUrl3',
        cover: 'SongCoverUrl3',
        Genres: [],
        artistId: 'ArtistId3',
        albumId: 'AlbumId3',
      },
    ];

    (mongoClient.song.findMany as jest.Mock).mockResolvedValueOnce(mockSongs);

    console.log('Before getAllSongs - mock.calls:', (mongoClient.song.findMany as jest.Mock).mock.calls);

    await getAllSongs(mockRequest, mockResponse);

    console.log('After getAllSongs - mock.calls:', (mongoClient.song.findMany as jest.Mock).mock.calls);


    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith(mockSongs);
  });

  it('should update a song', async () => {
    mockRequest.body = { listened: true };
    mockRequest.params.songId = 'someSongId';

    const updatedSong = { id: 'someSongId', name: 'Updated Song', listened: true };
    (mongoClient.song.update as jest.Mock).mockResolvedValueOnce(updatedSong);

    await updateSong(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(204);
    expect(mockResponse.json).toHaveBeenCalledWith(updatedSong);
  });

  it('should delete a song', async () => {
    mockRequest.params.songId = 'someSongId';

    (mongoClient.song.delete as jest.Mock).mockResolvedValueOnce({});

    await deleteSong(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(204);
    expect(mockResponse.json).toHaveBeenCalled();
  });
});
