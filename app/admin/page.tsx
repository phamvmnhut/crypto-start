import { getPostsMeta } from "@/lib/posts";
import EditorMdx from "../components/EditorMdx";

export const revalidate = 86400

export default async function AdminScreen() {
  const posts = await getPostsMeta();
  
  return (
    <div className="w-full min-h-screen">
      <EditorMdx metaList={posts || []}/>
    </div>
  )
}
