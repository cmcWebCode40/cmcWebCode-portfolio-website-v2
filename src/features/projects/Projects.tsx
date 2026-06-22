import { motion } from "framer-motion";
import { FaGooglePlay, FaAppStore } from "react-icons/fa";
import { SectionTitle } from "../../components/SectionTitle";
import { ViewAllLink } from "../../components/ViewAllLink";
import { projects, type Project } from "../../data/content";

const MAX_ITEMS = 6;

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
        <div className="sm:w-40 h-32 sm:h-auto overflow-hidden flex-shrink-0">
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
              className="text-sm leading-relaxed line-clamp-6"
              style={{ color: "var(--text-secondary)" }}
            >
              {project.description}
            </p>
          </div>

          <div className="flex items-center gap-3 mt-3">
            {project.playStoreUrl && (
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
            )}
            {project.appStoreUrl && (
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
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const displayedProjects = projects.slice(0, MAX_ITEMS);
  const hasMore = projects.length > MAX_ITEMS;

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          title="Mobile Apps"
          subtitle="Production applications I've built and shipped"
        />

        <div className="grid gap-4">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {hasMore && <ViewAllLink to="/projects" label="View All Projects" />}
      </div>
    </section>
  );
}
