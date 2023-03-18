import { Grid, Text } from '@mantine/core';
import Image from 'next/image';
import { AiOutlineHeart } from 'react-icons/ai';
import { MdComment } from 'react-icons/md';
import { BsBookmark } from 'react-icons/bs';
import { createStyles } from '@mantine/core';
import app from '@/firebase.config';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { useEffect } from 'react';
import { getPosts } from '../../lib/api';

const db = getFirestore(app);
let PostsData: any = [];

const useStyles = createStyles({
	likeContainer: {
		marginLeft: '2.5rem',
		padding: '4px',
		borderRadius: '5px',
		display: 'flex',
		alignItems: 'center',
		'&:hover': {
			backgroundColor: 'rgba(8, 8 ,8, 0.4)',
		},
	},
	commentContainer: {
		marginLeft: '1rem',
		padding: '6px',
		borderRadius: '5px',
		display: 'flex',
		alignItems: 'center',
		'&:hover': {
			backgroundColor: 'rgba(8, 8 ,8, 0.4)',
		},
	},
	savePost: {
		display: 'flex',
		padding: '8px',
		borderRadius: '5px',
		alignItems: 'center',
		marginRight: '0.5rem',
		'&:hover': {
			backgroundColor: 'rgba(8, 8 ,8, 0.4)',
		},
	},
});

// export const sendContactForm = async (data) =>
// 	fetch('/api/contact', {
// 		method: 'POST',
// 		body: JSON.stringify(data),
// 		headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
// 	}).then((res) => {
// 		if (!res.ok) throw new Error('Failed to send message');
// 		return res.json();
// 	});

const Posts = () => {
	const { classes, cx } = useStyles();

	useEffect(() => {
		const getData = async () => {
			PostsData = await getPosts();
		};
		getData();
		console.log(PostsData);
	}, []);

	return (
		<>
			{PostsData.map((post: any) => (
				<Grid.Col
					span={'auto'}
					sx={{ backgroundColor: '#171717', borderRadius: '8px' }}
					mb="lg"
					key={Math.random()}
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
								2023-02-03
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
						<div style={{ display: 'flex', alignItems: 'center' }}>
							<div className={classes.likeContainer}>
								<AiOutlineHeart />
								<Text sx={{ fontSize: '12px', marginLeft: '4px' }}>
									06 Likes
								</Text>
							</div>
							<div className={classes.commentContainer}>
								<MdComment />
								<Text sx={{ fontSize: '12px', marginLeft: '4px' }}>
									03 Comments
								</Text>
							</div>
						</div>

						<div className={classes.savePost}>
							<BsBookmark />
						</div>
					</Grid.Col>
				</Grid.Col>
			))}
		</>
	);
};

export default Posts;
