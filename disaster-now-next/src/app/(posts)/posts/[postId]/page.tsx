export default function Post({ params }: { params: { postId: number } }) {
  return <div>{params.postId}</div>;
}
