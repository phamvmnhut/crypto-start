import Image from "next/image";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { getFormattedDate } from "@/lib/getFormattedDate";

interface NewsMetaGridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  meta: Meta;
  aspectRatio?: "portrait" | "square";
  width?: number;
  height?: number;
  version?: 1 | 2;
}

export function NewsMetaGridItem({
  meta,
  aspectRatio = "portrait",
  width,
  height,
  version = 1,
  className,
  ...props
}: NewsMetaGridItemProps) {
  if (version == 2) {
    const formattedDate = getFormattedDate(meta.date);

    return (
      <Card className="p-3 rounded-lg">
        <Link href={`/posts/${meta.id}`}>
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6 hover:scale-105 transition-all duration-300"
            src={meta.thumbnail}
            alt={meta.title}
            width={200}
            height={200}
          />
        </Link>
        <div className="flex flex-row justify-between">
          <Link href={`/tags/${meta.tags[0]}`}>
            <h3 className=" text-primary font-medium inline-block">
              {meta.tags[0]}
            </h3>
          </Link>
          <span className="text-sm">{formattedDate}</span>
        </div>
        <h2 className=" text-xl font-medium mb-4 line-clamp-2">{meta.title}</h2>
        <p className="leading-relaxed text-base line-clamp-2">{meta.summary}</p>
      </Card>
    );
  }

  return (
    <div className={cn("space-y-3", className)} {...props}>
      <div className="overflow-hidden rounded-md">
        <Link href={`/posts/${meta.id}`} className="block">
          <Image
            src={meta.thumbnail}
            alt={meta.title}
            width={width}
            height={height}
            className={cn(
              "h-auto w-auto object-cover transition-all hover:scale-105 cursor-pointer",
              aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
            )}
          />
        </Link>
      </div>
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none">{meta.title}</h3>
        <p className="text-xs text-muted-foreground line-clamp-2">
          {meta.summary}
        </p>
      </div>
    </div>
  );
}
