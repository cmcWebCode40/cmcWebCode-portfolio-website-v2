import { motion } from "framer-motion";
import { FaGithub, FaNpm } from "react-icons/fa";
import { Star, Download, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { openSourceProjects, type OpenSourceProject } from "../data/content";

function OpenSourceCard({
  project,
  index,
}: {
  project: OpenSourceProject;
  index: number;
}) {
  return (
    <motion.div
      className="group border p-6 transition-all duration-300"
      style={{
        borderColor: "var(--border)",
        backgroundColor: "var(--card)",
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        borderColor: "var(--accent)",
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 transition-opacity hover:opacity-70"
          style={{ backgroundColor: "var(--bg-secondary)" }}
        >
          <FaGithub size={24} className="text-accent" />
        </a>
        <div className="flex gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
            style={{ color: "var(--text-secondary)" }}
            title="GitHub"
          >
            <FaGithub size={18} />
          </a>
          {project.npmUrl && (
            <a
              href={project.npmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
              style={{ color: "var(--text-secondary)" }}
              title="npm"
            >
              <FaNpm size={18} />
            </a>
          )}
        </div>
      </div>

      <h3
        className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors font-mono"
        style={{ color: "var(--text)" }}
      >
        {project.name}
      </h3>

      <p
        className="text-sm leading-relaxed mb-4"
        style={{ color: "var(--text-secondary)" }}
      >
        {project.description}
      </p>

      <div
        className="flex items-center gap-4 text-xs"
        style={{ color: "var(--text-secondary)" }}
      >
        {project.stars && (
          <span className="flex items-center gap-1">
            <Star size={14} className="text-yellow-500" />
            {project.stars.toLocaleString()}
          </span>
        )}
        {project.downloads && (
          <span className="flex items-center gap-1">
            <Download size={14} />
            {project.downloads}
          </span>
        )}
        <span
          className="px-2 py-0.5"
          style={{ backgroundColor: "var(--bg-secondary)" }}
        >
          {project.language}
        </span>
      </div>
    </motion.div>
  );
}

export function OpenSourcePage() {
  return (
    <div
      className="min-h-screen py-20 px-6"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
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
            Open Source
          </h1>
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            SDKs and tools I've created for the developer community
          </p>
          <div className="w-16 h-1 bg-accent mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {openSourceProjects.map((project, index) => (
            <OpenSourceCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
