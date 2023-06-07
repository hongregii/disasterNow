import Link from "next/link";

export function Header() {
  return (
    <header className="bg-gray-100 h-12 w-full flex flex-row align-center justify-between ">
      <div className="m-3">
        <button>hamburger</button>
      </div>
      <h1 className="m-2 text-2xl font-extrabold">지금 재난</h1>
      <div className="m-3">
        <Link href={"/login"}>로그인</Link>
      </div>
    </header>
  );
}
