import { PrismaClient as MongoClient } from "../../prisma/generated/mongodb_client"
import { Prisma } from '../../prisma/generated/mongodb_client';
import { DefaultArgs } from "@prisma/client/runtime/library";


type ClientMongo = MongoClient<Prisma.PrismaClientOptions, never, DefaultArgs>

export const prisma: ClientMongo = new MongoClient();

// import { PrismaClient } from "@prisma/client"

// const prisma = new PrismaClient()

// export default prisma