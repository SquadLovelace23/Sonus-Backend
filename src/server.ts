import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import FileUpload from 'express-fileupload';
import userRoutes from './routes/user.routes';
import songRoutes from './routes/song.routes';
import cloudinaryRoutes from './routes/cloudinary.routes';
import playlistRoutes from './routes/playlist.routes';
import albumRoutes from './routes/album.routes';
import genreRoutes from './routes/genre.routes';
import artistRoutes from './routes/artist.routes';

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(FileUpload({
    useTempFiles: true,
    tempFileDir: './uploads',
    limits: {fileSize: 10000000},
    abortOnLimit: true
}));
app.use("/user", userRoutes);
app.use("/song", songRoutes);
app.use("/playlist", playlistRoutes);
app.use("/album", albumRoutes);
app.use("/genre", genreRoutes);
app.use("/artist", artistRoutes);
app.use("/cloudinary", cloudinaryRoutes);

export default app