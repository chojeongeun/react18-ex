import useGetData from './useGetData';

function Post() {
	const data = useGetData('https://jsonplaceholder.typicode.com/posts');
	console.log(data);
	return <div>Post</div>;
}

export default Post;
