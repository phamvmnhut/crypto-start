import { NewsMetaGridItem } from "./news-meta-grid-item";

export function OneRowBlog({ airdropMeta }: { airdropMeta: Meta[] }) {
  return (
    <div className="grid grid-cols-5 gap-3">
      {airdropMeta.map((e) => {
        return <NewsMetaGridItem meta={e} version={2} key={e.id} />;
      })}
    </div>
  );
}
