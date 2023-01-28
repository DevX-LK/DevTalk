import { Grid, Text } from '@mantine/core';
import Image from 'next/image';

const PostsData = [
	{
		user: {
			name: 'Oshadha',
			avatar:
				'https://image.binance.vision/editor-uploads-original/9c15d9647b9643dfbc5e522299d13593.png',
		},
		timestamp: '26-01-2023',
		banner:
			'https://res.cloudinary.com/practicaldev/image/fetch/s--p2vPapJU--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pinwifhk5e3m4kitgb9g.png',
		title: 'Redux vs Context API: When to use them',
		content:
			'Context API is a built-in React tool that does not influence the final bundle size, and is integrated by design.',
		comments: [
			{
				user: {
					name: 'Shiro',
					avatar: 'https://api.dicebear.com/5.x/adventurer/svg?seed=Annie',
				},
				comment: 'Thanks!',
			},
		],
	},
	{
		user: {
			name: 'Loki',
			avatar: 'https://forkast.news/wp-content/uploads/2022/03/NFT-Avatar.png',
		},
		timestamp: '26-01-2023',
		banner:
			'https://res.cloudinary.com/practicaldev/image/fetch/s--iOCyrfWx--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bk7c5cwkik5r0fbbskqs.png',
		title: 'How to Add JWT Authentication to NestJS Apps',
		content:
			'Authentication is an important part of our applications. From time to time, there are many ways to handle authentication. With each requirement, we find the suitable approach to handle authentication.',
		comments: [
			{
				user: {
					name: 'Shiro',
					avatar: 'https://api.dicebear.com/5.x/adventurer/svg?seed=Annie',
				},
				comment: 'Thanks!',
			},
		],
	},
];

const Posts = () => {
	return (
		<>
			{PostsData.map((post) => (
				<Grid.Col
					span={'auto'}
					sx={{ backgroundColor: '#171717', borderRadius: '8px' }}
					mb="lg"
				>
					<Grid.Col span={12} sx={{ display: 'flex', alignItems: 'center' }}>
						<Image
							src={post.user.avatar}
							alt={post.title}
							width={30}
							height={30}
							style={{ borderRadius: '50%' }}
						/>
						<div style={{ marginLeft: '1rem' }}>
							<Text sx={{ fontWeight: 500, fontSize: '14px' }}>
								{post.user.name}
							</Text>
							<Text sx={{ fontSize: '10px', fontWeight: 500, opacity: 0.5 }}>
								{post.timestamp}
							</Text>
						</div>
					</Grid.Col>

					<Grid.Col span={12}>
						<Text
							sx={{ fontSize: '24px', fontWeight: 650, marginLeft: '2.5rem' }}
						>
							{post.title}
						</Text>
					</Grid.Col>
					<Grid.Col
						span={12}
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							alignContent: 'center',
						}}
					>
						<div>
							<div></div>
						</div>
					</Grid.Col>
				</Grid.Col>
			))}
		</>
	);
};

export default Posts;
