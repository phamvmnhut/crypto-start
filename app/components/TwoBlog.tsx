import Link from "next/link"
import Image from "next/image"

function ItemList({ item }: { item: Meta }) {
  return (
    <div className="sm:w-1/2 mb-10 px-4">
      <div className="rounded-lg h-64 overflow-hidden">
        <Link
          href={`/posts/${item.id}`}
        >
          <Image
            className="object-cover object-center h-full w-full"
            src={item.thumbnail}
            alt={item.title}
            width={1201}
            height={501}
          />
        </Link>
      </div>
      <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
        {item.title}
      </h2>
      <p className="leading-relaxed text-base line-clamp-2">
        {item.summary}
      </p>
    </div>
  )
}

export default function TwoBlog({ bitcoinMeta: cryptoMeta }: { bitcoinMeta: Meta[] }) {
  return (
    <section className="text-gray-600 bg-gradient-to-t from-white via-pink-50 to-white body-font">
      <div className="container px-5 py-24 mx-auto">
        <div role="main" className="flex flex-col items-center justify-center mb-10">
          <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">
            Crypto là gì?
            <div className="mt-2 h-1 w-20 bg-pink-500 rounded" />
          </h1>
          <p className="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">
            Tiền điện tử (crypto) là một loại tiền tệ kỹ thuật số được xây dựng trên nền tảng công nghệ blockchain, sử dụng mã hóa để bảo mật giao dịch và quản lý tài sản.
          </p>
        </div>
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          {
            cryptoMeta.map((e) => {
              return (<ItemList item={e} key={e.id} />)
            })
          }
        </div>
        <div className="w-full mx-auto flex flex-row justify-center">
          <Link href="/tags/crypto">
            <p
            className="mt-10 inline-flex items-center bg-pink-100 border-0 py-1 px-3 focus:outline-none hover:bg-pink-200 rounded text-base w-fit"
            >
              Xem thêm →
            </p>
          </Link>
        </div>
      </div>
    </section>
  )
}
