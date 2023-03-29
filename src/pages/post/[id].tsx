import { useRouter } from 'next/router';
import { getFirestore, doc, getDoc, onSnapshot } from 'firebase/firestore';
import app from '@/firebase.config';

const db = getFirestore(app);

const PostPage = () => {
	const router = useRouter();
	const postId = router.query.id;

	const docRef = doc(db, 'Posts', `${postId}`);
	onSnapshot(docRef, (doc) => {
		console.log(doc.data());
	});

	// const docSnap = await getDoc(docRef);

	// if (docSnap.exists()) {
	// 	return docSnap.data();
	// } else {
	// 	console.error('No such document!');
	// }

	// const postData = getPostDetails()
	// 	.then((response) => response)
	// 	.then((data) => data);
	// console.log(postData);

	return <h1>{postId}</h1>;
};

export default PostPage;
