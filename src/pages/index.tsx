import { FooterLinks } from '@/Components/Footer/Footer';
import Menu from '@/Components/Menu/Menu';
import Posts from '@/Components/Posts/Posts';
import { Button, Grid } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
	const router = useRouter();

	useEffect(() => {
		localStorage.getItem('user') ? router.push('/') : router.push('/Register');
	}, [router]);

	return (
		<Grid>
			<Grid.Col
				span={'auto'}
				sx={{
					marginLeft: '1rem',
					'@media (max-width: 728px)': {
						margin: '1rem',
					},
				}}
			>
				<Posts />
			</Grid.Col>
			<Grid.Col
				span={2}
				sx={{
					marginRight: '1rem',
					'@media (max-width: 728px)': {
						display: 'none',
					},
				}}
			>
				<Link href="/CreatePosts">
					<Button
						variant="outline"
						sx={{
							width: '100%',
							height: '',
							'&:hover': { background: 'rgb(23, 90, 170)', color: '#fff' },
						}}
					>
						Create Post
					</Button>
				</Link>
				<Grid.Col
					span={'auto'}
					sx={{
						display: 'flex',
						flexDirection: 'column',
					}}
					mt="lg"
				>
					<Menu />
				</Grid.Col>
				<FooterLinks
					data={[
						{
							title: 'DevTalk',
							links: [
								{ link: '/', label: 'Home' },
								{ link: '/About', label: 'About' },
							],
						},
					]}
				/>
			</Grid.Col>
		</Grid>
	);
}
