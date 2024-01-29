import { PrismaClient as MongoClient } from "../../prisma/generated"
import { Prisma } from '../../prisma/generated';
import { DefaultArgs } from "@prisma/client/runtime/library";

type ClientMongo = MongoClient<Prisma.PrismaClientOptions, never, DefaultArgs>

export const mongoClient: ClientMongo = new MongoClient();
