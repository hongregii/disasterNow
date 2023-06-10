"use client";
import { useState } from "react";
import { Button } from "../Button";
import { postAxios } from "@/api/axiosInstance";
import Router from "next/router";
import { useRouter } from "next/navigation";

export function WriteComment({ postId }: { postId: number }) {
  const [commentData, setCommentData] = useState({
    userName: "",
    password: "",
    comment: "",
  });
  const router = useRouter();

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setCommentData({ ...commentData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (
      !commentData.userName ||
      !commentData.password ||
      !commentData.comment
    ) {
      alert("댓글을 확인해 주세요");
      Router.replace(Router.asPath);
      return;
    }
    const res = await postAxios(`comments/${postId}`, commentData);
    // console.log(res);
    // alert(res);
    if (res.status === 201) {
      setCommentData({
        userName: "",
        password: "",
        comment: "",
      });
      alert("등록이 완료되었습니다.");
      router.refresh();
    }
  };

  return (
    <div className="flex flex-col w-11/12">
      <div className="flex flex-row  ">
        <input
          name="userName"
          onChange={handleChange}
          value={commentData?.userName}
          className="border border-gray-300 w-1/2 h-8 p-2"
          placeholder="닉네임"
        />
        <input
          name="password"
          onChange={handleChange}
          value={commentData?.password}
          className="border border-gray-300 w-1/2 h-8 p-2"
          placeholder="비밀번호"
          type="password"
        />
      </div>
      <input
        name="comment"
        onChange={handleChange}
        value={commentData?.comment}
        className="border border-gray-300 w-full h-40 p-2"
        placeholder="댓글을 입력해 주세요"
      />
      <Button color="blue" onClick={handleSubmit}>
        댓글 쓰기
      </Button>
    </div>
  );
}
