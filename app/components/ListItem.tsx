import Link from "next/link"
import Image from "next/image"
import getFormattedDate from "@/lib/getFormattedDate"

type Props = {
    post: Meta
}

export default function ListItem({ post }: Props) {
    const { id, title, date, thumbnail, tags, summary } = post
    const formattedDate = getFormattedDate(date)

    return (
        <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
                <Link
                    href={`/posts/${id}`}
                >
                    <Image
                        className="h-40 rounded w-full object-cover object-center mb-6 hover:scale-105 transition-all duration-300"
                        src={thumbnail}
                        alt={title}
                        width={200}
                        height={200}
                    />
                </Link>
                <div className="flex flex-row justify-between">
                    <Link href={`/tags/${tags[0]}`}>
                        <h3 className=" text-pink-500 font-medium inline-block">
                            {tags[0]}
                        </h3>
                    </Link>
                    <span className="text-sm">
                        {formattedDate}
                    </span>
                </div>
                <h2 className=" text-xl text-gray-900 font-medium mb-4 line-clamp-2">
                    {title}
                </h2>
                <p className="leading-relaxed text-base line-clamp-2">
                    {summary}
                </p>
            </div>
        </div>
    )
}