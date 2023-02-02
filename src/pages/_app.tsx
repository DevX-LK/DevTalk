import { useState } from 'react';
import { HeaderBar } from '@/Components/Header/Header';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import {
	ColorSchemeProvider,
	ColorScheme,
	MantineProvider,
} from '@mantine/core';

export default function App({ Component, pageProps }: AppProps) {
	const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');

	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

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
			</MantineProvider>
		</ColorSchemeProvider>
	);
}
