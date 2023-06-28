import Link from "next/link"
import ListItem from "./ListItem"

export default function BlogByCategory({ airdropMeta }: { airdropMeta: Meta[] }) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-4xl text-3xl font-medium mb-2 text-gray-900">
              Săn Airdrop mới nhất
            </h1>
            <div className="h-1 w-20 bg-pink-500 rounded" />
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Nhận miễn phí tiền điện tử và tham gia vào các dự án mới, tạo cơ hội tăng giá trị và mở rộng sự tham gia của người dùng.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {
            airdropMeta.map((e) => {
              return (<ListItem post={e} key={e.id} />)
            })
          }
        </div>
        <div className="w-full mx-auto flex flex-row justify-center">
          <Link href="/tags/airdrop">
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