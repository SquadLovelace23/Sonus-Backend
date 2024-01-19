import { Router } from 'express';
import { createGenre, deleteGenre, getAllGenre, getGenreById } from '../controllers/genres.controllers';

const genreRoutes = Router()

genreRoutes.post("/", createGenre);

genreRoutes.get("/", getAllGenre);
genreRoutes.get("/:genreId", getGenreById);

genreRoutes.delete("/", deleteGenre);

export default genreRoutes