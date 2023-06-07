"use client";
import { getAxios } from "@/api/axiosInstance";
import Pagination from "@/components/posts/Pagination";
import Thumb from "@/components/posts/Thumb";
import Link from "next/link";
import { useState } from "react";
import { useQuery } from "react-query";

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const galleryData = [
    {
      postId: 1,
      title: "title1",
      content: "content1 content1 content1",
      img: "img",
      createdAt: "2023-06-07 11:32:00",
    },
    {
      postId: 2,
      title: "title2",
      content: "content2 content2 content2",
      img: "img",
      createdAt: "2023-06-07 11:32:00",
    },
    {
      postId: 3,
      title: "title3",
      content: "content3 content3 content3",
      img: "img",
      createdAt: "2023-06-07 11:32:00",
    },
    {
      postId: 4,
      title: "title4",
      content: "content4 content4 content4",
      img: "img",
      createdAt: "2023-06-07 11:32:00",
    },
    {
      postId: 5,
      title: "title5",
      content: "content5 content5 content5",
      img: "img",
      createdAt: "2023-06-07 11:32:00",
    },
    {
      postId: 6,
      title: "title6",
      content: "content6 content6 content6",
      img: "img",
      createdAt: "2023-06-07 11:32:00",
    },
    {
      postId: 7,
      title: "title7",
      content: "content7 content7 content7",
      img: "img",
      createdAt: "2023-06-07 11:32:00",
    },
    {
      postId: 8,
      title: "title8",
      content: "content8 content8 content8",
      img: "img",
      createdAt: "2023-06-07 11:32:00",
    },
    {
      postId: 9,
      title: "title9",
      content: "content9 content9 content9",
      img: "img",
      createdAt: "2023-06-07 11:32:00",
    },
    {
      postId: 10,
      title: "title10",
      content: "content10 content10 content10",
      img: "img",
      createdAt: "2023-06-07 11:32:00",
    },
    // {
    //   postId: 11,
    //   title: "title11",
    //   content: "content11 content11 content11",
    //   img: "img",
    // createdAt: "2023-06-07 11:32:00"
    // },
    // {
    //   postId: 12,
    //   title: "title12",
    //   content: "content12 content12 content12",
    //   img: "img",
    // createdAt: "2023-06-07 11:32:00"
    // },
  ];

  const [page, setPage] = useState(1);

  const handlePageChange = async (pageNumber: number): Promise<void> => {
    // searchParams;
    setPage(pageNumber);
  };

  const resData = useQuery(
    ["gallery", page],
    async () => {
      await getAxios(`/posts?page=${page}`);
    },
    { keepPreviousData: true }
  );
  return (
    <>
      <div>posts!</div>
      <Link href={"/write"}>등록</Link>
      <div className="h-32 w-auto p-4 m-3 bg-gray-300">
        <h2>요약 box</h2>
      </div>
      <div className="h-auto w-auto p-4 m-3 bg-gray-100">
        <h2>갤러리</h2>
        <div>
          <ul>
            {galleryData.map((data) => {
              return <Thumb post={data} key={data.postId} />;
            })}
          </ul>
          <Pagination handlePageChange={handlePageChange} />
        </div>
      </div>
    </>
  );
}
