import { Card } from "@/components/ui/card";
import Link from "next/link";

export function OurFeature() {
  return (
    <section className="body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-primary tracking-widest font-medium title-font mb-1">
            NỔI BẬT VỚI
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font ">
            Chúng tôi mang đến cho bạn
          </h1>
        </div>
        <div className="grid gap-2 grid-cols-3">
          <Card className="col-span-1">
            <div className="flex rounded-lg h-full p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-primary text-white flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <h2 className="text-lg title-font font-medium">
                  Hướng dẫn chi tiết nhất
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base ">
                  Chúng tôi cung cấp nội dung hướng dẫn đầy đủ, chi tiết và rõ
                  ràng nhất.
                </p>
                <Link
                  href="/about"
                  className="mt-3 text-primary inline-flex items-center"
                >
                  Xem thêm
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </Card>
          <Card className="col-span-1">
            <div className="flex rounded-lg h-full p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-primary text-white flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
                  </svg>
                </div>
                <h2 className=" text-lg title-font font-medium">
                  Cập nhật nhanh chóng
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base ">
                  Chúng tôi luôn cập nhật nhứng kiến thức mới, dự án mới nhất
                </p>
                <Link
                  href="/about"
                  className="mt-3 text-primary inline-flex items-center"
                >
                  Xem thêm
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </Card>
          <Card className="col-span-1">
            <div className="flex rounded-lg h-full p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-primary text-white flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <circle cx={6} cy={6} r={3} />
                    <circle cx={6} cy={18} r={3} />
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                  </svg>
                </div>
                <h2 className="text-lg title-font font-medium">
                  Nơi tập hợp đầy đủ cho bạn
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  Tất cả những gì bạn cần để bắt đầu cho crypto
                </p>
                <Link
                  href="/about"
                  className="mt-3 text-primary inline-flex items-center"
                >
                  Xem thêm
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
