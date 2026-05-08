import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { SectionTitle } from "../../components/SectionTitle";
import { workExperience, type WorkExperience as WorkExp } from "../../data/content";

function ExperienceCard({ job, index }: { job: WorkExp; index: number }) {
  return (
    <motion.div
      className="relative pl-8 pb-12 border-l last:pb-0"
      style={{ borderColor: "var(--border)" }}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <div
        className="absolute left-0 top-0 -translate-x-1/2 p-2 border rounded-full"
        style={{
          backgroundColor: "var(--bg)",
          borderColor: job.current ? "var(--accent)" : "var(--border)",
        }}
      >
        <Briefcase
          size={16}
          className={job.current ? "text-accent" : ""}
          style={{ color: job.current ? undefined : "var(--text-secondary)" }}
        />
      </div>

      <div className="ml-4">
        <div className="flex flex-wrap items-center gap-3 mb-1">
          <h3 className="text-lg font-semibold" style={{ color: "var(--text)" }}>
            {job.role}
          </h3>
          {job.current && (
            <span className="text-xs px-2 py-0.5 bg-accent/10 text-accent">
              Current
            </span>
          )}
        </div>

        <p className="text-accent font-medium">{job.company}</p>

        <div
          className="flex flex-wrap items-center gap-4 mt-1 text-xs"
          style={{ color: "var(--text-secondary)" }}
        >
          <span>{job.period}</span>
          <span>-</span>
          <span>{job.location}</span>
        </div>

        <p
          className="mt-4 text-sm leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          {job.description}
        </p>

        <ul className="mt-4 space-y-2">
          {job.achievements.map((achievement, i) => (
            <li
              key={i}
              className="text-sm flex items-start gap-2"
              style={{ color: "var(--text-secondary)" }}
            >
              <span className="text-accent -mt-0.5">▹</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mt-4">
          {job.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1"
              style={{
                backgroundColor: "var(--bg-secondary)",
                color: "var(--text-secondary)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          title="Work Experience"
          subtitle="My professional journey and accomplishments"
        />

        <div className="mt-8">
          {workExperience.map((job, index) => (
            <ExperienceCard key={job.id} job={job} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
