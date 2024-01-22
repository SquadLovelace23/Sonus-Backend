import { Request, Response } from 'express';
import mongoClient from '../db/client';

export const createSong = async (req: Request, res: Response) => {
    const { name, url, cover, genresId, artistId, albumId } = req.body;

    try {
        const newSong = await mongoClient.song.create({
            data: {
                name,
                url,
                cover,
                Genres: { connect: genresId.map((id: string) => ({ id })) },
                artistId,
                albumId
            }
        });
        res.status(201).json(newSong);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getAllSongs = async (req: Request, res: Response) => {
    try {
        const allSongs = await mongoClient.song.findMany({
            include: {
                Artist: true,
                Album: true,
                Genres: true
            }
        })
        res.status(200).json(allSongs)
    } catch (error) {
        res.status(500).json(error)
    }
};

export const getSongById = async (req: Request, res: Response) => {
    const { songId } = req.params

    try {
        const song = await mongoClient.song.findUnique({
            where: {
                id: songId
            }
        }
        )
        res.status(200).json(song)
    } catch (error) {
        res.status(500).json(error)
    }
};

export const getSongByArtist = async (req: Request, res: Response) => {
    const { artistId } = req.params;

    try {
        const songs = await mongoClient.song.findMany({
            where: {
                Artist: {
                    some: {
                        id: artistId
                    }
                }
            },
            include: {
                Album: true,
                Genres: true,
                Artist: true
            },
            orderBy: {
                name: "asc"
            }
        });
        res.status(200).json(songs);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getSongByGenre = async (req: Request, res: Response) => {
    const { genreId } = req.params;

    try {
        const songs = await mongoClient.song.findMany({
            where: {
                Genres: {
                    some: {
                        id: genreId
                    }
                }
            },
            include: {
                Artist: true,
                Album: true
            },
            orderBy: {
                name: "asc"
            }
        });
        res.status(200).json(songs);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getSongByPlaylist = async (req: Request, res: Response) => {
    const { playlistId } = req.params;

    try {
        const songs = await mongoClient.song.findMany({
            where: {
                Playlist: {
                    some: {
                        id: playlistId
                    }
                }
            },
            include: {
                Artist: true,
                Genres: true,
                Album: true
            }
        });
        res.status(200).json(songs);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getSongByUserId = async (req: Request, res: Response) => {
    const { userId } = req.params;

    try {
        const songs = await mongoClient.song.findMany({
            where: { id: userId }
        });
        res.status(200).json(songs);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getSongByAlbum = async (req: Request, res: Response) => {
    const { albumId } = req.params;

    try {
        const songs = await mongoClient.song.findMany({
            where: {
                Album: {
                    some: {
                        id: albumId
                    }
                }
            },
            include: {
                Artist: true,
                Genres: true,
                Album: true
            },
            orderBy: {
                name: "asc"
            }
        });
        res.status(200).json(songs);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const likeSong = async (req: Request, res: Response) => {
    const { songId, userId } = req.params;

    try {
        const likedSong = await mongoClient.likedSong.create({
            data: {
                liked: true,
                userId: userId,
                songId: songId
            }
        });
        res.status(200).json(likedSong);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getAllLikedSongs = async (req: Request, res: Response) => {

    try {
        const likedSongs = await mongoClient.likedSong.findMany({
            include: { User: true, Song: true }
        });
        res.status(200).json(likedSongs);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getLikedSongsByUserId = async (req: Request, res: Response) => {
    const { userId, songId } = req.params;

    try {
        const likedSongs = await mongoClient.song.findMany({
            where: {
                LikedSong: {
                    some: {
                        id: songId, userId: userId
                    }
                }
            },
            include: {
                Artist: true,
                Album: true,
                User: true
            }
        });
        res.status(200).json(likedSongs);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const unlikeSong = async (req: Request, res: Response) => {
    const { songId, userId } = req.params;

    try {
        const likedSong = await mongoClient.likedSong.findFirst({
            where: {
                userId: userId,
                songId: songId,
                liked: true
            }
        });
        if (!likedSong) {
            return res.status(404).json({ error: 'Song not found.' });
        }
        const unlikedSong = await mongoClient.likedSong.delete({
            where: {
                id: likedSong.id
            }
        })
        res.status(204).json(unlikedSong)
    } catch (error) {
        res.status(500).json(error);
    }
};

export const updateSong = async (req: Request, res: Response) => {
    const { listened } = req.body;
    const { songId } = req.params

    try {
        const updatedSong = await mongoClient.song.update({
            where: { id: songId },
            data: { listened: listened }
        })
        res.status(204).json(updatedSong)
    } catch (error) {
        res.status(500).json(error);
    }
};

export const deleteSong = async (req: Request, res: Response) => {
    const { songId } = req.params

    try {
        const deletedSong = await mongoClient.song.delete({
            where: { id: songId }
        });
        res.status(204).json(deletedSong);
    } catch (error) {
        res.status(500).json(error);
    }
};
