import { Router } from "express";
import { createUser, deleteUser, followUser, getAllUsers, getUserByEmail, getUserById, getUserByName, unfollowUser, updateUser } from "../controllers/users.controllers";

const userRoutes = Router()

userRoutes.post("/", createUser);

userRoutes.get("/email/:userEmail", getUserByEmail);
userRoutes.get("/name/:userName", getUserByName);
userRoutes.get("/:userId", getUserById);
userRoutes.get("/", getAllUsers);

userRoutes.patch("/:userId", updateUser);

userRoutes.delete("/:userId", deleteUser);

userRoutes.post("/:userId/:followedUserId", followUser);
userRoutes.delete("/:userId/:followedUserId", unfollowUser);

export default userRoutes