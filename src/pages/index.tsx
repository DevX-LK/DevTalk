import Menu from '@/Components/Menu/Menu';
import Posts from '@/Components/Posts/Posts';
import { Button, Grid } from '@mantine/core';

export default function Home() {
	return (
		<Grid>
			<Grid.Col
				span={'auto'}
				sx={{
					marginLeft: '2rem',
				}}
			>
				<Posts />
			</Grid.Col>
			<Grid.Col
				span={2}
				sx={{
					marginRight: '2rem',
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
			</Grid.Col>
		</Grid>
	);
}
