import { Request, Response } from "express"
import { updateUser } from "../controllers/users.controllers"
import { uploadImage } from '../helpers/cloudinary';
import { mongoClient } from '../db/client';
import { uploadImageWithCloudinary } from "../controllers/cloudinary.controllers";
import fs from 'fs-extra';

jest.mock('../../prisma/generated/mongodb_client', () => ({
  PrismaClient: jest.fn(() => ({
    user: {
      update: jest.fn(),
    },
  })),
}));

jest.mock('fs-extra', () => ({
  unlink: jest.fn(),
}));

jest.mock('../helpers/cloudinary', () => ({
  uploadImage: jest.fn(),
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
    });
});

describe('Image Upload with Cloudinary', () => {
  it('should upload an image with Cloudinary and return the result', async () => {
    const mockImage = {
      tempFilePath: 'path/to/temp/image.jpg',
    };
    const mockUploadResult = {
      url: 'http://example.com/image.jpg',
    };
    
    (uploadImage as jest.Mock).mockResolvedValueOnce(mockUploadResult);

    const mockReq = {
      files: { image: mockImage },
    } as unknown as Request;

    const mockRes = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    } as unknown as Response;

    await uploadImageWithCloudinary(mockReq, mockRes);

    expect(uploadImage).toHaveBeenCalledWith(mockImage.tempFilePath);
    expect(fs.unlink).toHaveBeenCalledWith(mockImage.tempFilePath);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.send).toHaveBeenCalledWith({
      message: 'Image uploaded successfully',
      data: mockUploadResult,
    });
  });
});
