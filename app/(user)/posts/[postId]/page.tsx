import { getPostsMeta, getPostByName } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import "highlight.js/styles/github-dark.css";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Suspense } from "react";
import {
  CustomH1,
  CustomH2,
  CustomH3,
  CustomH4,
  CustomH5,
  CustomH6,
  CustomA,
  CustomImg,
  Video,
  CustomImage,
  CustomLi,
  CustomUl,
} from "@/components/custom-mdx";
import rehypeAutolinkHeadings from "rehype-autolink-headings/lib";
import rehypeHighlight from "rehype-highlight/lib";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { Button } from "@/components/ui/button";
import { getFormattedDate } from "@/lib/getFormattedDate";

export const revalidate = 86400;

type Props = {
  params: {
    postId: string;
  };
};

export async function generateStaticParams() {
  const posts = await getPostsMeta(); //deduped!

  if (!posts) return [];

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export async function generateMetadata({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`); //deduped!

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.meta.title,
    metadataBase: new URL(process.env.SITE_URL || "https://your-domain.com"),
    alternates: {
      canonical: `/post/${post.meta.id}`,
    },
  };
}

export default async function PostPage({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`); //deduped!
  if (!post) notFound();

  const { meta, content } = post;
  const pubDate = getFormattedDate(meta.date);
  const tags = meta.tags.map((tag, i) => (
    <Link key={i} href={`/tags/${tag}`}>
      {tag}
    </Link>
  ));

  return (
    <div className="container mx-auto my-20 px-20">
      <Image
        className="object-cover rounded-lg w-full"
        src={meta.thumbnail}
        alt={meta.title}
        width={1201}
        height={501}
      />
      <div className="max-w-4xl mx-auto mt-20">
        <h2 className="text-3xl mt-4 mb-10 ">{meta.title}</h2>
        <p className="mt-0 text-sm mb-5">{pubDate}</p>
        <article>
          <Suspense fallback={<>Loading...</>}>
            {/* @ts-expect-error Server Component */}
            <MDXRemote
              source={content}
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
              options={{
                mdxOptions: {
                  rehypePlugins: [
                    rehypeHighlight,
                    rehypeSlug,
                    [
                      rehypeAutolinkHeadings,
                      {
                        behavior: "wrap",
                      },
                    ],
                    // rehypeKatex,
                    // [rehypeCitation, { path: path.join(root, 'data') }],
                    // [rehypePrismPlus, { ignoreMissing: true }],
                    // rehypePresetMinify,
                  ],
                  remarkPlugins: [remarkGfm],
                },
              }}
            />
          </Suspense>
        </article>
        <section className="mt-10">
          <h3 className="font-bold text-xl">Bài viết thuộc các chủ đề:</h3>
          <div className="flex flex-row gap-4">{tags}</div>
        </section>
        <div className="mt-10">
          <Link href="/">
            <Button>← Trở về trang chủ</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
