import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-screen justify-center align-center h-screen">
      <h1 className="justify-self-center">HOME</h1>
      <Link href={"/login"}>LOGIN</Link>
      <Link href={"/posts"}>POSTS</Link>
    </div>
  );
}
