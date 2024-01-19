import { PrismaClient as MongoClient } from "../../prisma/generated/mongodb_client"
import { Prisma } from '../../prisma/generated/mongodb_client';
import { DefaultArgs } from "@prisma/client/runtime/library";

type ClientMongo = MongoClient<Prisma.PrismaClientOptions, never, DefaultArgs>

export const mongoClient: ClientMongo = new MongoClient();
