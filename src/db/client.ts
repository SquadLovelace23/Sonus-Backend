import { PrismaClient as MongoClient } from "../../prisma/generated/mongodb_client"

const mongoClient = new MongoClient()

export default mongoClient