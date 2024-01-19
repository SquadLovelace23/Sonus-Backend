import { Router } from 'express';
import { addSongToPlaylist, createPlaylist, deletePlaylist, deleteSongFromPlaylist ,getAllPlaylists, getPlaylistsByUserId, getLikedPlaylistsByUserId, getPlaylistById, likePlaylist, unlikePlaylist } from '../controllers/playlists.controllers';

const playlistRoutes = Router()

playlistRoutes.post("/", createPlaylist);
playlistRoutes.post("/:userId", createPlaylist);

playlistRoutes.get("/", getAllPlaylists);
playlistRoutes.get("/:playlistId", getPlaylistById);
playlistRoutes.get("/user/:userId", getPlaylistsByUserId);
playlistRoutes.get("/:userId/likedPlaylists", getLikedPlaylistsByUserId);

playlistRoutes.patch("/:playlistId", addSongToPlaylist)

playlistRoutes.delete("/:playlistId", deletePlaylist);
playlistRoutes.delete("/song/:playlistId/:songId", deleteSongFromPlaylist);

playlistRoutes.post("/:userId/:playlistId", likePlaylist);
playlistRoutes.delete("/:userId/:playlistId", unlikePlaylist);

export default playlistRoutes