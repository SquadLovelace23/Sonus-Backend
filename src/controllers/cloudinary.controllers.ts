import { Request, Response } from 'express';
import { uploadImage, uploadSong } from "../helpers/cloudinary"
import fs from 'fs-extra';

export const uploadImageWithCloudinary = async (req: Request, res: Response) => {
    const image = req.files?.image;
    let imageUploaded = null;

    if (image) {
        if ("tempFilePath" in image) {
            imageUploaded = await uploadImage(image.tempFilePath);
            await fs.unlink(image.tempFilePath);
        }
    }
    res.status(200).send({ message: "Image uploaded successfully", data: imageUploaded})
};

export const uploadSongWithCloudinary = async (req: Request, res: Response) => {
    const song = req.files?.song;
    let songUploaded = null;

    if (song) {
        if ("tempFilePath" in song) {
            songUploaded = await uploadSong(song.tempFilePath);
            await fs.unlink(song.tempFilePath);
        }
    }
    res.status(200).send({ message: "Song uploaded successfully", data: songUploaded})
};
