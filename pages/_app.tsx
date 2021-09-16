import { AppProps } from 'next/app';
import { Provider as NextAuthProvider } from 'next-auth/client';
import Layout from '@components/Layout';

type GeneralPageProps = Partial<{
	layout: React.FunctionComponent | React.ComponentClass;
}>;

const App = ({ Component, pageProps }: AppProps<GeneralPageProps>): JSX.Element => {
	const PageLayout = Component.defaultProps?.layout || Layout;

	return (
		<NextAuthProvider session={pageProps.session}>
			<PageLayout>
				<Component {...pageProps} />
			</PageLayout>
		</NextAuthProvider>
	);
};

export default App;
