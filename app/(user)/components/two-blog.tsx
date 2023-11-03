import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function ItemList({ item }: { item: Meta }) {
  return (
    <div className="sm:w-1/2 mb-10 px-4">
      <div className="rounded-lg h-64 overflow-hidden">
        <Link href={`/posts/${item.id}`}>
          <Image
            className="object-cover object-center h-full w-full"
            src={item.thumbnail}
            alt={item.title}
            width={1201}
            height={501}
          />
        </Link>
      </div>
      <h2 className="title-font text-2xl font-medium mt-6 mb-3">
        {item.title}
      </h2>
      <p className="leading-relaxed text-base line-clamp-2">{item.summary}</p>
    </div>
  );
}

export function TwoBlog({
  bitcoinMeta: cryptoMeta,
}: {
  bitcoinMeta: Meta[];
}) {
  return (
    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
      {cryptoMeta.map((e) => {
        return <ItemList item={e} key={e.id} />;
      })}
    </div>
  );
}
