import { getPostsMeta } from "@/lib/posts";
import EditorMdx from "@/app/components/EditorMdx";

export const revalidate = 86400

export default async function AdminScreen() {
  const posts = await getPostsMeta();
  
  return (
    <div className="w-full h-full">
      <EditorMdx metaList={posts || []}/>
    </div>
  )
}
