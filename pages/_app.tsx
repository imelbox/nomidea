import { AppProps } from 'next/app';
import Layout from '@components/Layout';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
};

export default App;
