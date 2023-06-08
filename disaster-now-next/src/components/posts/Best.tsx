export default function Best({
  data,
}: {
  data: { img?: string; title?: string };
}) {
  return (
    <div className="bg-white rounded-lg w-52 h-50 flex flex-col m-1 p-2 content-center justify-center">
      <img src={data.img} alt="no img" className="w-20 h-20" />
      <h4>{data.title?.substring(0, 30)}</h4>
    </div>
  );
}
