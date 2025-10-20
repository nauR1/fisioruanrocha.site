import ClientPage from "./clientPage"
import type { Metadata } from "next"
import { getPostBySlug, getRelatedPosts, getAllPosts } from "@/lib/blog-data"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: "Post não encontrado",
    }
  }

  return {
    title: `${post.title} | Dr. Ruan Rocha`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(slug)

  return <ClientPage post={post} relatedPosts={relatedPosts} />
}
