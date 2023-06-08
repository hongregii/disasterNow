"use client";
import { useState } from "react";
import { Button } from "../Button";

export function WriteComment() {
  const [commentData, setCommentData] = useState({
    userName: "",
    password: "",
    comment: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setCommentData({ ...commentData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col w-11/12">
      <div className="flex flex-row  ">
        <input
          name="userName"
          onChange={handleChange}
          className="border border-gray-300 w-1/2 h-8 p-2"
          placeholder="닉네임"
        />
        <input
          name="password"
          onChange={handleChange}
          className="border border-gray-300 w-1/2 h-8 p-2"
          placeholder="비밀번호"
        />
      </div>
      <input
        name="comment"
        onChange={handleChange}
        className="border border-gray-300 w-full h-40 p-2"
        placeholder="댓글을 입력해 주세요"
      />
      <Button color="blue">등록</Button>
    </div>
  );
}
