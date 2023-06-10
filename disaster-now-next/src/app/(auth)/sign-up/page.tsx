"use client";

import { postAxios, signUpAxios } from "@/api/axiosInstance";
import { Button } from "@/components/Button";
import { SignupDto } from "@/interface/userDtos";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Signup() {
  const [signupData, setSignupData] = useState<SignupDto>({
    email: "",
    password: "",
    passwordCheck: "",
    userName: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const router = useRouter();
  const handleSubmit = async (signupData: SignupDto) => {
    const res = await signUpAxios(signupData);
    console.log(res);

    if (res.status === 201) {
      router.push("/posts");
    }
  };
  return (
    <div>
      <div className="flex flex-row justify-between">
        <h1>Signup</h1>
        {/* <Button> */}
        <h1>
          <Link href={"/posts"}>HOME</Link>
        </h1>
        {/* </Button> */}
      </div>
      <div className="flex flex-col bg-gray-100 p-4 justify-center align-center">
        <label>
          email
          <input
            onChange={handleChange}
            name="email"
            className="m-2 rounded border-orange-50"
            type="email"
          />
        </label>
        <label>
          password
          <input
            onChange={handleChange}
            name="password"
            className="m-2 rounded border-black"
            type="password"
          />
        </label>
        <label>
          password check
          <input
            onChange={handleChange}
            name="passwordCheck"
            className="m-2 rounded border-black"
            type="password"
          />
        </label>
        <label>
          username
          <input
            onChange={handleChange}
            name="userName"
            className="m-2 rounded border-black"
            type="text"
          />
        </label>
        <Button
          onClick={() => {
            console.log(signupData);
            handleSubmit(signupData);
          }}
        >
          Sign up
        </Button>
      </div>
    </div>
  );
}
