import { Button, Grid, createStyles } from '@mantine/core';
import { useState } from 'react';
import app from '@/firebase.config';
import {
	getFirestore,
	doc,
	setDoc,
	Timestamp,
	getDoc,
} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const db = getFirestore(app);
const auth = getAuth(app);
const USER_ID =
	typeof window !== 'undefined' &&
	JSON.parse(localStorage.getItem('current_user_id') || '');

const useStyles = createStyles({
	contentInput: {
		width: '100%',
		marginBottom: '1rem',
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
		'@media (max-width: 728px)': { height: '500px' },
	},
	bannerInput: {
		width: '30%',
		padding: '0.2rem 0.2rem 0.2rem 0.5rem',
		outline: 'none',
		border: '0',
		borderRadius: '6px',
		backgroundColor: '#252525',
		fontFamily: 'poppins',
		marginBottom: '0.3rem',
		'@media (max-width: 728px)': { width: '50%' },
	},
});

const CreatePost = () => {
	const { classes, cx } = useStyles();
	const router = useRouter();
	const [BannerUrl, setBannerUrl] = useState('');
	const [titleInput, setTitleInput] = useState('');
	const [contentTextbox, setContentTextbox] = useState('');

	// const user_details =
	// console.log(user_details);

	const publishPost = async () => {
		const docRef = doc(db, 'Users', USER_ID);
		const docSnap = await getDoc(docRef);

		const postDocRef = await setDoc(doc(db, 'Posts', titleInput), {
			user: {
				uid: USER_ID,
				name: docSnap.exists() && docSnap.data().name,
				avatar: docSnap.exists() && docSnap.data().profileImgUrl,
			},
			timestamp: Timestamp.now(),
			banner: BannerUrl,
			title: titleInput,
			content: contentTextbox,
			likes: 0,
			comments: [],
		});

		toast.success('Published !', {
			position: 'bottom-right',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'dark',
		});
		router.push('/');
	};
	return (
		<Grid
			sx={{
				padding: '2rem',
				fontFamily: 'poppins',
				'@media (max-width: 728px)': { flexDirection: 'column' },
			}}
		>
			<Grid.Col span={'auto'}>
				<input
					placeholder="Banner url"
					className={classes.bannerInput}
					value={BannerUrl}
					onChange={(e) => setBannerUrl(e.target.value)}
				/>
				<input
					placeholder="New Post Title"
					className={classes.contentInput}
					value={titleInput}
					onChange={(e) => setTitleInput(e.target.value)}
				/>
				<textarea
					placeholder="New Post Content..."
					className={classes.contentTextbox}
					value={contentTextbox}
					onChange={(e) => setContentTextbox(e.target.value)}
				/>
			</Grid.Col>
			<Grid.Col span={2}>
				<Button
					sx={{
						width: '100%',
						'@media (max-width: 728px)': { width: '100px' },
					}}
					onClick={publishPost}
				>
					Publish
				</Button>
				{/* Text Editor Pallete */}
			</Grid.Col>
		</Grid>
	);
};

export default CreatePost;
