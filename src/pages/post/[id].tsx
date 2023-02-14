import { useRouter } from 'next/router';

const PostPage = () => {
	const router = useRouter();
	const postId = router.query.id;

	return <h1>{postId}</h1>;
};

export default PostPage;
