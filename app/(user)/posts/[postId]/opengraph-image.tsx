/* eslint-disable @next/next/no-img-element */
import { getPostByName } from "@/lib/posts";
import { ImageResponse } from "next/server";
import { notFound } from "next/navigation";

export const size = {
  width: 900,
  height: 450,
};

export const contentType = "image/png";

interface Props {
  params: {
    postId: string;
  };
}

export default async function og({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`); //deduped!
  if (!post) notFound();

  return new ImageResponse(
    (
      <div tw="relative flex items-center justify-center">
        <img src={post?.meta.thumbnail} alt={post?.meta.title} />
        <div tw="absolute flex bg-black opacity-50 inset-0 " />
        <div tw="absolute flex items-center top-2 w-full ">
          <p tw="text-white text-4xl flex font-bold m-5">{post?.meta.title}</p>
          <p tw="text-indigo-200 text-xl flex font-bold m-5">
            {post?.meta.summary}
          </p>
          <p tw="text-purple-200 text-xl flex font-bold m-5">
            {post?.meta.date}
          </p>
        </div>
      </div>
    ),
    size
  );
}
