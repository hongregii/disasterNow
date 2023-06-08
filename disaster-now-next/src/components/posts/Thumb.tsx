import Link from "next/link";

interface ThumbProps {
  post: {
    postId: number;
    title?: string;
    content?: string;
    img?: string;
    createdAt: string;
  };
}

export default function Thumb({ post }: ThumbProps) {
  // const parsedDate = new Intl.DateTimeFormat("ko").format(post?.createdAt);
  const parsedDateArray = post?.createdAt
    ?.toString()
    .replace("2023-", "")
    .split(/[T,.]/);
  parsedDateArray?.splice(parsedDateArray.length - 1);

  const parsedDate =
    parsedDateArray[0].replace("-", "월 ").replaceAll("0", "") +
    "일 " +
    parsedDateArray[1].slice(0, 5);

  return (
    <li className="h-16 m-1 p-2 border border-gray-300 bg-white rounded-md hover:bg-slate-200">
      <Link href={`posts/${post.postId}`}>
        <div id={post.postId.toString()} className="flex items-center">
          <div className="mr-2 ml-2 w-32">
            <img
              src={post.img}
              alt={"no img"}
              className="h-full m-1 border border-gray-100"
            />
          </div>
          <div className="flex flex-col">
            <span>{post.title}</span>
            <span>{parsedDate}</span>
            {/* <span>{post?.createdAt?.toString()}</span> */}
          </div>
        </div>
      </Link>
    </li>
  );
}
