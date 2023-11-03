import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

export function GalleryBlog({ galleryMeta }: { galleryMeta: Meta[] }) {
  return (
    <div className="pt-12 pr-0 pb-14 pl-0 container px-5 mx-auto">
      <div className="w-full pt-4 pb-6 pl-5 mt-0 mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16">
        <div className="flex flex-col items-center sm:px-5 md:flex-row">
          <div className="flex flex-col items-start justify-center w-full h-full pt-6 pr-0 pb-6 pl-0 mb-6 md:mb-0 md:w-1/2">
            <div className="flex flex-col items-start justify-center h-full space-y-3 transform md:pr-10 lg:pr-16 md:space-y-5">
              <div className="bg-green-500 flex items-center leading-none rounded-full pt-1.5 pr-3 pb-1.5 pl-2 uppercase">
                <p className="inline">
                  <Star className="w-4 h-4" />
                </p>
                <p className="inline text-xs font-medium">New</p>
              </div>
              <h1 className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">
                {galleryMeta[0].title}
              </h1>
              <div className="pt-2 pr-0 pb-0 pl-0">
                <p className="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1">
                  {galleryMeta[0].date}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="block">
              <Link href={`/posts/${galleryMeta[0].id}`}>
                <Image
                  className="object-cover rounded-lg max-h-64 sm:max-h-96 btn- w-full h-full"
                  src={galleryMeta[0].thumbnail}
                  alt={galleryMeta[0].title}
                  width={1000}
                  height={1000}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {galleryMeta.splice(1).map((e) => {
            return <ItemList key={e.id} item={e} />;
          })}
        </div>
        <div className="w-full mx-auto flex flex-row justify-center">
          <Link href="/tags/blockchain">
            <Button>Xem thêm →</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function ItemList({ item }: { item: Meta }) {
  return (
    <Card className="">
      <div className="p-6 rounded-lg">
        <Link href={`/posts/${item.id}`}>
          <Image
            className="h-56 rounded w-full object-cover object-center mb-6 hover:scale-105 transition-all duration-300"
            src={item.thumbnail}
            alt={item.title}
            width={200}
            height={400}
          />
        </Link>
        <div className="flex flex-row justify-between">
          <Link href={`/tags/${item.tags[0]}`}>
            <h3 className=" text-primary font-medium inline-block">
              {item.tags[0]}
            </h3>
          </Link>
          <span className="text-sm">{item.date}</span>
        </div>
        <h2 className="text-lg font-medium title-font mb-4 line-clamp-2">
          {item.title}
        </h2>
        <p className="leading-relaxed text-base line-clamp-2">{item.summary}</p>
      </div>
    </Card>
  );
}
