import { Button, Grid, Input, createStyles } from '@mantine/core';
import { useForm } from 'react-hook-form';

const useStyles = createStyles({
	contentInput: {
		width: '100%',
		marginBottom: '2rem',
		fontWeight: 600,
		fontSize: '25px',
		outline: 'none',
		border: '0',
		padding: '1rem',
		borderRadius: '6px',
		fontFamily: 'poppins',
		backgroundColor: '#252525',
	},
	contentTextbox: {
		width: '100%',
		height: '600px',
		resize: 'none',
		padding: '1rem',
		outline: 'none',
		border: '0',
		borderRadius: '6px',
		fontFamily: 'poppins',
		backgroundColor: '#252525',
	},
});

const CreatePost = () => {
	const { classes, cx } = useStyles();

	return (
		<Grid
			sx={{
				padding: '2rem',
				fontFamily: 'poppins',
				'@media (max-width: 728px)': { flexDirection: 'column' },
			}}
		>
			<Grid.Col span={'auto'}>
				<input placeholder="New Post Title" className={classes.contentInput} />
				<textarea
					placeholder="New Post Content..."
					className={classes.contentTextbox}
				/>
			</Grid.Col>
			<Grid.Col span={2}>
				<Button
					sx={{
						width: '100%',
						'@media (max-width: 728px)': { width: '100px' },
					}}
				>
					Publish
				</Button>
				{/* Text Editor Pallete */}
			</Grid.Col>
		</Grid>
	);
};

export default CreatePost;
