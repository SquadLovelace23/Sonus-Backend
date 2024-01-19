import { v2 as cloudinary } from "cloudinary"
import config from "../config/config";

cloudinary.config(config.cloudinary)

export const uploadImage = async (imagePath: string) => {
  return await cloudinary.uploader.upload(imagePath, {
    resource_type: "image",
    folder: "images/",
    crop: "scale",
    overwrite: true,
  });
};

export const uploadSong = async (songPath: string) => {
  return await cloudinary.uploader.upload(songPath, {
    resource_type: "video",
    folder: "songs/"
  });
};