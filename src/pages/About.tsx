import { FooterLinks } from '@/Components/Footer/Footer';
import { Button, Grid, Text } from '@mantine/core';

const About = () => {
	return (
		<Grid>
			<Grid.Col
				sx={{
					display: 'flex',
					justifyContent: 'center',
					fontFamily: 'poppins',
					fontSize: '25px',
					textAlign: 'center',
					fontWeight: 600,
					marginTop: '8rem',
				}}
				span={12}
			>
				Our Mission is to Expand the
				<br /> IT industry in Sri lanka
			</Grid.Col>

			<Grid.Col
				span={'auto'}
				sx={{ display: 'flex', justifyContent: 'center' }}
			>
				<Text
					sx={{
						fontSize: '16px',
						fontWeight: 600,
						color: 'rgba(144, 144, 144, 0.7)',
					}}
				>
					Powered by DevX LK
				</Text>
			</Grid.Col>

			<Grid.Col
				span={'auto'}
				sx={{
					position: 'absolute',
					bottom: '0',
					right: '0',
					left: '0',
				}}
			>
				<FooterLinks data={[]} />
			</Grid.Col>
		</Grid>
	);
};

export default About;
