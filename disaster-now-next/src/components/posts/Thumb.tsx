import Link from "next/link";

interface ThumbProps {
  post: {
    postId: number;
    title: string;
    content: string;
    img: string;
    createdAt: string;
  };
}

export default function Thumb({ post }: ThumbProps) {
  return (
    <li className="h-16 m-1 border border-gray-300 bg-white">
      <Link href={`posts/${post.postId}`}>
        <div id={post.postId.toString()} className="flex items-center">
          <div className="mr-2">
            <img src={post.img} alt={post.img} className="h-full" />
          </div>
          <div className="flex flex-col">
            <span>{post.title}</span>
            <span>{post.createdAt}</span>
          </div>
        </div>
      </Link>
    </li>
  );
}
