import Link from "next/link";

export function Header() {
  return (
    <header className="bg-indigo-900 text-white h-12 w-full flex flex-row align-center justify-between ">
      <div className="m-3 ml-5 mr-5">
        <Link href={"/posts"}>
          <button>HOME</button>
        </Link>
      </div>
      <h1 className="m-2 text-2xl font-extrabold">지금 재난</h1>
      <div className="m-3 ml-5 mr-5">
        <Link href={"/login"}>로그인</Link>
      </div>
    </header>
  );
}
