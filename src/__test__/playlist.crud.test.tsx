import { Request, Response } from "express";
import { mongoClient } from "../db/client";
import {
  createPlaylist,
  getAllPlaylists,
  updatePlaylist,
  deletePlaylist,
} from "../controllers/playlists.controllers";

jest.mock("../db/client", () => ({
  mongoClient: {
    playlist: {
      create: jest.fn(),
      findMany: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
    likedPlaylist: {
      findMany: jest.fn(),
      delete: jest.fn(),
    },
  },
}));

describe("Playlists Controller", () => {
  let mockReq: Partial<Request>;
  let mockRes: Partial<Response>;

  beforeEach(() => {
    mockReq = {
      params: { playlistId: "123", userId: "456" },
      body: { name: "Test Playlist", cover: "cover.jpg", songId: "789" },
    };
    mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  // CREATE
  it("should create a playlist", async () => {
    const mockPlaylist = {
      id: "123",
      name: "Test Playlist",
      userId: "456",
      cover: "cover.jpg",
    };
    (mongoClient.playlist.create as jest.Mock).mockResolvedValue(mockPlaylist);

    await createPlaylist(mockReq as Request, mockRes as Response);

    expect(mongoClient.playlist.create).toHaveBeenCalledWith({
      data: { name: "Test Playlist", userId: "456", cover: "cover.jpg" },
    });
    expect(mockRes.status).toHaveBeenCalledWith(201);
    expect(mockRes.json).toHaveBeenCalledWith(mockPlaylist);
  });

  // READ
  it("should get all playlists", async () => {
    const mockPlaylists = [
      { id: "123", name: "Test Playlist", userId: "456", cover: "cover.jpg" },
    ];
    (mongoClient.playlist.findMany as jest.Mock).mockResolvedValue(
      mockPlaylists
    );

    await getAllPlaylists(mockReq as Request, mockRes as Response);

    expect(mongoClient.playlist.findMany).toHaveBeenCalled();
    expect(mockRes.status).toHaveBeenCalledWith(201);
    expect(mockRes.json).toHaveBeenCalledWith(mockPlaylists);
  });

  // UPDATE
  it("should update a playlist", async () => {
    const mockPlaylist = {
      id: "123",
      name: "Test Playlist",
      songId: "789",
      cover: "cover.jpg",
    };
    (mongoClient.playlist.update as jest.Mock).mockResolvedValue(mockPlaylist);

    await updatePlaylist(mockReq as Request, mockRes as Response);

    expect(mongoClient.playlist.update).toHaveBeenCalledWith({
      where: { id: "123" },
      data: { name: "Test Playlist", songId: "789", cover: "cover.jpg" },
    });
    expect(mockRes.status).toHaveBeenCalledWith(201);
    expect(mockRes.json).toHaveBeenCalledWith(mockPlaylist);
  });

  // DELETE
  it("should delete a playlist", async () => {
    const mockPlaylist = { id: "123" };
    (mongoClient.playlist.delete as jest.Mock).mockResolvedValue(mockPlaylist);
    (mongoClient.likedPlaylist.findMany as jest.Mock).mockResolvedValue([]);
    (mongoClient.likedPlaylist.delete as jest.Mock).mockResolvedValue({});

    await deletePlaylist(mockReq as Request, mockRes as Response);

    expect(mongoClient.likedPlaylist.findMany).toHaveBeenCalledWith({
      where: { playlistId: "123" },
    });
    expect(mongoClient.playlist.delete).toHaveBeenCalledWith({
      where: { id: "123" },
    });
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith(mockPlaylist);
  });
});
