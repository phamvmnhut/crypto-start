"use client";
import { getPostBySlug } from "@/lib/posts";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { ChangeEvent, useEffect, useState } from "react";
import Select, { ActionMeta, OnChangeValue } from "react-select";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import {
  CustomH1,
  CustomH2,
  CustomH3,
  CustomH4,
  CustomH5,
  CustomH6,
  CustomA,
  CustomImg,
  CustomLi,
  CustomUl,
  Video,
  CustomImage,
} from "../../../components/custom-mdx";
import { clsV2 } from "@/lib/cls";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Visibility } from "@/components/visibility";

type EditorMdxProp = {
  metaList: Meta[];
};

type ResProp = {
  error?: string;
  message?: string;
};

const MDX_STRUCTURE = `---
title: '__title__'
thumbnail: '__thumnail__'
date: '__date__'
tags: __tag__
summary: '__summary__'
---\n\n`;

type TagType = {
  value: string;
  label: string;
};

const options: TagType[] = [
  { value: "hot", label: "Hot" },
  { value: "crypto", label: "Crypto" },
  { value: "blockchain", label: "Blockchain" },
  { value: "bitcoin", label: "Bitcoin" },
  { value: "altcoin", label: "Altcoin" },
  { value: "airdrop", label: "Săn Airdrop" },
];

