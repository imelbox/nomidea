import React from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import NextError from 'next/error';

import prisma from '../../lib/prisma';

export const getServerSideProps: GetServerSideProps = async (queryContext) => {
	const profile = await prisma.profile.findFirst({
		where: {
			id: Number(queryContext.params?.id) || -1,
		},
		// include: {
		// 	links: true,
		// 	owner: true,
		// },
	});

	if (!profile) queryContext.res.statusCode = 404;

	return {
		props: { profile },
	};
};

export default function ProfilePage({ profile }) {
	const router = useRouter();

	if (!profile) {
		return <NextError statusCode={404} title="Profile Not Found" />;
	}

	const id = router.query.id;

	return (
		<div>
			<h1>Profile {id} </h1>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quisquam.</p>
			<code>{JSON.stringify(profile)}</code>
		</div>
	);
}
