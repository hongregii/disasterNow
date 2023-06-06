import Link from "next/link";

export default function Page() {
  return (
    <>
      <div>posts!</div>
      <Link href={"/write"}>등록</Link>
    </>
  );
}
