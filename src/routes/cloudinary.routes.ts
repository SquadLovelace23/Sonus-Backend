import { Router } from "express";
import { uploadImageWithCloudinary, uploadSongWithCloudinary } from "../controllers/cloudinary.controllers";

const cloudinaryRoutes = Router()

cloudinaryRoutes.post("/image", uploadImageWithCloudinary);
cloudinaryRoutes.post("/song", uploadSongWithCloudinary);

export default cloudinaryRoutes