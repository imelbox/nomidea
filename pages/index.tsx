import { useRouter } from 'next/router';
import React from 'react';

export default function IndexPage() {
	const router = useRouter();

	const inputRef = React.useRef<HTMLInputElement>(null);

	const handleClick = React.useCallback(() => {
		// go to profile page base to input value
		router.push(`/profile/${inputRef.current!.value}`);
	}, [inputRef.current]);

	return (
		<div>
			<h3>NOMidea</h3>
			<h4>Notion of Modules idea</h4>
			<p>Welcome to NOMidea a simple idea of modules in React and TypeScript,</p>

			<div>
				<h4>check profile</h4>
				<input ref={inputRef} type="text" />
				<button onClick={handleClick}>check</button>
			</div>
		</div>
	);
}
