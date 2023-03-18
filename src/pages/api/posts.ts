import { NextApiRequest, NextApiResponse } from 'next';
import app from '@/firebase.config';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const db = getFirestore(app);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'GET') {
		try {
			const PostsData: any = [];
			const colRef = collection(db, 'Posts');
			const docsSnap = await getDocs(colRef);
			await docsSnap.docs.map((doc) => PostsData.push({ ...doc.data() }));

			return res.status(200).json({ posts: PostsData });
		} catch (error: any) {
			console.log(error.message);
			return res.status(400).json({ message: error.message });
		}
	} else {
	}
};

export default handler;
