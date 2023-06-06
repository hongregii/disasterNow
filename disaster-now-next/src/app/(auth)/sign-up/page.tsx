"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function Signup() {
  const [signupData, setSignupData] = useState({});
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h1>Signup</h1>
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
        <button onClick={() => console.log(signupData)}>Sign up</button>
        <Link href={"/"}>HOME</Link>
      </div>
    </div>
  );
}
