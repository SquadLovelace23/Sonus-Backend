import { Request, Response } from 'express';
import { mongoClient } from '../db/client';
import { constants } from 'buffer';

export const createAlbum = async (req: Request, res: Response) => {
    const { name, cover } = req.body
    const { artistId } = req.params

    try {
        const album = await mongoClient.albums.create({
            data: {
                name,
                cover,
                Artist: {
                    connect: { id: artistId },
                },
            },
            include: {
                Artist: {include: name}, 
            },
        });

        res.status(201).json(album);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getAllAlbums = async (req: Request, res: Response) => {
    try {
        const albums = await mongoClient.albums.findMany({
            orderBy: {
              name: "asc"
            },
            include: {
                Song: true,
                Artist: true
            }
          })
        res.status(200).json(albums)
    }
    catch (error) {
        res.status(500).json(error)
    }
};

export const getAlbumById = async (req: Request, res: Response) => {
    const { albumId } = req.params
    const { userId } = req.body

    try {
        const album = await mongoClient.albums.findUnique({
            where: { id: albumId },
            include: {
                Song: true,
                Artist: true,
                LikedAlbums: true
            }
        });
        const isLiked = await mongoClient.likedAlbums.findFirst({
            where: {
                userId,
                albumId,
                liked: true
            }
        })
        if (isLiked) {
            res.status(200).json({ ...album, isLiked: true });
        } else {
            res.status(200).json({ ...album, isLiked: false });
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getAlbumByArtist = async (req: Request, res: Response) => {
    const { artistId } = req.params

    try {
        const albums = await mongoClient.albums.findMany({
            where: {
                Artist: {
                    some: {
                        id: artistId
                    }
                }
            },
            include: {
                Song: true,
                Artist: true
            }
        });
        res.status(200).json(albums)
    }
    catch (error) {
        res.status(500).json(error)
    }
};

export const likeAlbum = async (req: Request, res: Response) => {
    const { albumId, userId } = req.params;

    try {
        const likedAlbum = await mongoClient.likedAlbums.create({
            data: {
                liked: true,
                userId: userId,
                albumId: albumId
            }
        });
        res.status(202).json(likedAlbum);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const unlikeAlbum = async (req: Request, res: Response) => {
    const { albumId, userId } = req.params;

    try {
        const likedAlbum = await mongoClient.likedAlbums.findFirst({
            where: {
                userId: userId,
                albumId: albumId,
                liked: true
            }
        });
        if (!likedAlbum) {
            return res.status(404).json({ error: 'No se encontró el álbum que le gusta al usuario' });
        }
        const unlikedAlbum = await mongoClient.likedAlbums.delete({
            where: { 
                id: likedAlbum.id
            }
        });
        res.status(202).json(unlikedAlbum);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const addSongToAlbum = async (req: Request, res: Response) => {
    const { albumId } = req.body;
    const { songId } = req.params;

    try {
        const album = await mongoClient.albums.findUnique({
            where: { id: albumId }
        });

        album?.songId.push(songId)

        const updatedAlbum = await mongoClient.albums.update({
            where: { id: albumId },
            data: {
                songId: album?.songId
            }
        });
        res.status(202).json(updatedAlbum);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const deleteAlbum = async (req: Request, res: Response) => {
    const { albumId } = req.params

    try {
        const deletedAlbum = await mongoClient.albums.delete({
            where: { id: albumId }
        });
        res.status(201).json(deletedAlbum);

    } catch (error) {
        res.status(500).json(error);
    }
};

export const getLikedAlbumsByUserId = async (req: Request, res: Response) => {
    const { userId, albumId } = req.params;
    try {
        const likedAlbums = await mongoClient.likedAlbums.findMany({
            where: {
                userId: userId,
                albumId: albumId,
                liked: true
            },
            include: {
                Albums: {
                    include:{
                        Artist: true
                    }
                }
            }
        });
        res.status(200).json(likedAlbums);
    } catch (error) {
        res.status(500).json(error);
    }
};