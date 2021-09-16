// eslint-disable-next-line @typescript-eslint/no-var-requires
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient({
	log: ['query', 'info', 'warn', 'error'],
});

const users = [
	{
		name: 'admin',
		email: 'admin@nomidea.com',
		confirmed: true,
		profile: {
			create: {
				bio: 'I am the admin',
				avatar: 'https://randomuser.me/api/portraits/men/17.jpg',
				fullName: 'admin general',
				role: 'SUPER_ADMIN',
				links: {
					create: {
						provider: 'GITHUB',
						url: 'https://github.com/imelbox/nomidea',
					},
				},
			},
		},
	},
	{
		name: 'noadmin',
		email: 'noadmin@nomidea.com',
		confirmed: false,
		profile: {
			create: {
				bio: 'I am not the admin',
				avatar: 'https://randomuser.me/api/portraits/men/27.jpg',
				fullName: 'user play',
				role: 'USER',
				links: {
					create: {
						provider: 'GITHUB',
						url: 'https://github.com/imelbox/nomidea',
					},
				},
			},
		},
	},
];

const main = async () => {
	console.log('Start seeding...');

	try {
		await Promise.allSettled(
			users.map(async (user) => {
				console.log(`Seeding user ${user.name}...`);
				return await prisma.users.create(user);
			})
		);
	} catch (e) {
		console.log('Seed Error:', e);
	}

	console.log('Finished seeding.');
	await prisma.$disconnect();
	process.exit(0);
};

main();
