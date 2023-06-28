import Link from "next/link"
import Image from "next/image"

export default function GalaryBlog2({ galaryMeta }: { galaryMeta: Meta[] }) {
  return (
    <div className="container mx-auto">
      <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">
            Toàn cảnh về Altcoin
            <div className="mt-2 h-1 w-32 bg-pink-500 rounded" />
          </h1>
        </div>
        <div className="lg:flex md:mt-12 mt-8">
          <div className="lg:w-1/2">
            <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
              <div className="sm:w-1/2 relative">
                <div>
                  <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                    {galaryMeta[2].date}
                  </p>
                  <div className="absolute bottom-0 left-0 p-6 md:mt-20 bg-gradient-to-t from-black to-transparent">
                    <h2 className="text-xl font-semibold 5 text-white">
                      {galaryMeta[2].title}
                    </h2>
                    <p className="text-base leading-4 text-white mt-2 line-clamp-1">
                      {galaryMeta[2].summary}
                    </p>
                    <Link
                      href={`/posts/${galaryMeta[2].id}`}
                      className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-pink-500 hover:text-gray-200 hover:underline"
                    >
                      <p className="pr-2 text-sm font-medium leading-none">
                        Xem hết
                      </p>
                      <svg
                        className="fill-stroke"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
                <Image
                  className="w-full aspect-1 object-cover rounded-lg"
                  src={galaryMeta[2].thumbnail}
                  alt={galaryMeta[2].title}
                  width={200}
                  height={200}
                />

              </div>
              <div className="sm:w-1/2 sm:mt-0 mt-4 relative">
                <div>
                  <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                    {galaryMeta[3].date}
                  </p>
                  <div className="absolute bottom-0 left-0 p-6 md:mt-20 bg-gradient-to-t from-black to-transparent">
                    <h2 className="text-xl font-semibold 5 text-white">
                      {galaryMeta[3].title}
                    </h2>
                    <p className="text-base leading-4 text-white mt-2 line-clamp-1">
                      {galaryMeta[3].summary}
                    </p>
                    <Link
                      href={`/posts/${galaryMeta[3].id}`}
                      className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-pink-500 hover:text-gray-200 hover:underline"
                    >
                      <p className="pr-2 text-sm font-medium leading-none">
                        Xem hết
                      </p>
                      <svg
                        className="fill-stroke"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
                <Image
                  className="w-full aspect-1 object-cover rounded-lg"
                  src={galaryMeta[3].thumbnail}
                  alt={galaryMeta[3].title}
                  width={200}
                  height={200}
                />
              </div>
            </div>
            <div className="relative">
              <div>
                <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                  {galaryMeta[1].date}
                </p>
                <div className="absolute bottom-0 left-0 md:p-10 md:mt-20 bg-gradient-to-t from-black to-transparent">
                  <h2 className="text-xl font-semibold 5 text-white">
                    {galaryMeta[1].title}
                  </h2>
                  <p className="text-base leading-4 text-white mt-2 line-clamp-2">
                    {galaryMeta[1].summary}
                  </p>
                  <Link
                    href={`/posts/${galaryMeta[1].id}`}
                    className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-pink-500 hover:text-gray-200 hover:underline"
                  >
                    <p className="pr-2 text-sm font-medium leading-none">
                      Xem hết
                    </p>
                    <svg
                      className="fill-stroke"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              <Image
                className="w-full mt-8 md:mt-6 hidden sm:block aspect-1 object-cover rounded-lg"
                src={galaryMeta[1].thumbnail}
                alt={galaryMeta[1].title}
                width={200}
                height={200}
              />
              <Image
                className="w-full mt-4 sm:hidden object-cover rounded-lg"
                src={galaryMeta[1].thumbnail}
                alt={galaryMeta[1].title}
                width={200}
                height={200}
              />
            </div>
          </div>
          <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
            <div className="relative">
              <div>
                <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                  {galaryMeta[0].date}
                </p>
                <div className="absolute bottom-0 left-0 md:p-10 p-6 md:mt-20 bg-gradient-to-t from-black to-transparent">
                  <h2 className="text-xl font-semibold 5 text-white">
                    {galaryMeta[0].title}
                  </h2>
                  <p className="text-base leading-4 text-white mt-2 line-clamp-2">
                    {galaryMeta[0].summary}
                  </p>
                  <Link
                    href={`/posts/${galaryMeta[0].id}`}
                    className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-pink-500 hover:text-gray-200 hover:underline"
                  >
                    <p className="pr-2 text-sm font-medium leading-none">
                      Xem hết
                    </p>
                    <svg
                      className="fill-stroke"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              <Image
                className="w-full sm:block hidden aspect-1 object-cover rounded-lg"
                src={galaryMeta[0].thumbnail}
                alt={galaryMeta[0].title}
                width={200}
                height={200}
              />
              <Image
                className="w-full sm:hidden object-cover rounded-lg"
                src={galaryMeta[0].thumbnail}
                alt={galaryMeta[0].title}
                width={200}
                height={200}
              />
            </div>
            <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
              <div className="relative w-full">
                <div>
                  <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                    {galaryMeta[4].date}
                  </p>
                  <div className="absolute bottom-0 left-0 p-6 md:mt-20 bg-gradient-to-t from-black to-transparent">
                    <h2 className="text-xl font-semibold 5 text-white ">
                      {galaryMeta[4].title}
                    </h2>
                    <p className="text-base leading-4 text-white mt-2 line-clamp-1">
                      {galaryMeta[4].summary}
                    </p>
                    <Link
                      href={`/posts/${galaryMeta[4].id}`}
                      className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-pink-500 hover:text-gray-200 hover:underline"
                    >
                      <p className="pr-2 text-sm font-medium leading-none">
                        Xem hết
                      </p>
                      <svg
                        className="fill-stroke"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
                <Image
                  className="w-full object-cover rounded-lg aspect-1"
                  src={galaryMeta[4].thumbnail}
                  alt={galaryMeta[4].title}
                  width={200}
                  height={200}
                />
              </div>
              <div className="relative w-full sm:mt-0 mt-4">
                <div>
                  <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                    {galaryMeta[5].date}
                  </p>
                  <div className="absolute bottom-0 left-0 p-6 md:mt-20 bg-gradient-to-t from-black to-transparent">
                    <h2 className="text-xl font-semibold 5 text-white">
                      {galaryMeta[5].title}
                    </h2>
                    <p className="text-base leading-4 text-white mt-2 line-clamp-1">
                      {galaryMeta[5].summary}
                    </p>
                    <Link
                      href={`/posts/${galaryMeta[5].id}`}
                      className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-pink-500 hover:text-gray-200 hover:underline"
                    >
                      <p className="pr-2 text-sm font-medium leading-none">
                        Xem hết
                      </p>
                      <svg
                        className="fill-stroke"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
                <Image
                  className="w-full object-cover rounded-lg aspect-1"
                  src={galaryMeta[5].thumbnail}
                  alt={galaryMeta[5].title}
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mx-auto flex flex-row justify-center">
          <Link href="/tags/altcoin">
            <p
            className="mt-10 inline-flex items-center bg-pink-100 border-0 py-1 px-3 focus:outline-none hover:bg-pink-200 rounded text-base w-fit"
            >
              Xem thêm →
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}
