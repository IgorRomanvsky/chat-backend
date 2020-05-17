import { createServer, Server } from "http";
import express from "express";
import socketIo from "socket.io";
import { IMessage } from "./schemas/message.schema";

// Singleton class
export class ChatSocketService {
  private static instance: ChatSocketService;

  private userSocketByConnection = {};

  constructor() {}

  public static getInstance(): ChatSocketService {
    if (!ChatSocketService.instance) {
      ChatSocketService.instance = new ChatSocketService();
    }
    return ChatSocketService.instance;
  }

  public setUserSocketById(socket: any, userId: string): void {
    socket.userId = userId;
    this.userSocketByConnection[userId] = socket;
  }

  public sendMessageToRelevantUser(message: IMessage): void {
    const receiverSocket = this.userSocketByConnection[message.receiver];
    if (receiverSocket) {
      receiverSocket.emit("newmsg", message);
    }
  }
}
