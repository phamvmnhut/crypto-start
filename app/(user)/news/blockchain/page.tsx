import { Fragment } from "react";
import { NoticeDivider } from "../../components/notice-divider";
import { Separator } from "@/components/ui/separator";
import { filterPostMetaByTag, getPostsMeta } from "@/lib/posts";
import { notFound } from "next/navigation";
import { BLOCKCHAIN_TAG } from "@/data/tags";
import { NewsMetaGridItem } from "../../components/news-meta-grid-item";

export default async function BlockchainNewsAppPage() {
  const posts = await getPostsMeta();
  if (!posts) notFound();

  const blockchainMeta = filterPostMetaByTag(posts, BLOCKCHAIN_TAG, 6);
  return (
    <Fragment>
      <NoticeDivider />
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            Nổi bật trong tuần
          </h2>
          <p className="text-sm text-muted-foreground">
            Tuyển chọn các bài nổi bật. Cập nhật liên tục
          </p>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="relative w-full">
        <div className="grid grid-cols-5 gap-3">
          {blockchainMeta.map((meta) => (
            <NewsMetaGridItem key={meta.id} meta={meta} version={2} />
          ))}
        </div>
      </div>
    </Fragment>
  );
}
