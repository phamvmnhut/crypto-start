"use client"
import { getPostBySlug } from "@/lib/posts";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from 'next-mdx-remote/serialize';
import { ChangeEvent, useEffect, useState } from "react";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { CustomH1, CustomH2, CustomH3, CustomH4, CustomH5, CustomH6, CustomA, CustomImg, CustomLi, CustomUl, Video, CustomImage } from "./CustomMdx";
import { clsV2 } from "@/lib/cls";

type EditorMdxProp = {
  metaList: Meta[];
}

type ResProp = {
  error?: string;
  message?: string;
}

const MDX_STRUCTURE = `---
title: '__title__'
thumbnail: '__thumnail__'
date: '__date__'
tags: __tag__
summary: '__summary__'
---\n\n`;

const ProcessingComp = <svg
  className="mr-3 h-5 w-5 animate-spin text-white"
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
>
  <circle
    className="opacity-25"
    cx={12}
    cy={12}
    r={10}
    stroke="currentColor"
    strokeWidth={4}
  />
  <path
    className="opacity-75"
    fill="currentColor"
    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
  />
</svg>
  ;

export default function EditorMdx({ metaList }: EditorMdxProp) {
  const [selectedMeta, setSelectedMeta] = useState<number | null>(null);
  const [contentData, setContentData] = useState<string>("Không có nội dung nào đang được chọn");
  const [content, setContent] = useState<MDXRemoteSerializeResult>();

  const [processing, setProcessing] = useState<boolean>(false);
  const [commitMessage, setCommitMessage] = useState<string>("");

  function onChangeSelectedMeta(i: number) {
    setSelectedMeta(i)
    getPostBySlug(metaList[i].id).then((res) => {
      setContentData(res.data.content)
    })
  }

  useEffect(() => {
    serialize(contentData, {
      mdxOptions: {
        development: process.env.NODE_ENV === 'development',
        rehypePlugins: [
          rehypeHighlight,
          rehypeSlug,
          [rehypeAutolinkHeadings, {
            behavior: 'wrap'
          }],
        ],
        remarkPlugins: [
          remarkGfm
        ]
      }
    }).then((e) => {
      setContent(e);
    })
  }, [contentData])

  function onChangeMdxEdit(e: ChangeEvent<HTMLTextAreaElement>) {
    setContentData(e.target.value);
  }


  async function onSave() {
    if (processing) return;
    if (selectedMeta == null) return;
    try {

      const metaData = metaList[selectedMeta];

      let dateNow = new Date();

      const frontmatter = MDX_STRUCTURE
        .replace("__title__", metaData.title)
        .replace("__thumnail__", metaData.thumbnail)
        .replace("__date__", `${dateNow.getMonth() + 1}/${dateNow.getDate()}/${dateNow.getFullYear()}`)
        .replace("__tag__", "['crypto']")
        .replace("__summary__", metaData.summary)

      const res = await fetch(`/api/remote-mdx-data?slug=${metaData.id}`, {
        method: "POST",
        body: JSON.stringify({
          message: commitMessage,
          content: Buffer.from(frontmatter + contentData).toString('base64')
        })
      });

      const updateRes: ResProp = await res.json();
      if (updateRes?.error) {

      } else {

      }
    } finally {
      setProcessing(false);
    }
  }

  async function onRefreshData() {
    if (processing) return; {
      try {
        setProcessing(true);
        await fetch('/api/revalidate?secret=crypto-start');
      } finally {
        setProcessing(false);
      }
    }
  }



  return (
    <div className="overflow-clip px-5 py-2 flex flex-row justify-start">
      <div className="min-w-[10rem] pr-5 border-r">
        <div className="flex flex-row justify-between gap-5 mb-5">
          {/* <input className="w-full outline-1 outline rounded-md px-5" placeholder="Nội dung commit" 
            value={commitMessage} onChange={(e) => setCommitMessage(e.target.value)} 
            /> */}
          <button className={
            clsV2(
              "font-bold px-5 py-2 rounded-md bg-pink-500 hover:scale-105",
            )
          }>
            Tạo mới
          </button>
        </div>
        {
          metaList.map(function (e, i) {
            return (
              <div key={i} className={
                clsV2(
                  "w-full my-2 border-b mx-2 cursor-pointer",
                  i == selectedMeta ? "font-bold" : "",
                )
              }
                onClick={() => onChangeSelectedMeta(i)}
              >
                {e.title}
              </div>
            )
          })
        }
      </div>
      <div className="w-full grid grid-cols-2">
        <div className="pt-5 px-5 bg-gray-100">
          <div className="flex flex-row justify-between gap-5">
            <input className="w-full outline-1 outline rounded-md px-5" placeholder="Nội dung commit"
              value={commitMessage} onChange={(e) => setCommitMessage(e.target.value)}
            />
            <button className={
              clsV2(
                "font-bold px-5 py-2 rounded-md",
                processing ? "bg-pink-500/50 hover:cursor-not-allowed" : " bg-pink-500 hover:scale-105"
              )
            }
              onClick={onSave}>
              {
                processing ? ProcessingComp : "Lưu"
              }
            </button>
          </div>
          <textarea className="outline-none border-t-2 pt-5 h-full w-full min-h-min mt-10 bg-transparent" value={contentData} onChange={onChangeMdxEdit}></textarea>
        </div>
        <div className="pl-5 border-l">
          <div className="flex flex-row justify-end gap-5 mb-5 border-b-2 pb-5">
            <button className={
              clsV2(
                "font-bold px-5 py-2 rounded-md bg-pink-500 hover:scale-105",
              )
            }
              onClick={onRefreshData}
            >
              {
                processing ? ProcessingComp : "Làm mới lại dữ liệu trang chính"
              }
            </button>
          </div>
          {
            content != undefined && <MDXRemote
              {...content}
              components={{
                h1: CustomH1,
                h2: CustomH2,
                h3: CustomH3,
                h4: CustomH4,
                h5: CustomH5,
                h6: CustomH6,
                a: CustomA,
                img: CustomImg,
                li: CustomLi,
                ul: CustomUl,
                Video,
                CustomImage,
              }}
            />
          }
        </div>
      </div>
    </div>
  )
}
