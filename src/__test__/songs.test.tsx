
import { createSong, deleteSong } from '../controllers/songs.controllers';

const mongoClient = require('../db/client');

jest.mock('../db/client');

jest.mock('express', () => ({
    Router: jest.fn(() => ({
        post: jest.fn().mockReturnThis(),
        delete: jest.fn().mockReturnThis(),
    })),
    json: jest.fn().mockReturnThis(),
    status: jest.fn().mockReturnThis(),
}));

describe('Song Controllers', () => {
    describe('#createSong', () => {
        it('should create a song correctly', async () => {
            const req = { 
                body: { 
                name: 'Song Name', 
                url: 'song_url', 
                cover: 'cover_url', 
                genresId: ['1', '2'], 
                artistId: '123', 
                albumId: '456' 
            } 
            };
            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

            jest.spyOn(mongoClient.song, 'create').mockResolvedValueOnce({});

            await createSong(req, res);

            expect(mongoClient.song.create).toHaveBeenCalledWith({
                data: {
                    name: 'Song Name',
                    url: 'song_url',
                    cover: 'cover_url',
                    Genres: { connect: [{ id: '1' }, { id: '2' }] },
                    artistId: '123',
                    albumId: '456'
                }
            });
            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith({});
        });

        it('should handle error if create failure', async () => {
            const req = { body: {} };
            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
            const mError = new Error('network');

            jest.spyOn(mongoClient.song, 'create').mockRejectedValueOnce(mError);

            await createSong(req, res)

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith(mError);
        });
    });


});
    describe('#deleteSong', () => {
        it('should delete a song correctly', async () => {
            const req = { params: { songId: '123' } };
            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

            jest.spyOn(mongoClient.song, 'delete').mockResolvedValueOnce({});

            await deleteSong(req, res);

            expect(mongoClient.song.delete).toHaveBeenCalledWith({
                where: { id: '123' }
            });
            expect(res.status).toHaveBeenCalledWith(204);
            expect(res.json).toHaveBeenCalledWith({});
        });

        it('should handle error if delete failure', async () => {
            const req = { params: { songId: '123' } };
            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
            const mError = new Error('not found');

            jest.spyOn(mongoClient.song, 'delete').mockRejectedValueOnce(mError);

            await deleteSong(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith(mError);
        });
    });