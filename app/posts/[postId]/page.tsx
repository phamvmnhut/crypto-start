import getFormattedDate from "@/lib/getFormattedDate"
import { getPostsMeta, getPostByName } from "@/lib/posts"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import 'highlight.js/styles/github-dark.css'

export const revalidate = 86400

type Props = {
    params: {
        postId: string
    }
}

export async function generateStaticParams() {
    const posts = await getPostsMeta() //deduped!

    if (!posts) return []

    return posts.map((post) => ({
        postId: post.id
    }))
}

export async function generateMetadata({ params: { postId } }: Props) {

    const post = await getPostByName(`${postId}.mdx`) //deduped!

    if (!post) {
        return {
            title: 'Post Not Found'
        }
    }

    return {
        title: post.meta.title,
        metadataBase: new URL(process.env.SITE_URL || 'https://your-domain.com'),
        alternates: {
            canonical: `/post/${post.meta.id}`,
        }
    }
}

export default async function Post({ params: { postId } }: Props) {

    const post = await getPostByName(`${postId}.mdx`) //deduped!

    if (!post) notFound()

    const { meta, content } = post

    const pubDate = getFormattedDate(meta.date)

    const tags = meta.tags.map((tag, i) => (
        <Link key={i} href={`/tags/${tag}`}>{tag}</Link>
    ))

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
                <p className="mt-0 text-sm mb-5">
                    {pubDate}
                </p>
                <article>
                    {content}
                </article>
                <section className="mt-10">
                    <h3 className="font-bold text-xl">Bài viết thuộc các chủ đề:</h3>
                    <div className="flex flex-row gap-4">
                        {tags}
                    </div>
                </section>
                <p className="mt-10 inline-flex items-center bg-pink-100 border-0 py-1 px-3 focus:outline-none hover:bg-pink-200 rounded text-base">
                    <Link href="/">← Trở về trang chủ</Link>
                </p>
            </div>
        </div>
    )
}