import matter from 'gray-matter'

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

    const { data, content } = matter(rawMDX);

    const id = fileName.replace(/\.mdx$/, '')

    const blogPostObj: BlogPost = {
        meta: {
            id,
            title: data.title,
            thumbnail: data.thumbnail,
            summary: data.summary,
            date: data.date,
            tags: data.tags
        },
        content,
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

export function filterPostMetaByTag(posts: Meta[], tag: string, count?: number): Meta[] {
    const tagPosts = posts.filter(post => post.tags.includes(tag));
    return tagPosts.slice(0, count);
}