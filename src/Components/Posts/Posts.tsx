import { Grid, Text } from '@mantine/core';
import Image from 'next/image';
import { AiOutlineHeart } from 'react-icons/ai';
import { MdComment } from 'react-icons/md';
import { BsBookmark } from 'react-icons/bs';
import { createStyles } from '@mantine/core';
import app from '@/firebase.config';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { useEffect } from 'react';
import Link from 'next/link';

const db = getFirestore(app);
let PostsData: any = [];

const useStyles = createStyles({
	container: {
		height: '85vh',
		overflow: 'scroll',
		'&::-webkit-scrollbar': {
			display: 'none',
		},
	},
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

const Posts = () => {
	const { classes, cx } = useStyles();

	useEffect(() => {
		const colRef = collection(db, 'Posts');
		getDocs(colRef)
			.then((snapshot) => {
				let posts: any = [];
				snapshot.docs.forEach((doc) => {
					posts.push({ ...doc.data(), id: doc.id });
				});
				PostsData = posts;
			})
			.catch((err) => console.error(err));
	}, []);

	const PostDataSorted = PostsData.sort((x: any, y: any) => {
		return y.timestamp.toDate() - x.timestamp.toDate();
	});

	return (
		<div className={classes.container}>
			{PostDataSorted.map((post: any) => (
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
								{post.timestamp.toDate().toDateString()}
							</Text>
						</div>
					</Grid.Col>

					<Grid.Col span={12}>
						<Text
							sx={{ fontSize: '24px', fontWeight: 650, marginLeft: '2.5rem' }}
						>
							<Link href={`/post/${post.id}`} legacyBehavior>
								<a>{post.title}</a>
							</Link>
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
		</div>
	);
};

export default Posts;
