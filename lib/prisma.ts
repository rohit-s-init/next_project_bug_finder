import { PrismaTiDBCloud } from '@tidbcloud/prisma-adapter';
import { PrismaClient } from '../src/generated/prisma/client';

const adapter = new PrismaTiDBCloud({ url: process.env.DATABASE_URL });
const globalForPrisma = global as unknown as {
  prisma: PrismaClient; 
}; 

const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter, 
  }); 
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma; 
export default prisma; 