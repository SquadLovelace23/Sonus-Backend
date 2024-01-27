import { Request, Response } from 'express';
import { mongoClient } from '../db/client';
import { addSongToPlaylist, deleteSongFromPlaylist } from '../controllers/playlists.controllers';

jest.mock('../db/client', () => {
    return {
        mongoClient: {
            playlist: {
                update: jest.fn()
            }
        },
    };
});

describe('Playlists Controller', () => {
    let mockReq: Partial<Request>;
    let mockRes: Partial<Response>;

    beforeEach(() => {
        mockReq = {
            params: { playlistId: '123', songId: '456'},
            body: { songId: '456' }
        };
        mockRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
    });

    afterEach(() => {
        (mongoClient.playlist.update as jest.Mock).mockReset();
    });

    it('should add a song to a playlist', async () => {
        const mockPlaylist = { id: '123', songId: ['456'] };
        (mongoClient.playlist.update as jest.Mock).mockResolvedValue(mockPlaylist);

        await addSongToPlaylist(mockReq as Request, mockRes as Response);

        expect(mongoClient.playlist.update).toHaveBeenCalledWith({
            where: { id: '123' },
            data: { Song: { connect: { id: '456' } } }
        });
        expect(mockRes.status).toHaveBeenCalledWith(201);
        expect(mockRes.json).toHaveBeenCalledWith(mockPlaylist);
    });

    it('should delete a song from a playlist', async () => {
        const mockPlaylist = { id: '123', songId: ['456'] };
        (mongoClient.playlist.update as jest.Mock).mockResolvedValue(mockPlaylist);

        await deleteSongFromPlaylist(mockReq as Request, mockRes as Response);

        expect(mongoClient.playlist.update).toHaveBeenCalledWith({
            where: { id: '123' },
            data: { Song: { disconnect: { id: '456' } } }
        });
        expect(mockRes.status).toHaveBeenCalledWith(200);
        expect(mockRes.json).toHaveBeenCalledWith(mockPlaylist);
    });
});