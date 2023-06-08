// "use client";
import { getAnyoneAxios } from "@/api/axiosInstance";
import Pagination from "@/components/posts/Pagination";
import Thumb from "@/components/posts/Thumb";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import next from "next/types";
import axios from "axios";
import { Button } from "@/components/Button";
import Best from "@/components/posts/Best";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // console.log("sp : ", searchParams);
  let totalPage;

  const getAllPosts = async () => {
    const resData = await fetch(
      `http://localhost:3100/posts?page=${searchParams?.page}`,
      {
        next: { revalidate: 10 },
      }
    );
    return resData.json();
  };

  const gallery = await getAllPosts();

  return (
    <>
      {/* <div>posts!</div> */}
      <div className="flex flex-row justify-between">
        <div></div>
        <Link href={"/write"}>
          <Button color="blue">게시물 등록</Button>
        </Link>
      </div>
      <div className=" w-auto p-2 pt-4 ml-3 mr-3 bg-slate-400 rounded-md">
        <h2>HOT</h2>
        <div className="flex flex-row justify-between">
          {gallery
            .slice(0, 3)
            ?.map(
              (data: {
                postId: number;
                title?: string;
                content?: string;
                img?: string;
                createdAt: string;
              }) => {
                return (
                  <Best
                    data={{ img: data.img, title: data.title }}
                    key={data.title}
                  />
                );
              }
            )}
        </div>
      </div>
      {/* <div className="ml-3 mr-3 flex flex-end">
        <Link href={"/write"}>
          <Button>게시물 등록</Button>
        </Link>
      </div> */}
      <div className="h-auto w-auto p-4 m-3 bg-slate-100 rounded-md">
        <h2>갤러리</h2>
        <div>
          <ul>
            {/* {galleryData.map((data) => {
              return <Thumb post={data} key={data.postId} />;
            })} */}
            {gallery?.map(
              (data: {
                postId: number;
                title?: string;
                content?: string;
                img?: string;
                createdAt: string;
              }) => {
                return <Thumb post={data} key={data.postId} />;
              }
            )}
          </ul>
          <Pagination />
        </div>
      </div>
    </>
  );
}
