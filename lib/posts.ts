import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeAutolinkHeadings from 'rehype-autolink-headings/lib'
import rehypeHighlight from 'rehype-highlight/lib'
import rehypeSlug from 'rehype-slug'
import Video from '@/app/components/Video'
import CustomImage from '@/app/components/CustomImage'

type Filetree = {
    "tree": [
        {
            "path": string,
        }
    ]
}

export async function getPostByName(fileName: string): Promise<BlogPost | undefined> {
    const res = await fetch(`https://raw.githubusercontent.com/phamvmnhut/crypto-start-blog-data/main/${fileName}`, {
        headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            'X-GitHub-Api-Version': '2022-11-28',
        }
    })

    if (!res.ok) return undefined

    const rawMDX = await res.text()

    if (rawMDX === '404: Not Found') return undefined

    // let toc : any = []

    const { frontmatter, content } = await compileMDX<{ title: string, thumbnail: string, summary: string, date: string, tags: string[] }>({
        source: rawMDX,
        components: {
            Video,
            CustomImage,
            // TOCInline,
        },
        options: {
            parseFrontmatter: true,
            mdxOptions: {
                rehypePlugins: [
                    rehypeHighlight,
                    rehypeSlug,
                    [rehypeAutolinkHeadings, {
                        behavior: 'wrap'
                    }],
                    // rehypeKatex,
                    // [rehypeCitation, { path: path.join(root, 'data') }],
                    // [rehypePrismPlus, { ignoreMissing: true }],
                    // rehypePresetMinify,
                ],
                // remarkPlugins: [
                //     remarkExtractFrontmatter,
                //     [remarkTocHeadings, { exportRef: toc }],
                //     remarkGfm,
                //     remarkCodeTitles,
                //     [remarkFootnotes, { inlineNotes: true }],
                //     remarkMath,
                //     remarkImgToJsx,
                // ]
            },
        }
    })

    const id = fileName.replace(/\.mdx$/, '')

    const blogPostObj: BlogPost = {
        meta: {
            id,
            title: frontmatter.title,
            thumbnail: frontmatter.thumbnail,
            summary: frontmatter.summary,
            date: frontmatter.date,
            tags: frontmatter.tags
        },
        content
    }

    return blogPostObj
}

export async function getPostsMeta(): Promise<Meta[] | undefined> {
    const res = await fetch('https://api.github.com/repos/phamvmnhut/crypto-start-blog-data/git/trees/main?recursive=1', {
        headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            'X-GitHub-Api-Version': '2022-11-28',
        }
    })

    if (!res.ok) return undefined

    const repoFiletree: Filetree = await res.json()

    const filesArray = repoFiletree.tree.map(obj => obj.path).filter(path => path.endsWith('.mdx'))

    const posts: Meta[] = []

    for (const file of filesArray) {
        const post = await getPostByName(file)
        if (post) {
            const { meta } = post
            posts.push(meta)
        }
    }

    return posts.sort((a, b) => a.date < b.date ? 1 : -1)
}

export function filterPostMetaByTag(posts: Meta[], tag: string, count? : number): Meta[] {
    const tagPosts = posts.filter(post => post.tags.includes(tag));
    return tagPosts.slice(0, count);
}