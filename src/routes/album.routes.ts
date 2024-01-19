import { Router } from 'express';
import { addSongToAlbum, createAlbum, getAlbumById, getAllAlbums, getAlbumByArtist, likeAlbum, unlikeAlbum, deleteAlbum, getLikedAlbumsByUserId } from '../controllers/albums.controllers';

const albumRoutes = Router()

albumRoutes.post("/:artistId", createAlbum);

albumRoutes.get("/", getAllAlbums);
albumRoutes.get("/:albumId", getAlbumById);
albumRoutes.get("/artist/:artistId", getAlbumByArtist);
albumRoutes.get("/:userId/likedAlbums", getLikedAlbumsByUserId);

albumRoutes.patch("/:albumId", addSongToAlbum);

albumRoutes.post("/:userId/:albumId", likeAlbum);
albumRoutes.delete("/:userId/:albumId", unlikeAlbum);

albumRoutes.delete("/:albumId", deleteAlbum)

export default albumRoutes