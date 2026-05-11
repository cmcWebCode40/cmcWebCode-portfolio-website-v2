import { motion } from "framer-motion";
import { FaGooglePlay, FaAppStore } from "react-icons/fa";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { projects, type Project } from "../data/content";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      className="group border overflow-hidden transition-all duration-300"
      style={{
        borderColor: "var(--border)",
        backgroundColor: "var(--card)",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{
        borderColor: "var(--accent)",
      }}
    >
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-36 h-32 sm:h-auto overflow-hidden flex-shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="flex-1 p-4 flex flex-col justify-between">
          <div>
            <h3
              className="text-base font-semibold mb-2 group-hover:text-accent transition-colors"
              style={{ color: "var(--text)" }}
            >
              {project.title}
            </h3>

            <p
              className="text-sm leading-relaxed line-clamp-2"
              style={{ color: "var(--text-secondary)" }}
            >
              {project.description}
            </p>
          </div>

          <div className="flex items-center gap-3 mt-3">
            <a
              href={project.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs px-3 py-1.5 border transition-all hover:border-accent hover:text-accent"
              style={{
                borderColor: "var(--border)",
                color: "var(--text-secondary)",
              }}
            >
              <FaGooglePlay size={12} />
              <span>Play Store</span>
            </a>
            <a
              href={project.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs px-3 py-1.5 border transition-all hover:border-accent hover:text-accent"
              style={{
                borderColor: "var(--border)",
                color: "var(--text-secondary)",
              }}
            >
              <FaAppStore size={12} />
              <span>App Store</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
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
            Mobile Apps
          </h1>
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            Production applications I've built and shipped
          </p>
          <div className="w-16 h-1 bg-accent mt-4" />
        </motion.div>

        <div className="grid gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
