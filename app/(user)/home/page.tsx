import { filterPostMetaByTag, getPostsMeta } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  AIRDROP_TAG,
  ALTCOIN_TAG,
  BLOCKCHAIN_TAG,
  CRYPTO_TAG,
  HOT_TAG,
} from "@/data/tags";
import { Button } from "@/components/ui/button";

import { GalleryBlog } from "../components/gallery-blog";
import { MainAnd2ColumnBlog } from "../components/main-and-2-column-blog";
import { OneRowBlog } from "../components/one-row-blog";
import { NoticeDivider } from "../components/notice-divider";
import { TwoBlog } from "../components/two-blog";
import { OurFeature } from "../components/our-feature";
import { GalleryBlog2 } from "../components/gallery-blog-2";

export const revalidate = 86400;

export default async function Home() {
  const posts = await getPostsMeta();
  if (!posts) notFound();

  const hotMeta = filterPostMetaByTag(posts, HOT_TAG, 4);
  const cryptoMeta = filterPostMetaByTag(posts, CRYPTO_TAG, 2);
  const airdropMeta = filterPostMetaByTag(posts, AIRDROP_TAG, 5);
  const blockchainMeta = filterPostMetaByTag(posts, BLOCKCHAIN_TAG, 4);
  const altcoinMeta = filterPostMetaByTag(posts, ALTCOIN_TAG, 6);

  return (
    <div className="mx-auto">
      <MainAnd2ColumnBlog
        mainMeta={posts[0]}
        hotMeta={hotMeta}
        latestMeta={Array.from(posts).splice(0, 4)}
      />

      <section className="body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-4xl text-3xl font-medium mb-2">
                Săn Airdrop mới nhất
              </h1>
              <div className="h-1 w-20 bg-primary rounded" />
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed">
              Nhận miễn phí tiền điện tử và tham gia vào các dự án mới, tạo cơ
              hội tăng giá trị và mở rộng sự tham gia của người dùng.
            </p>
          </div>
          <OneRowBlog airdropMeta={airdropMeta} />
          <div className="mt-5 w-full mx-auto flex flex-row justify-center">
            <Link href="/tags/airdrop">
              <Button>Xem thêm →</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="body-font">
        <div className="container px-5 py-24 mx-auto">
          <div
            role="main"
            className="flex flex-col items-center justify-center mb-10"
          >
            <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">
              Crypto là gì?
              <div className="mt-2 h-1 w-20 bg-primary rounded" />
            </h1>
            <p className="text-base leading-normal text-center dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">
              Tiền điện tử (crypto) là một loại tiền tệ kỹ thuật số được xây
              dựng trên nền tảng công nghệ blockchain, sử dụng mã hóa để bảo mật
              giao dịch và quản lý tài sản.
            </p>
          </div>
          <TwoBlog bitcoinMeta={cryptoMeta} />
          <div className="mt-5 w-full mx-auto flex flex-row justify-center">
            <Link href="/tags/crypto">
              <Button>Xem thêm →</Button>
            </Link>
          </div>
        </div>
      </section>
      <NoticeDivider />
      <GalleryBlog galleryMeta={blockchainMeta} />
      <OurFeature />
      <GalleryBlog2 galleryMeta={altcoinMeta} />
    </div>
  );
}
