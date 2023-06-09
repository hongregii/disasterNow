import { IGallery } from "@/interface/postsDtos";
import Link from "next/link";

interface ThumbProps {
  post: IGallery;
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
    <li className="h-18 m-1 p-2 border border-gray-300 bg-white rounded-md hover:bg-slate-200">
      <Link href={`posts/${post.postId}`}>
        <div id={post.postId.toString()} className="flex items-center">
          <div className="mr-2 ml-2 w-20">
            <img
              src={`http://localhost:3100${post?.img?.replace("static", "")}`}
              alt={"no img"}
              className="h-12 w-12 m-1 border border-gray-100"
            />
          </div>
          <div className="flex flex-col">
            <span>{post.title}</span>
            <span className="text-sm">{parsedDate}</span>
            {/* <span>{post?.createdAt?.toString()}</span> */}
          </div>
        </div>
      </Link>
    </li>
  );
}
