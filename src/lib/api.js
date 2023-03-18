export const getPosts = async () =>
	fetch('/api/posts').then((res) => res.json());
