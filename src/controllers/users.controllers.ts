import { Request, Response } from 'express';
import mongoClient from '../db/client';

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const allUsers = await mongoClient.user.findMany({
            include: {
                Song: true,
                LikedSong: true,
                LikedAlbums: true,
                Playlist: true,
                FollowedBy: true,
                FollowedUser: true
            }
        });
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const createUser = async (req: Request, res: Response) => {
    const { name, email, password, avatar } = req.body;

    try {
        const newUser = await mongoClient.user.create({
            data: { name, email, password, avatar }
        });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getUserByEmail = async (req: Request, res:Response) => {
    const { userEmail } = req.params

    try {
        const user = await mongoClient.user.findUnique({
            where: { email: userEmail },
            include: {
                Song: true,
                LikedSong: true,
                LikedAlbums: true,
                Playlist: true,
                FollowedBy: true,
                FollowedUser: true
            }
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }  
};

export const getUserByName = async (req: Request, res:Response) => {
    const { userName } = req.params

    try {
        const user = await mongoClient.user.findFirst({
            where: { name: userName },
            include: {
                Song: true,
                LikedSong: true,
                LikedAlbums: true,
                Playlist: true,
                FollowedBy: true,
                FollowedUser: true
            }
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }  
};

export const getUserById = async (req: Request, res:Response) => {
    const { userId } = req.params

    try {
        const user = await mongoClient.user.findUnique({
            where: { id: userId },
            include: {
                Song: true,
                LikedSong: true,
                LikedAlbums: true,
                Playlist: true,
                FollowedBy: true,
                FollowedUser: true
            }
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }  
};

export const updateUser = async (req: Request, res: Response) => {
    const { userId } = req.params
    const { name, avatar } = req.body

    try {
        const updateUser = await mongoClient.user.update({
            where: { id: userId },
            data: { name, avatar }
        });
        res.status(201).json(updateUser);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const deleteUser = async (req:Request, res:Response) => {
    const { userId } = req.params

    try {
        const deleteUser = await mongoClient.user.delete({
            where: { id: userId }
        });
        res.status(201).json(deleteUser);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const followUser = async (req: Request, res: Response) => {
    const { userId, followedUserId } = req.params;

    try {
        const existingFollowedUser = await mongoClient.followedUser.findFirst({
            where: {
                id: userId,
            },
        });
        if (existingFollowedUser) {
            const updatedFollowedUser = await mongoClient.followedUser.update({
                where: {
                    id: userId,
                },
                data: {
                    userId: {
                        push: followedUserId,
                    },
                },
            });
            await mongoClient.user.update({
                where: {
                    id: userId,
                },
                data: {
                    followedById: {
                        push: followedUserId
                    }
                },
            });
            await mongoClient.user.update({
                where: {
                    id: followedUserId,
                },
                data: {
                    followedUserId : {
                        push: userId
                    }
                },
            });
            res.status(201).json(updatedFollowedUser);
        } else {
            const newFollowedUser = await mongoClient.followedUser.create({
                data: {
                    followed: true,
                    userId: [followedUserId],
                    id: userId,
                },
            });
            await mongoClient.user.update({
                where: {
                    id: userId,
                },
                data: {
                    followedById : {
                        push: followedUserId
                    }
                },
            });
            await mongoClient.user.update({
                where: {
                    id: followedUserId,
                },
                data: {
                    followedUserId : {
                        push: userId
                    }
                },
            });
            res.status(201).json(newFollowedUser);
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

export const unfollowUser = async (req: Request, res: Response) => {
    const { userId, followedUserId } = req.params;

    try {
        const followedUser = await mongoClient.followedUser.findFirst({
            where: {
                id: userId,
                userId: { has: followedUserId },
            },
        });
        if (!followedUser) {
            return res.status(404).json({ error: 'User not found.' });
        }
        const updatedFollowedUser = await mongoClient.followedUser.update({
            where: {
                id: followedUser.id,
            },
            data: {
                userId: {
                    set: followedUser.userId.filter((id) => id !== followedUserId),
                },
            },
        });
        await mongoClient.user.update({
            where: {
                id: userId,
            },
            data: {
                followedById: {
                    set: followedUser.userId.filter((id) => id !== followedUserId),
                },
            },
        });
        await mongoClient.user.update({
            where: {
                id: followedUserId,
            },
            data: {
                followedUserId: {
                    set: followedUser.userId.filter((id) => id !== followedUserId),
                },
            },
        });
        res.status(201).json(updatedFollowedUser);
    } catch (error) {
        res.status(500).json(error);
    }
};
