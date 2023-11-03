import { Separator } from "@/components/ui/separator";
import { AIRDROP_TAG } from "@/data/tags";
import { filterPostMetaByTag, getPostsMeta } from "@/lib/posts";
import { notFound } from "next/navigation";
import { Fragment } from "react";
import { NewsMetaGridItem } from "../../components/news-meta-grid-item";

export default async function AirdropNewsAppPage() {
  const posts = await getPostsMeta();
  if (!posts) notFound();

  const airdropMeta = filterPostMetaByTag(posts, AIRDROP_TAG, 6);

  return (
    <Fragment>
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
          {airdropMeta.map((meta) => (
            <NewsMetaGridItem key={meta.id} meta={meta} version={2} />
          ))}
        </div>
      </div>
    </Fragment>
  );
}
