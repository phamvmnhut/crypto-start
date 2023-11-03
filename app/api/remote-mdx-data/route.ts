import { getPostByName } from "@/lib/posts";
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get("slug");
  if (path == null) {
    return NextResponse.json({ error: "File not found" });
  }
  let fileName = path;
  if (!path.includes(".mdx")) {
    fileName += ".mdx";
  }
  const data = await getPostByName(fileName);
  return NextResponse.json({ data });
}

type GitHubFileInfo = {
  sha: string;
};

type PostBody = {
  content: string;
  message?: string;
};

export async function POST(request: NextRequest) {
  const body: PostBody = await request.json();

  const path = request.nextUrl.searchParams.get("slug");
  if (path == null) {
    return NextResponse.json({ error: "File not found" });
  }
  let fileName = path;
  if (!path.includes(".mdx")) {
    fileName += ".mdx";
  }

  let infoFile = await fetch(
    `https://api.github.com/repos/phamvmnhut/crypto-start-blog-data/contents/${fileName}`
  );
  const { sha }: GitHubFileInfo = await infoFile.json();

  const updateRes = await fetch(
    `https://api.github.com/repos/phamvmnhut/crypto-start-blog-data/contents/${fileName}`,
    {
      method: "PUT",
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
      cache: "no-cache",
      body: JSON.stringify({
        message: body.message || "[web user] update",
        content: body.content,
        sha: sha,
      }),
    }
  );

  if (!updateRes.ok) {
    return NextResponse.json({ error: "File not found" });
  } else {
    revalidatePath(`/posts/${path}`);
    return NextResponse.json({ message: "oke" });
  }
}
