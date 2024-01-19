import { Request, Response } from 'express';
import { mongoClient } from '../db/client';

export const createPlaylist = async (req: Request, res: Response) => {
    const { name, cover } = req.body;
    const { userId } = req.params;

    try {
        const playlist = await mongoClient.playlist.create({
            data: { name, userId, cover }
        });

        res.status(201).json(playlist);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getAllPlaylists = async (req: Request, res: Response) => {
    try {
        const allPlaylist = await mongoClient.playlist.findMany({
            include: {
                Song: true
            }
        });
        res.status(201).json(allPlaylist);
    } catch (error) {
        res.status(500).json(error);
    }
};   

export const getPlaylistsByUserId = async (req: Request, res: Response) => {
    const { userId } = req.params
    
    try{
        const playlist = await mongoClient.playlist.findMany({
            where: { userId: userId },
            include: {
                Song: true,
                User: true
            }
        });
        res.status(201).json(playlist);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const updatePlaylist = async (req: Request, res: Response) => {
    const { playlistId } = req.params;
    const { name, songId, cover } = req.body

    try{
        const updatePlaylist = await mongoClient.playlist.update({
            where: { id: playlistId },
            data: { name, songId, cover }
        })
        res.status(201).json(updatePlaylist)
    }catch (error){
        res.status(500).json(error)
    }
};

export const deletePlaylist = async (req: Request, res: Response) => {
    const { playlistId } = req.params;

    try {
        const usersWithLikedPlaylist = await mongoClient.likedPlaylist.findMany({
            where: { playlistId: playlistId }
        });
        const removePlaylistPromises = usersWithLikedPlaylist.map(async (likedPlaylist) => {
            await mongoClient.likedPlaylist.delete({
                where: { id: likedPlaylist.id }
            });
        });
        await Promise.all(removePlaylistPromises);
        const deletedPlaylist = await mongoClient.playlist.delete({
            where: { id: playlistId }
        });
        res.status(200).json(deletedPlaylist);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const likePlaylist = async (req: Request, res: Response) => {
    const { playlistId, userId } = req.params;

    try {
        const likedPlaylist = await mongoClient.likedPlaylist.create({
            data: {
                liked: true,
                userId: userId,
                playlistId: playlistId
            }
        });
        res.status(202).json(likedPlaylist);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const unlikePlaylist = async (req: Request, res: Response) => {
    const { playlistId, userId } = req.params;

    try {
        const likedPlaylist = await mongoClient.likedPlaylist.findFirst({
            where: {
                userId: userId,
                playlistId: playlistId,
                liked: true
            }
        });

        if (!likedPlaylist) {
            return res.status(404).json({ error: 'Playlist not found.' });
        }
        const unlikedPlaylist = await mongoClient.likedPlaylist.delete({
            where: {
                id: likedPlaylist.id
            }
        });
        res.status(202).json(unlikedPlaylist)

    } catch (error) {
        res.status(500).json(error);
    }
};

export const addSongToPlaylist = async (req: Request, res: Response) => {
    const { playlistId } = req.params;
    const { songId } = req.body;

    try {
        const updatedPlaylist = await mongoClient.playlist.update({
            where: { id: playlistId },
            data: {
                Song: { connect: { id: songId } },
            }
        });
        res.status(201).json(updatedPlaylist);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getPlaylistById = async (req: Request, res: Response) => {
    const { playlistId } = req.params;
    const { userId } = req.body;
        
    try {
        const playlist = await mongoClient.playlist.findUnique({
            where: {id: playlistId},
            include: {
                Song: true,
                User: {
                    select: {
                        id: true,
                        name: true
                    }
                },
                LikedPlaylist: true
            }
        });
        const isLiked = await mongoClient.likedPlaylist.findFirst({
            where: {
                userId,
                playlistId,
                liked: true
            }
        })
        if (isLiked) {
            res.status(200).json({ ...playlist, isLiked: true });
        } else {
            res.status(200).json({ ...playlist, isLiked: false});
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getLikedPlaylistsByUserId = async (req: Request, res: Response) => {
    const { userId, playlistId } = req.params;
    try {
        const likedPlaylists = await mongoClient.likedPlaylist.findMany({
            where: {
                userId: userId,
                playlistId: playlistId,
                liked: true
            },
            include: {
                Playlists: true
            }
        });
        res.status(200).json(likedPlaylists);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const deleteSongFromPlaylist = async (req: Request, res: Response) => {
    const { playlistId, songId } = req.params

    try {
        const updatedPlaylist = await mongoClient.playlist.update({
            where: { id: playlistId },
            data: {
                Song: { 
                    disconnect: { 
                        id: songId 
                    }
                }
            }
        })
        res.status(200).json(updatedPlaylist) 
    } catch (error) {
        res.status(500).json(error)   
    }
};