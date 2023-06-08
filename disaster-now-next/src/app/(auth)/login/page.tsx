"use client";

import { loginAxios, postAxios } from "@/api/axiosInstance";
import { LoginDto } from "@/interface/userDtos";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Auth() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const onAuthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };
  const router = useRouter();

  const handleLogin = async (loginData: LoginDto) => {
    // const res = await postAxios("auth/login", loginData);
    // console.log(res);
    // sessionStorage.setItem("token", res.data.token);
    const token = await loginAxios(loginData);
    if (token) {
      router.push("/posts");
      // return;
    }
  };
  return (
    <div className="box-border h-64 w-64 p-4  flex flex-col align-center justify-center mx-auto h-screen">
      <div className="">AUTH</div>
      <div className="flex flex-col align-center justify-center bg-sky-500 p-3">
        <label>
          email
          <input
            type="text"
            name="email"
            className="rounded text-black"
            onChange={onAuthChange}
          />
        </label>
        <label>
          password
          <input
            type="password"
            name="password"
            className="rounded text-black"
            onChange={onAuthChange}
          />
        </label>
        <button
          className="bg-white m-2 w-16 text-black justify-self-center rounded"
          onClick={() => {
            // e.preventDefault();
            // console.log(loginData);
            // alert(loginData?.email + loginData?.password);
            handleLogin(loginData);
          }}
        >
          LOGIN
        </button>
        <Link href={"sign-up"}>
          <button>Sign Up</button>
        </Link>
      </div>
      <Link href={"/posts"}>BACK</Link>
    </div>
  );
}
