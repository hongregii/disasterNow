import { ITags } from "@/interface/postsDtos";

export default function Best({ data }: { data: ITags }) {
  return (
    <div className="bg-white rounded-lg w-52 h-50 flex flex-col m-1 p-2 content-center justify-center">
      <h2 className="m-0 p-0 ">{data.tagName}</h2>
      <h4>{data.msg?.substring(0, 28) + "..."}</h4>
    </div>
  );
}
