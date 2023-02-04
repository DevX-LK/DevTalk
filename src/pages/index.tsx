import { FooterLinks } from '@/Components/Footer/Footer';
import Menu from '@/Components/Menu/Menu';
import Posts from '@/Components/Posts/Posts';
import { Button, Grid, MediaQuery } from '@mantine/core';

export default function Home() {
	return (
		<Grid>
			<Grid.Col
				span={'auto'}
				sx={{
					marginLeft: '2rem',
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
					marginRight: '2rem',
					'@media (max-width: 728px)': {
						display: 'none',
					},
				}}
			>
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
