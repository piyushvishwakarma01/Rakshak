import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config(); // Ensure env variables are loaded

const globalForPrisma = global as unknown as { prisma?: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query', 'info', 'warn', 'error'], // Logs database queries
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
