import Link from "next/link"
import Image from "next/image"

function ItemList({ item }: { item: Meta }) {
  return (
    <div className="xl:w-1/3 md:w-1/2 p-4">
      <div className="bg-gray-100 p-6 rounded-lg">
        <Link
          href={`/posts/${item.id}`}
        >
          <Image
            className="h-56 rounded w-full object-cover object-center mb-6 hover:scale-105 transition-all duration-300"
            src={item.thumbnail}
            alt={item.title}
            width={200}
            height={400}
          />
        </Link>
        <div className="flex flex-row justify-between">
          <Link href={`/tags/${item.tags[0]}`}>
            <h3 className=" text-pink-500 font-medium inline-block">
              {item.tags[0]}
            </h3>
          </Link>
          <span className="text-sm">
            {item.date}
          </span>
        </div>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4 line-clamp-2">
          {item.title}
        </h2>
        <p className="leading-relaxed text-base line-clamp-2">
          {item.summary}
        </p>
      </div>
    </div>
  )
}

export default function GalaryBlog({ galaryMeta }: { galaryMeta: Meta[] }) {
  return (
    <div className="text-gray-900 pt-12 pr-0 pb-14 pl-0 bg-white container px-5 mx-auto">
      <div
        className="w-full pt-4 pb-6 pl-5 mt-0 mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16"
      >
        <div className="flex flex-col items-center sm:px-5 md:flex-row">
          <div className="flex flex-col items-start justify-center w-full h-full pt-6 pr-0 pb-6 pl-0 mb-6 md:mb-0 md:w-1/2">
            <div
              className="flex flex-col items-start justify-center h-full space-y-3 transform md:pr-10 lg:pr-16 md:space-y-5"
            >
              <div
                className="bg-green-500 flex items-center leading-none rounded-full text-gray-50 pt-1.5 pr-3 pb-1.5 pl-2 uppercase"
              >
                <p className="inline">
                  <svg
                    className="w-3.5 h-3.5 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0
            00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755
            1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1
            0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </p>
                <p className="inline text-xs font-medium">New</p>
              </div>
              <h1 className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">
                {galaryMeta[0].title}
              </h1>
              <div className="pt-2 pr-0 pb-0 pl-0">
                <p className="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1">
                  {galaryMeta[0].date}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="block">
              <Link
                href={`/posts/${galaryMeta[0].id}`}
              >
                <Image
                  className="object-cover rounded-lg max-h-64 sm:max-h-96 btn- w-full h-full"
                  src={galaryMeta[0].thumbnail}
                  alt={galaryMeta[0].title}
                  width={1000}
                  height={1000}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          {
            galaryMeta.splice(1).map((e) => {
              return (<ItemList key={e.id} item={e} />)
            })
          }
        </div>
        <div className="w-full mx-auto flex flex-row justify-center">
          <Link href="/tags/blockchain">
            <p
            className="inline-flex items-center bg-pink-100 border-0 py-1 px-3 focus:outline-none hover:bg-pink-200 rounded text-base w-fit"
            >
              Xem thêm →
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}
