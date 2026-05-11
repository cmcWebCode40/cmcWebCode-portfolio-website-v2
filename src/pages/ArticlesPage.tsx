import { motion } from "framer-motion";
import { ExternalLink, Clock, Calendar, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { articles, type Article } from "../data/content";

function ArticleCard({ article, index }: { article: Article; index: number }) {
  const formattedDate = new Date(article.publishedAt).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );

  return (
    <motion.a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border p-6 transition-all duration-300"
      style={{
        borderColor: "var(--border)",
        backgroundColor: "var(--card)",
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs px-2 py-1 bg-accent/10 text-accent">
          {article.platform}
        </span>
        <ExternalLink
          size={16}
          className="group-hover:text-accent transition-colors"
          style={{ color: "var(--text-secondary)" }}
        />
      </div>

      <h3
        className="text-lg font-semibold mb-3 group-hover:text-accent transition-colors leading-tight"
        style={{ color: "var(--text)" }}
      >
        {article.title}
      </h3>

      <p
        className="text-sm leading-relaxed mb-4"
        style={{ color: "var(--text-secondary)" }}
      >
        {article.excerpt}
      </p>

      <div
        className="flex items-center gap-4 text-xs"
        style={{ color: "var(--text-secondary)" }}
      >
        <span className="flex items-center gap-1">
          <Calendar size={14} />
          {formattedDate}
        </span>
        <span className="flex items-center gap-1">
          <Clock size={14} />
          {article.readTime}
        </span>
      </div>
    </motion.a>
  );
}

export function ArticlesPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 mb-8 transition-colors hover:text-accent"
          style={{ color: "var(--text-secondary)" }}
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className="text-3xl md:text-4xl font-bold mb-2"
            style={{ color: "var(--text)" }}
          >
            Technical Articles
          </h1>
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            Thoughts on mobile development, architecture, and best practices
          </p>
          <div className="w-16 h-1 bg-accent mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
