import NextError, { ErrorProps } from 'next/error';

function ErrorPage({ statusCode }: ErrorProps): JSX.Element {
	return (
		<NextError
			statusCode={statusCode}
			title={statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}
		/>
	);
}

ErrorPage.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

export default ErrorPage;
