import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';

// get access to create a user
export const getServerSideProps: GetServerSideProps = async (queryContext) => {
	// check if user is logged in
	const session = await getSession({ req: queryContext.req });

	if (!session) {
		return {
			props: {},
			redirect: {
				destination: '/',
			},
		};
	}

	return {
		props: {},
	};
};

export default function CreateUserPage(): JSX.Element {
	return (
		<div>
			<h1>Create User</h1>
			<p>Create a new user.</p>
			<form>
				<input type="text" name="name" placeholder="Name" />
				<input type="text" name="email" placeholder="Email" />
				<input type="password" name="password" placeholder="Password" />
				<input type="submit" value="Create User" />
			</form>
		</div>
	);
}
