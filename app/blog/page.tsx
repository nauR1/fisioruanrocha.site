import type { Metadata } from "next"
import BlogClientPage from "./blog-client-page"
import { getAllPosts, getFeaturedPost, getAllCategories } from "@/lib/blog-data"

export const metadata: Metadata = {
  title: "Blog | Ruan Rocha - Fisioterapia Esportiva",
  description:
    "Artigos, dicas e conteúdos educativos sobre fisioterapia esportiva, reabilitação do ombro, quiropraxia e performance atlética.",
}

export default function BlogPage() {
  const posts = getAllPosts()
  const featuredPost = getFeaturedPost()
  const categories = getAllCategories()

  return <BlogClientPage posts={posts} featuredPost={featuredPost} categories={categories} />
}
