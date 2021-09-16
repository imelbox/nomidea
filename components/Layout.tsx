import NextHead from 'next/head';
import Header from './Header';

import appIcon from '@assets/icon.png';

export default function Layout(props): JSX.Element {
	return (
		<>
			<NextHead>
				<title>{props.title || 'NOM idea | Notion Of Modules - Idea'}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="icon" href={appIcon.src} />
			</NextHead>
			<div className="layout">
				<Header />
				<div className="layout__content">{props.children}</div>
				<div className="layout__footer">
					<div className="layout__footer-copyright">
						<p>
							&copy; 2020-{new Date().getFullYear()} Copyright: <a href="//nomidea.com/copyright">nomidea.com</a>
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