const ProcessingComp = (
  <svg
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
);
export function EditorMdx({ metaList }: EditorMdxProp) {
  const [showListMeta, setShowListMeta] = useState<boolean>(true);

  const [selectedMeta, setSelectedMeta] = useState<number | null>(null);
  const [contentData, setContentData] = useState<string>(
    "Không có nội dung nào đang được chọn"
  );
  const [content, setContent] = useState<MDXRemoteSerializeResult>();

  const [processing, setProcessing] = useState<boolean>(false);
  const [commitMessage, setCommitMessage] = useState<string>("");

  const [date, setDate] = useState<Date>();

  function onChangeSelectedMeta(i: number) {
    setSelectedMeta(i);
    getPostBySlug(metaList[i].id).then((res) => {
      setContentData(res.data.content);
    });

    const mapOption: TagType[] = [];
    metaList[i].tags.forEach((e) => {
      let findOption = options.find((ele) => ele.value == e);
      if (findOption != undefined) {
        mapOption.push(findOption);
      }
    });
    setTags(mapOption);

    if (metaList[i].date != undefined) {
      setDate(new Date(metaList[i].date));
    }
  }

  useEffect(() => {
    serialize(contentData, {
      mdxOptions: {
        development: process.env.NODE_ENV === "development",
        rehypePlugins: [
          rehypeHighlight,
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: "wrap",
            },
          ],
        ],
        remarkPlugins: [remarkGfm],
      },
    }).then((e) => {
      setContent(e);
    });
  }, [contentData]);

  function onChangeMdxEdit(e: ChangeEvent<HTMLTextAreaElement>) {
    setContentData(e.target.value);
  }

  async function onSave(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();

    if (processing) return;
    if (selectedMeta == null) {
      setCommitMessage("");
      return addNotification("Bạn chưa chọn nội dung để chỉnh sửa");
    }
    try {
      setProcessing(true);
      const metaData = metaList[selectedMeta];
      let dateNow = date || new Date();
      let tagsString = tags
        .map((e) => {
          return `'${e.value}'`;
        })
        .join(",");
      const frontmatter = MDX_STRUCTURE.replace("__title__", metaData.title)
        .replace("__thumnail__", metaData.thumbnail)
        .replace(
          "__date__",
          `${
            dateNow.getMonth() + 1
          }/${dateNow.getDate()}/${dateNow.getFullYear()}`
        )
        .replace("__tag__", `[${tagsString}]`)
        .replace("__summary__", metaData.summary);

      const res = await fetch(`/api/remote-mdx-data?slug=${metaData.id}`, {
        method: "POST",
        body: JSON.stringify({
          message: commitMessage,
          content: Buffer.from(frontmatter + contentData).toString("base64"),
        }),
      });

      const updateRes: ResProp = await res.json();
      if (updateRes?.error) {
        addNotification(updateRes?.error);
      }
      if (updateRes?.message) {
        addNotification(updateRes?.message);
      }
    } finally {
      setProcessing(false);
      addNotification("Cập nhật dữ liệu trang đã xong");
      setCommitMessage("");
    }
  }

  async function onRefreshData() {
    if (processing) return;
    {
      try {
        setProcessing(true);
        await fetch("/api/revalidate?secret=crypto-start");
      } finally {
        setProcessing(false);
        addNotification("Làm mới trang chính đã xong");
      }
    }
  }

  const [notification, setNotification] = useState<string | null>(null);
  function addNotification(noti: string) {
    if (notification == null) {
      setNotification(noti);
    } else {
      setNotification(notification + " | " + noti);
    }
  }

  function closeNotification() {
    setNotification(null);
  }

  const [tags, setTags] = useState<readonly TagType[]>([]);

  function onChangeSelectTag(
    newValue: OnChangeValue<TagType, true>,
    actionMeta: ActionMeta<TagType>
  ) {
    setTags(newValue);
  }

  return (
    <div className="px-5 pt-2 flex flex-row justify-start">
      <Visibility visibility={showListMeta}>
        <div className="min-w-[10rem] pr-5 border-r">
          <div className="flex flex-row justify-between gap-5 mb-5">
            {/* <input className="w-full outline-1 outline rounded-md px-5" placeholder="Nội dung commit" 
            value={commitMessage} onChange={(e) => setCommitMessage(e.target.value)} 
            /> */}
            <button
              className={clsV2(
                "font-bold px-5 py-2 rounded-md bg-pink-500 hover:scale-105"
              )}
            >
              Tạo mới
            </button>
            <button
              className={clsV2(
                "font-bold px-5 py-2 rounded-md bg-pink-500 hover:scale-105"
              )}
              onClick={() => setShowListMeta(false)}
            >
              ⟪
            </button>
          </div>
          {metaList.map(function (e, i) {
            return (
              <div
                key={i}
                className={clsV2(
                  "w-full my-2 border-b mx-2 cursor-pointer",
                  i == selectedMeta ? "font-bold" : ""
                )}
                onClick={() => onChangeSelectedMeta(i)}
              >
                {e.title}
              </div>
            );
          })}
        </div>
      </Visibility>
      <div className="w-full flex">
        <div className="w-1/2 pt-5 px-5 bg-gray-100 h-max">
          <Visibility visibility={notification != null}>
            <div className="mb-5 flex flex-row justify-center items-center gap-5">
              <span className=" inline-block">{notification}</span>
              <button
                className=" border rounded-md hover:scale-105 hover:bg-gray-100 aspect-1 w-8 font-bold"
                onClick={closeNotification}
              >
                X
              </button>
            </div>
          </Visibility>
          <form className="flex flex-row justify-between gap-3">
            <div className="w-full flex flex-row gap-3">
              {!showListMeta && (
                <button
                  className={clsV2(
                    "font-bold px-5 py-2 rounded-md bg-pink-500 hover:scale-105"
                  )}
                  onClick={() => setShowListMeta(true)}
                >
                  ⟫
                </button>
              )}
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="w-full flex flex-row gap-3 justify-end">
              <input
                className="w-full outline-1 outline rounded-md px-5"
                placeholder="Nội dung commit"
                required
                value={commitMessage}
                onChange={(e) => setCommitMessage(e.target.value)}
              />
              <button
                className={clsV2(
                  "font-bold px-5 py-2 rounded-md",
                  processing
                    ? "bg-pink-500/50 hover:cursor-not-allowed"
                    : " bg-pink-500 hover:scale-105"
                )}
                type="submit"
                onClick={onSave}
              >
                {processing ? ProcessingComp : "Lưu"}
              </button>
            </div>
          </form>
          <Select
            isMulti
            name="tags"
            options={options}
            onChange={onChangeSelectTag}
            value={tags}
            className="basic-multi-select mt-5"
          />
          <textarea
            className="outline-none border-t-2 pt-5 h-[70vh] w-full mt-10 bg-transparent"
            value={contentData}
            onChange={onChangeMdxEdit}
          ></textarea>
        </div>
        <div className="w-1/2 pl-5 border-l h-[80vh]">
          <div className="flex flex-row justify-end gap-5 mb-5 border-b-2 pb-5">
            <button
              className={clsV2(
                "font-bold px-5 py-2 rounded-md bg-pink-500 hover:scale-105"
              )}
              onClick={onRefreshData}
            >
              {processing ? ProcessingComp : "Làm mới lại dữ liệu trang chính"}
            </button>
          </div>
          <div className="h-full overflow-y-scroll">
            {content != undefined && (
              <MDXRemote
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
