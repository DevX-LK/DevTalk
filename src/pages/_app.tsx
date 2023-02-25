import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { HeaderBar } from '@/Components/Header/Header';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import {
	ColorSchemeProvider,
	ColorScheme,
	MantineProvider,
} from '@mantine/core';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
	const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
	const router = useRouter();

	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

	useEffect(() => {
		if (typeof window !== 'undefined') {
			!localStorage.getItem('user') && router.push('/register');
		}
	}, []);

	return (
		<ColorSchemeProvider
			colorScheme={colorScheme}
			toggleColorScheme={toggleColorScheme}
		>
			<MantineProvider
				theme={{ colorScheme }}
				withGlobalStyles
				withNormalizeCSS
			>
				<HeaderBar
					links={[
						{ link: '/', label: 'Home' },
						{ link: '/About', label: 'About' },
						{ link: '/Blog', label: 'Blog' },
						{ link: '/Contact', label: 'Contact' },
					]}
				/>
				<Component {...pageProps} />
				<ToastContainer
					position="bottom-right"
					autoClose={3000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="dark"
				/>
			</MantineProvider>
		</ColorSchemeProvider>
	);
}
