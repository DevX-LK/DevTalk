import { createStyles, Grid } from '@mantine/core';
import { useState } from 'react';

const useStyles = createStyles((theme) => ({
	tab: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	activeTab: {
		backgroundColor: 'rgba(23, 90, 145, 0.5)',
		color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
			.color,
	},
}));

const register = () => {
	const { classes, cx } = useStyles();
	const [activeTab, setActiveTab] = useState('register');

	return (
		<Grid
			sx={{
				display: 'flex',
				justifyContent: 'center',
				overflow: 'hidden',
			}}
		>
			<Grid.Col span={12} sx={{ display: 'flex', justifyContent: 'center' }}>
				<Grid.Col
					span={4}
					sx={{
						backgroundColor: '#171717',
						borderRadius: '5px',
						display: 'flex',
						padding: 0,
						overflow: 'hidden',
					}}
				>
					<Grid.Col
						span={6}
						className={`${classes.tab} ${
							activeTab === 'register' ? classes.activeTab : ''
						}`}
						onClick={() => setActiveTab('register')}
					>
						Register
					</Grid.Col>
					<Grid.Col
						span={6}
						className={`${classes.tab} ${
							activeTab === 'login' ? classes.activeTab : ''
						}`}
						onClick={() => setActiveTab('login')}
					>
						Login
					</Grid.Col>
				</Grid.Col>
			</Grid.Col>
			<Grid.Col span={4} sx={{ backgroundColor: '#171717' }}>
				{/* form here */}
			</Grid.Col>
		</Grid>
	);
};

export default register;

/* const generateToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
}; */
