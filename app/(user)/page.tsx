import BlogByCategory from "@/app/components/BlogByCategory"
import TwoBlog from "@/app/components/TwoBlog"
import GalaryBlog from "@/app/components/GalaryBlog"
import NoticeDevider from "@/app/components/NoticeDivider"
import ThreeColumBlog from "@/app/components/ThreeColumBlog"
import OurFeature from "@/app/components/OurFeature"
import GalaryBlog2 from "@/app/components/GalaryBlog2"
import { filterPostMetaByTag, getPostsMeta } from "@/lib/posts"
import { notFound } from "next/navigation"
import { AIRDROP_TAG, ALTCOIN_TAG, BLOCKCHAIN_TAG, CRYPTO_TAG, HOT_TAG } from "@/data/tags"

export const revalidate = 86400

export default async function Home() {

  const posts = await getPostsMeta();

  if (!posts) notFound();

  const hotMeta = filterPostMetaByTag(posts, HOT_TAG, 4);
  const cryptoMeta = filterPostMetaByTag(posts, CRYPTO_TAG, 2);
  const airdropMeta = filterPostMetaByTag(posts, AIRDROP_TAG, 4);
  const blockchainMeta = filterPostMetaByTag(posts, BLOCKCHAIN_TAG, 4);
  const altcoinMeta = filterPostMetaByTag(posts, ALTCOIN_TAG, 6);

  return (
    <div className="mx-auto">
      <ThreeColumBlog
        mainMeta={posts[1]}
        hotMeta={hotMeta}
        latestMeta={Array.from(posts).splice(0,4)} 
      />
      <BlogByCategory airdropMeta={airdropMeta} />
      <TwoBlog bitcoinMeta={cryptoMeta}/>
      <NoticeDevider />
      <GalaryBlog galaryMeta={blockchainMeta} />
      <OurFeature />
      <GalaryBlog2 galaryMeta={altcoinMeta}/>
    </div>
  )
}

