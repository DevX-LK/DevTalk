import { Button, Grid, Input, Textarea } from '@mantine/core';

const CreatePost = () => {
	return (
		<Grid sx={{ padding: '2rem', fontFamily: 'poppins' }}>
			<Grid.Col span={'auto'}>
				<Input
					variant="filled"
					placeholder="New Post Title"
					size="xl"
					sx={{ marginBottom: '2rem', fontWeight: 600 }}
				/>
				<Textarea
					placeholder="Start..."
					variant="filled"
					radius="md"
					size="xl"
					sx={{ height: '700px' }}
				/>
			</Grid.Col>
			<Grid.Col span={2}>
				<Button sx={{ width: '100%' }}>Publish</Button>
			</Grid.Col>
		</Grid>
	);
};

export default CreatePost;
