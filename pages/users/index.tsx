import { GetServerSideProps, NextPage } from 'next';
import type { User } from '.prisma/client';
import prisma from '@modules/prisma';
import { getSession } from 'next-auth/client';

// get users from database and set them to initialprops
export const getServerSideProps: GetServerSideProps = async (queryContext) => {
	// check if user is logged in
	const session = await getSession({ req: queryContext.req });

	if (!session) {
		return {
			props: {
				users: [],
			},
			redirect: {
				destination: '/',
			},
		};
	}

	const users = await prisma.user.findMany();

	return {
		props: {
			users,
		},
	};
};

interface PageProps {
	users: User[];
}

const UsersPage: NextPage<PageProps> = ({ users }) => {
	return (
		<div>
			<h1>Users</h1>
			<p>This is the users page</p>
			<ul>
				{users.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</div>
	);
};

export default UsersPage;
