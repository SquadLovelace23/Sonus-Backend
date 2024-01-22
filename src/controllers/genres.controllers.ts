import { Request, Response } from 'express';
// import { mongoClient } from '../db/client';
import prisma from "../db/client";

export const createGenre = async (req: Request, res: Response) => {
    const { name } = req.body

    try{
        const genre = await prisma.genres.create({
            data: {
                name: name
            }
        })
    res.status(201).json(genre)
    } catch (error) {
        res.status(500).json(error)
    }
};

export const deleteGenre = async (req: Request, res: Response) => {
    const { genreId } = req.params;

    try {
        const deletedGenre = await prisma.genres.delete({
            where: { id: genreId }
        });

        res.status(200).json(deletedGenre);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getAllGenre = async (req: Request, res: Response) => {
    try{
        const allGenre = await prisma.genres.findMany({
            include: {
                Song: true
            }
        })
        res.status(201).json(allGenre);
    } catch (error){
        res.status(500).json(error);
    }
};

export const getGenreById = async (req: Request, res: Response) => {
    const { genreId } = req.params
    
    try{
        const playlist = await prisma.genres.findUnique({
            where: { id: genreId },
            include: {
                Song: true
            }
        });
        res.status(201).json(playlist);
    } catch (error) {
        res.status(500).json(error);
    }
};
