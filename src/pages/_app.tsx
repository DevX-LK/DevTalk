import { HeaderBar } from '@/Components/Header';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<HeaderBar
				links={[
					{ link: '/', label: 'Home' },
					{ link: '/About', label: 'About' },
					{ link: '/Blog', label: 'Blog' },
					{ link: '/Contact', label: 'Contact' },
				]}
			/>
			<Component {...pageProps} />
		</>
	);
}
