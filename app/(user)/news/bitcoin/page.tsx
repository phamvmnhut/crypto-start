import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Separator } from "@/components/ui/separator";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { NewsMetaGridItem } from "../../components/news-meta-grid-item";
import { NewsBitcoinKnowledge } from "../../components/bitcoin-knowledge";

import { filterPostMetaByTag, getPostsMeta } from "@/lib/posts";
import { notFound } from "next/navigation";
import { BITCOIN_TAG, HOT_TAG } from "@/data/tags";
import { CryptoCurrencyMarket } from "../../components/crypto-currentcy-chart";
import { Fragment } from "react";

export const revalidate = 86400;

export default async function BitcoinNewsAppPage() {
  const posts = await getPostsMeta();
  if (!posts) notFound();

  const hotMeta = filterPostMetaByTag(posts, HOT_TAG, 6);
  const bitcoinMeta = filterPostMetaByTag(posts, BITCOIN_TAG, 4);

  return (
    <Fragment>
      <Tabs defaultValue="new" className="h-full space-y-6">
        <div className="space-between flex items-center">
          <TabsList>
            <TabsTrigger value="new" className="relative">
              Mới nhất
            </TabsTrigger>
            <TabsTrigger value="knowledge">Kiến thức</TabsTrigger>
            <TabsTrigger value="live">Live Crypto market</TabsTrigger>
          </TabsList>
          <div className="ml-auto mr-4">
            <Button>
              <PlusCircledIcon className="mr-2 h-4 w-4" />
              Tạo nội dung
            </Button>
          </div>
        </div>
        <TabsContent value="new" className="border-none p-0 outline-none">
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
          <div className="relative">
            <ScrollArea>
              <div className="flex space-x-4 pb-4">
                {bitcoinMeta.map((meta) => (
                  <NewsMetaGridItem
                    key={meta.id}
                    meta={meta}
                    className="w-[250px]"
                    aspectRatio="portrait"
                    width={250}
                    height={330}
                  />
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
          <div className="mt-6 space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">
              Dành riêng cho bạn
            </h2>
            <p className="text-sm text-muted-foreground">
              Gọi ý nội dung bạn muốn xem. Cá nhân hoá từng ngày
            </p>
          </div>
          <Separator className="my-4" />
          <div className="relative">
            <ScrollArea>
              <div className="flex space-x-4 pb-4">
                {hotMeta.map((meta) => (
                  <NewsMetaGridItem
                    key={meta.id}
                    meta={meta}
                    className="w-[250px]"
                    aspectRatio="portrait"
                    width={250}
                    height={330}
                  />
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        </TabsContent>
        <TabsContent
          value="knowledge"
          className="h-full flex-col border-none p-0 data-[state=active]:flex"
        >
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold tracking-tight">
                Lộ trình kiến thức
              </h2>
              <p className="text-sm text-muted-foreground">
                Lộ trình phù hợp cho người bắt đầu vào thị trường.
              </p>
            </div>
          </div>
          <Separator className="my-4" />
          <NewsBitcoinKnowledge />
        </TabsContent>
        <TabsContent value="live" className="">
          <CryptoCurrencyMarket />
        </TabsContent>
      </Tabs>
    </Fragment>
  );
}
