export default function CommentBox({
  comment,
}: {
  comment: { userName: string; comment: string; createdAt: string };
}) {
  const parsedDateArray = comment.createdAt
    ?.toString()
    .replace("2023-", "")
    .split(/[T,.]/);
  parsedDateArray.splice(parsedDateArray.length - 1);

  const parsedDate =
    parsedDateArray[0].replaceAll("-", ".") +
    " " +
    parsedDateArray[1].slice(0, 5);

  return (
    <div className="border border-gray-200 p-2 pl-4">
      <h3 className="text-sm font-light">{comment.userName}</h3>
      <p>{comment.comment}</p>
      <span className="text-sm font-extralight">{parsedDate}</span>
    </div>
  );
}
