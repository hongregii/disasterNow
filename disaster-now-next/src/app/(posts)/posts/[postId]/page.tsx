import CommentBox from "@/components/comments/CommentBox";
import { WriteComment } from "@/components/comments/WriteComment";

export default async function Post({ params }: { params: { postId: number } }) {
  const getOnePost = async () => {
    const resData = await fetch(
      `http://localhost:3100/posts/${params.postId}`,
      {
        // next: { revalidate: 5 },
        cache: "no-store",
      }
    );
    // console.log(resData.data);
    return resData.json();
  };

  const data = getOnePost();

  const gallery = await data;
  console.log(gallery);

  const parsedDateArray = await gallery?.createdAt
    ?.toString()
    // .replace("2023-", "")
    .split(/[T,.]/);
  parsedDateArray.splice(parsedDateArray.length - 1);

  const parsedDate =
    parsedDateArray[0].replaceAll("-", ".") +
    " " +
    parsedDateArray[1].slice(0, 5);

  const getComments = async () => {
    const resData = await fetch(
      `http://localhost:3100/comments/allComments/${params.postId}`,
      {
        cache: "no-store",
      }
    );
    // console.log(resData.data);
    return resData.json();
  };

  // const commentData = getComments();

  const comments = await getComments().then((res) => res.slice(0, 10));
  // console.log("comments : ", comments);

  return (
    <div>
      {/* <span>{params.postId}</span> */}
      {/* 제목박스 */}
      <div className="flex flex-col border-b p-3">
        <h1>{gallery.title}</h1>
        <div className="flex flex-row ml-1">
          <span className="m-1 text-sm h-full pr-4 border-r border-gray-300 ">
            {gallery?.userName}
          </span>
          <span className="m-1 text-sm">{parsedDate}</span>
        </div>
      </div>
      {/* 내용박스 */}
      <div className="m-1 flex flex-col ">
        <div className="m-1 flex justify-center align-center">
          <img
            className="w-100 border border-gray-500 h-96"
            src={`http://localhost:3100${gallery?.img.replace("static", "")}`}
            alt={gallery?.img.replace("static", "")}
          />
        </div>
        <div className="m-2 h-40">
          <p>{gallery?.content}</p>
        </div>
      </div>
      {/* 댓글박스 */}
      <div>
        <h2 className="p-2 border-l border-r border-gray-300 border-4">댓글</h2>
        <div className="mb-4">
          {comments?.map(
            (comment: {
              userName: string;
              comment: string;
              createdAt: string;
            }) => {
              return <CommentBox key={comment.createdAt} comment={comment} />;
            }
          )}
        </div>
      </div>
      {/* 댓글 입력창 */}
      <div className="flex justify-center">
        <WriteComment postId={params.postId} />
      </div>
    </div>
  );
}
