// Header.tsx
import React from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/client';

import AppIcon from '@assets/icon.png';

const Header: React.FC = () => {
	const router = useRouter();
	const isActive: (pathname: string) => boolean = (pathname) => router.pathname === pathname;

	const [session, loading] = useSession();

	const appIcon = (
		<Link href="/">
			<a className="bold" data-active={isActive('/')}>
				<NextImage src={AppIcon} width={32} height={32} alt="NOM Idea App Icon" />
			</a>
		</Link>
	);

	let left = (
		<div className="left">
			{appIcon}
			<style jsx>{`
				.left :global(a[data-active='true']) {
					color: gray;
				}
			`}</style>
		</div>
	);

	let right = null;

	if (loading) {
		right = (
			<div className="right">
				<p>Validating session ...</p>
			</div>
		);
	}

	if (!session) {
		right = (
			<div className="right">
				<Link href="/api/auth/signin">
					<a data-active={isActive('/signup')}>Log in</a>
				</Link>
				<style jsx>{`
					.right {
						margin-left: auto;
					}

					.right a {
						border: 1px solid var(--geist-foreground);
						padding: 0.5rem 1rem;
						border-radius: 3px;
					}
				`}</style>
			</div>
		);
	}

	if (session) {
		left = (
			<div className="left">
				{appIcon}
				<Link href="/users">
					<a className="bold" data-active={isActive('/users')}>
						Users
					</a>
				</Link>
			</div>
		);
		right = (
			<div className="right">
				<p>
					{session.user.name} ({session.user.email})
				</p>
				<Link href="/users/create" passHref>
					<button>
						<a>New User</a>
					</button>
				</Link>
				<button onClick={() => signOut()}>
					<a>Log out</a>
				</button>
			</div>
		);
	}

	return (
		<nav>
			{left}
			{right}
			<style jsx>{`
				:global(a) {
					text-decoration: none;
					color: var(--geist-foreground);
					display: inline-block;
				}
				nav {
					display: flex;
					padding: 2rem;
					align-items: center;
					justify-content: space-between;
				}
				nav > :global(*) {
					display: flex;
					align-items: center;
					gap: 0.5em;
				}
			`}</style>
		</nav>
	);
};

export default Header;
