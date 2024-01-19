import { Request, Response } from 'express';
import { mongoClient } from '../db/client';

export const createArtist = async (req: Request, res: Response) => {
    const { name, img, songId, albumsId, genresId } = req.body;

    try {
    
        const newArtist = await mongoClient.artist.create({
            data: {
                name,
                img,
                Song: { connect: songId.map((id: string) => ({ id })) },
                Albums: { connect: albumsId.map((id: string) => ({ id })) },
                Genres: { connect: genresId.map((id: string) => ({ id })) }
            }
        })
        res.status(201).json(newArtist)
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getAllArtists = async (req: Request, res: Response) => {

    try {
        const allArtists = await mongoClient.artist.findMany({
            include: {
                Song:true,
                Genres:true, 
                Albums:true, 
            }
        });
        res.status(200).json(allArtists);
    } catch (error) {
        res.status(500).json(error);
    }

}

export const getArtistById = async (req: Request, res: Response) => {

    const { artistId } = req.params

    try {
        const artist = await mongoClient.artist.findUnique({ where: { id: artistId } })

        res.status(200).json(artist)

    } catch (error) {
        res.status(500).json(error)

    }

}


export const deleteArtist = async (req: Request, res: Response) => {

    const { artistId } = req.params

    try {
        const deleteUser = await mongoClient.artist.delete({
            where: { id: artistId }
        });
        res.status(201).json(deleteUser);

    } catch (error) {
        res.status(500).json(error);
    }
}