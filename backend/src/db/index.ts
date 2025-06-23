// Exports a PrismaClient instance for database
//  operations throughout the application.

import { PrismaClient } from "../generated/prisma";

export const prisma = new PrismaClient();
