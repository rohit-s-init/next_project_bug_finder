import { PrismaTiDBCloud } from '@tidbcloud/prisma-adapter';
import { PrismaClient } from '../src/generated/prisma/client';

const adapter = new PrismaTiDBCloud({ url: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

export default prisma;