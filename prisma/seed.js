const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient({
	log: ['query', 'info', 'warn', 'error'],
});

const main = async () => {
	console.log('Start seeding...');

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
					role: 'ADMIN',
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

	try {
		for (const u of users) {
			const user = await prisma.user.create({
				data: u,
			});

			console.log(`Created user with ID ${user.id}`);
		}
	} catch (e) {
		console.error(e);
	}

	console.log('Finished seeding.');
	await prisma.$disconnect();
	process.exit(0);
};

main();

console.log('Bottom of script');
