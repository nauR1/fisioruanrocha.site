"use client"

import { useMemo, useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Search, Calendar, Clock, Tag, ArrowRight } from "lucide-react"
import type { BlogPost } from "@/lib/types"

type BlogClientPageProps = {
  posts: BlogPost[]
  featuredPost?: BlogPost
  categories: string[]
}

export default function BlogClientPage({ posts, featuredPost, categories }: BlogClientPageProps) {
  const [query, setQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState<string>("Todos")

  const filteredPosts = useMemo(() => {
    const lower = query.trim().toLowerCase()
    return posts.filter((post) => {
      const matchesCategory = activeCategory === "Todos" || post.category === activeCategory
      const matchesQuery =
        lower.length === 0 ||
        post.title.toLowerCase().includes(lower) ||
        post.excerpt.toLowerCase().includes(lower) ||
        post.content.toLowerCase().includes(lower) ||
        (post.tags ?? []).some((t) => t.toLowerCase().includes(lower))
      return matchesCategory && matchesQuery
    })
  }, [posts, query, activeCategory])

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-28 md:pt-32 pb-12 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">Blog</h1>
              <p className="text-muted-foreground text-lg">
                Conteúdos educativos sobre fisioterapia esportiva, ombro, dor crônica e performance.
              </p>
            </div>
          </div>
        </section>

        {/* Featured */}
        {featuredPost && (
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[280px] md:h-[360px] rounded-2xl overflow-hidden">
                  <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-primary text-primary-foreground">
                    <Tag size={14} /> {featuredPost.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold">{featuredPost.title}</h2>
                  <p className="text-muted-foreground">{featuredPost.excerpt}</p>
                  <div className="flex flex-wrap gap-4 text-muted-foreground text-sm">
                    <span className="flex items-center gap-1">
                      <Calendar size={16} /> {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={16} /> {featuredPost.readTime}
                    </span>
                  </div>
                  <Button asChild className="mt-2">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      Ler artigo
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Filters & Search */}
        <section className="py-8 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
              <div className="flex flex-wrap gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className={`px-3 py-1 rounded-full border text-sm transition-colors ${
                      activeCategory === cat ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border"
                    }`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="relative w-full md:w-[340px]">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Pesquisar artigos..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border bg-card border-border text-sm focus:outline-none"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group rounded-2xl overflow-hidden border bg-card border-border hover:shadow-md transition-shadow"
                >
                  <div className="h-40 w-full overflow-hidden">
                    <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4 space-y-3">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold px-2 py-1 rounded-full bg-muted">
                      <Tag size={12} /> {post.category}
                    </span>
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{post.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                    <div className="flex gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} /> {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} /> {post.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            {filteredPosts.length === 0 && (
              <div className="max-w-4xl mx-auto text-center text-muted-foreground py-12">
                Nenhum artigo encontrado.
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}