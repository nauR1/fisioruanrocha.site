"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, Clock, ArrowLeft, Share2, Facebook, Linkedin, Twitter } from "lucide-react"
import { motion } from "framer-motion"
import type { BlogPost } from "@/lib/types"

type Props = {
  post: BlogPost
  relatedPosts: BlogPost[]
}

export default function ClientPage({ post, relatedPosts }: Props) {
  const handleShare = (platform: string) => {
    const url = `${window.location.origin}/blog/${post.slug}`
    const text = post.title

    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    }

    window.open(shareUrls[platform as keyof typeof shareUrls], "_blank", "width=600,height=400")
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto space-y-6"
            >
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft size={20} />
                Voltar para o blog
              </Link>

              <div className="space-y-4">
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold"
                >
                  {post.category}
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-4xl md:text-5xl font-bold text-foreground"
                >
                  {post.title}
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="flex flex-wrap items-center gap-6 text-muted-foreground"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-primary-foreground">
                      RR
                    </div>
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{post.readTime}</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden"
              >
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-[1fr_250px] gap-12">
                {/* Article Content */}
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="prose prose-lg max-w-none 
                    prose-headings:text-foreground prose-headings:font-bold prose-headings:tracking-tight 
                    prose-h1:text-4xl prose-h1:mt-16 prose-h1:mb-8 prose-h1:leading-tight prose-h1:text-left
                    prose-h2:text-3xl prose-h2:mt-14 prose-h2:mb-7 prose-h2:leading-tight prose-h2:border-b prose-h2:border-border prose-h2:pb-3 prose-h2:text-left
                    prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-5 prose-h3:leading-tight prose-h3:text-primary prose-h3:text-left
                    prose-h4:text-xl prose-h4:mt-8 prose-h4:mb-4 prose-h4:leading-tight prose-h4:font-semibold prose-h4:text-left
                    prose-p:text-muted-foreground prose-p:leading-[1.8] prose-p:mb-6 prose-p:text-left prose-p:indent-0
                    prose-p:first-of-type:text-lg prose-p:first-of-type:font-medium prose-p:first-of-type:text-left
                    prose-ul:text-muted-foreground prose-ul:my-6 prose-ul:leading-[1.7] prose-ul:pl-6
                    prose-ol:text-muted-foreground prose-ol:my-6 prose-ol:leading-[1.7] prose-ol:pl-6
                    prose-li:my-2 prose-li:pl-2 prose-li:text-left prose-li:leading-relaxed
                    prose-strong:text-foreground prose-strong:font-semibold 
                    prose-em:text-foreground prose-em:italic 
                    prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-muted-foreground prose-blockquote:bg-muted/30 prose-blockquote:py-4 prose-blockquote:rounded-r-lg prose-blockquote:my-8
                    prose-code:bg-muted prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono 
                    prose-pre:bg-muted prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto prose-pre:my-6
                    prose-a:text-primary prose-a:underline prose-a:decoration-primary/30 hover:prose-a:decoration-primary prose-a:transition-colors 
                    prose-img:rounded-lg prose-img:shadow-md prose-img:my-8 prose-img:mx-auto
                    prose-hr:border-border prose-hr:my-12
                    [&>*]:text-left [&_ul]:list-disc [&_ol]:list-decimal [&_li]:ml-0"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Sidebar */}
                <motion.aside
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="space-y-8"
                >
                  {/* Share */}
                  <div className="p-6 rounded-xl bg-card border border-border sticky top-24">
                    <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                      <Share2 size={20} />
                      Compartilhar
                    </h3>
                    <div className="flex flex-col gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="justify-start bg-transparent"
                        onClick={() => handleShare("facebook")}
                      >
                        <Facebook size={16} className="mr-2" />
                        Facebook
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="justify-start bg-transparent"
                        onClick={() => handleShare("twitter")}
                      >
                        <Twitter size={16} className="mr-2" />
                        Twitter
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="justify-start bg-transparent"
                        onClick={() => handleShare("linkedin")}
                      >
                        <Linkedin size={16} className="mr-2" />
                        LinkedIn
                      </Button>
                    </div>
                  </div>
                </motion.aside>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground text-center"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Precisa de ajuda especializada?</h2>
              <p className="opacity-90 mb-6 leading-relaxed">
                Agende uma avaliação e descubra como posso ajudá-lo a se recuperar e alcançar seus objetivos.
              </p>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold">
                <Link href="/agendamento">Agendar consulta</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl font-bold text-foreground mb-12"
                >
                  Artigos Relacionados
                </motion.h2>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid md:grid-cols-3 gap-8"
                >
                  {relatedPosts.map((relatedPost) => (
                    <motion.div key={relatedPost.slug} variants={itemVariants}>
                      <Link
                        href={`/blog/${relatedPost.slug}`}
                        className="group rounded-xl overflow-hidden bg-card border border-border hover:border-primary transition-all block hover:shadow-lg"
                      >
                        <div className="relative h-[200px] overflow-hidden">
                          <img
                            src={relatedPost.image || "/placeholder.svg"}
                            alt={relatedPost.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h3>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
