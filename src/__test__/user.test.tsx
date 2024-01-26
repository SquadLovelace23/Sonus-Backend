import { Request, Response } from "express"
import { updateUser } from "../controllers/users.controllers"
import { uploadImage } from '../helpers/cloudinary';
import { v2 as cloudinary } from 'cloudinary';
import { mongoClient } from '../db/client';


jest.mock('../../prisma/generated/mongodb_client', () => ({
  PrismaClient: jest.fn(() => ({
    user: {
      update: jest.fn(),
    },
  })),
}));

jest.mock('cloudinary', () => ({
  uploader: {
    upload: jest.fn(),
  },
  config: jest.fn(),
}));

describe('User update functionality', () => {
    it('should update the user and return status 201', async () => {
        (mongoClient.user.update as jest.Mock) .mockResolvedValue({
            id: '123',
            name: 'test',
            avatar: 'test.jpg',
        })

        const mockReq = {
            params: { userId: '123' },
            body: { name: 'test', avatar: 'test.jpg' }
        } as unknown as Request;

        const mockRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        } as unknown as Response;

        await updateUser(mockReq, mockRes)
        expect(mongoClient.user.update).toHaveBeenCalledWith({
            where: { id: '123' },
            data: { name: 'test', avatar: 'test.jpg' }
        });
        expect(mockRes.status).toHaveBeenCalledWith(201);
        expect(mockRes.json).toHaveBeenCalledWith({
            id: '123',
            name: 'test',
            avatar: 'test.jpg',
        });
        console.log('Test completed');
    });
});


describe('uploadImage', () => {
    it('should upload the image and return the result', async () => {
        const mockUploadResult = {
            url: 'http://example.com/image.jpg',
        };
        (cloudinary.uploader.upload as jest.Mock).mockResolvedValue(mockUploadResult);

        const imagePath = 'path/to/image.jpg';
        const result = await uploadImage(imagePath);

        expect(cloudinary.uploader.upload).toHaveBeenCalledWith(imagePath, {
            resource_type: "image",
            folder: "images/",
            crop: "scale",
            overwrite: true,
        });

        expect(result).toEqual(mockUploadResult);
    });
});