import { getPostsMeta } from "@/lib/posts"
import ListItem from "@/app/components/ListItem"
import { notFound } from "next/navigation"

export const revalidate = 86400

type Props = {
    params: {
        tag: string
    }
}

export async function generateStaticParams() {
    const posts = await getPostsMeta() //deduped!

    if (!posts) return []

    const tags = new Set(posts.map(post => post.tags).flat())

    return Array.from(tags).map((tag) => ({ tag }))
}

export function generateMetadata({ params: { tag } }: Props) {

    return {
        title: `Posts about ${tag}`
    }
}

export default async function TagPostList({ params: { tag } }: Props) {
    const posts = await getPostsMeta() //deduped!

    if (!posts) return <p className="mt-10 text-center">Hiện nhóm mục này chưa có bài viết nào.</p>

    const tagPosts = posts.filter(post => post.tags.includes(tag))

    if (!tagPosts.length) notFound()

    return (
        <div className="my-20 container mx-auto">
            <h2 className="text-3xl mb-10">Danh sách các bài viết cho: #{tag}</h2>
            <section className="flex flex-wrap">
                {tagPosts.map(post => (
                    <ListItem key={post.id} post={post} />
                ))}
            </section>
        </div>
    )
}
