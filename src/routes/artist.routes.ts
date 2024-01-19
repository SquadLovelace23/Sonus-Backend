import { Router } from 'express';
import { createArtist, deleteArtist, getAllArtists, getArtistById } from '../controllers/artists.controllers';

const artistRoutes = Router()

artistRoutes.post("/", createArtist);

artistRoutes.get("/", getAllArtists);
artistRoutes.get("/:artistId", getArtistById);

artistRoutes.delete("/:artistId", deleteArtist);

export default artistRoutes