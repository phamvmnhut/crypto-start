import { filterPostMetaByTag, getPostsMeta } from "@/lib/posts";
import { notFound } from "next/navigation";
import { ALTCOIN_TAG } from "@/data/tags";
import { Fragment } from "react";
import { GalleryBlog2 } from "../../components/gallery-blog-2";

export const revalidate = 86400;

export default async function AltcoinNewsAppPage() {
  const posts = await getPostsMeta();
  if (!posts) notFound();

  const altcoinMeta = filterPostMetaByTag(posts, ALTCOIN_TAG, 6);

  return (
    <Fragment>
      <GalleryBlog2 galleryMeta={altcoinMeta} />
    </Fragment>
  );
}
