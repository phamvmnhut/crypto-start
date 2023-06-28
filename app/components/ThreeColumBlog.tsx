import Link from "next/link"
import Image from "next/image"

function ItemList({ meta }: { meta: Meta }) {
  return (
    <div className="flex px-1 py-4">
      <Image
        className="mx-auto flex-shrink-0 object-cover h-20 w-36 mr-4 dark:bg-gray-500 rounded-md"
        src={meta.thumbnail}
        alt={meta.title}
        width={200}
        height={200}
      />
      <div className="flex flex-col flex-grow">
        <Link
          href={`/posts/${meta.id}`}
          className=""
        >
          <h2>{meta.title}</h2>
        </Link>
        <p className="mt-auto text-xs dark:text-gray-400">
          {meta.date}
        </p>
      </div>
    </div>
  )
}

export default function ThreeColumBlog({ mainMeta, latestMeta, hotMeta }: { mainMeta: Meta, latestMeta: Meta[], hotMeta: Meta[] }) {
  return (
    <section className="px-5 py-20 dark:bg-gray-800 dark:text-gray-100">
      <div className="container grid grid-cols-12 mx-auto gap-y-6 md:gap-10">
        <div className="flex flex-col justify-between col-span-12 py-2 space-y-8 md:space-y-16 md:col-span-3">
          <div className="flex flex-col">
            {
              hotMeta.map((e) => {
                return (<ItemList key={e.id} meta={e} />)
              })
            }
          </div>
          <div className="flex flex-col w-full space-y-2">
            <div className="flex w-full h-1 bg-opacity-10 dark:bg-violet-400">
              <div className="w-1/2 h-full dark:bg-violet-400" />
            </div>
            <Link
              className="flex items-center justify-between w-full"
              href="/tags/hot"
            >
              <span className="font-bold">
                Xem tất cả
              </span>
              <svg
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 stroke-current text-pink-500"
              >
                <line x1={5} y1={12} x2={19} y2={12} />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="rounded-lg relative flex col-span-12 bg-center bg-no-repeat bg-cover dark:bg-gray-500 xl:col-span-6 lg:col-span-5 md:col-span-9 min-h-[20rem] overflow-clip"
          style={{
            backgroundImage: `url(${mainMeta.thumbnail})`
          }}
        >
          <Link href={`/tags/${mainMeta.tags[0]}`} >
            <span className="absolute px-1 pb-1 text-white font-bold border-b-2 left-6 top-6 dark:border-violet-400 dark:text-gray-100">
              {mainMeta.tags[0]}
            </span>
          </Link>
          <div 
          className="flex flex-col items-center justify-end group flex-grow-1">
          <div className=" h-fit  p-6 text-center sm:p-8  w-full bg-gradient-to-t from-black to-transparent ">
          <Link
            href={`/posts/${mainMeta.id}`}>
            <h1
              className="text-2xl font-semibold group-hover: bg-gray-500/50 rounded-md text-white px-3 py-2"
            >
              {mainMeta.title}
            </h1>
            <span className=" line-clamp-2 text-white mt-2">
              {mainMeta.summary}
            </span>
          </Link>
          </div>
          </div>
        </div>
        <div className="col-span-12 py-2 xl:col-span-3 lg:col-span-4">
          <div className="mb-5 space-x-5 border-b-2 border-opacity-80 border-pink-400">
            <div
              className="pb-2 font-bold border-pink-400"
            >
              Mới nhất
            </div>
          </div>
          <div className="flex flex-col divide-y divide-gray-700">
            {
              latestMeta.map((e) => {
                return (<ItemList key={e.id} meta={e} />)
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}