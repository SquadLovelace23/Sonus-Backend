import { Router } from "express";
import { createSong, deleteSong, getAllSongs, getSongById, likeSong, unlikeSong, getSongByArtist, getSongByGenre, getSongByPlaylist, getSongByAlbum, getLikedSongsByUserId, updateSong } from "../controllers/songs.controllers";

const songRoutes = Router()

songRoutes.post("/", createSong);
songRoutes.post("/:userId", createSong);
songRoutes.get("/:userId/likedSongs", getLikedSongsByUserId);
songRoutes.get("/", getAllSongs);
songRoutes.get("/:songId", getSongById);
songRoutes.get("/artist/:artistId", getSongByArtist)
songRoutes.get("/genre/:genreId", getSongByGenre)
songRoutes.get("/album/:albumId", getSongByAlbum)
songRoutes.get("/playlist/:playlistId", getSongByPlaylist)

songRoutes.patch("/:songId", updateSong);

songRoutes.delete("/:songId", deleteSong);

songRoutes.post("/:userId/:songId", likeSong);
songRoutes.delete("/:userId/:songId", unlikeSong);

export default songRoutes