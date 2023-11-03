import { getPostsMeta } from "@/lib/posts";
import { EditorMdx } from "../components/editor-mdx";

export const revalidate = 86400;

export default async function AdminPage() {
  const posts = await getPostsMeta();

  return (
    <div className="w-full h-full">
      <EditorMdx metaList={posts || []} />
    </div>
  );
}
