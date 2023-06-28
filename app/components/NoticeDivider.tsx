import Link from "next/link"
import Image from "next/image"

export default function NoticeDevider() {
  return (
    <section className="px-0 py-12 mx-auto max-w-7xl sm:px-4">
      <div className="grid items-center grid-cols-1 gap-10 px-4 py-6 overflow-hidden text-pink-900 bg-pink-100 border-pink-100 rounded-none card card-body sm:rounded-lg md:px-10 md:grid-cols-5 lg:gap-0">
        <div className="col-span-1 md:col-span-3">
          <h2 className="mb-3 text-2xl leading-tight lg:text-3xl">
            Crypto Start
          </h2>
          <p className="mb-6 text-sm font-semibold lg:text-base">
          Nền tảng tập hợp các hướng dẫn tốt nhất về crypto và blockchain. Nơi này cung cấp các bài viết, video, và tài liệu hướng dẫn chi tiết về các khái niệm cơ bản, giao dịch, lưu trữ an toàn, và các chiến lược đầu tư trong lĩnh vực crypto, giúp người dùng tìm hiểu và làm chủ về crypto.
          </p>
          <div
            className="w-full text-pink-900 font-bold underline"
          >
            Tất cả đều miễn phí
          </div>
        </div>
        <div className="col-span-1 md:col-span-2">
          <Image
            src="/images/crypto_flowers.svg"
            className="w-full ml-0 select-none"
            alt="Mac App"
            width={1000}
            height={100}
          />
        </div>
      </div>
    </section>
  )
}