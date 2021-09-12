import { PrismaClient } from '@prisma/client';

declare global {
	// eslint-disable-next-line no-var
	var prisma: PrismaClient | undefined;
}

const prisma = new PrismaClient();

if (!global.prisma) {
	global.prisma = prisma;
}

export default prisma;
