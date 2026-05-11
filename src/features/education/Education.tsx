import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { SectionTitle } from "../../components/SectionTitle";
import { ViewAllLink } from "../../components/ViewAllLink";
import { education, type Education as EducationType } from "../../data/content";

const MAX_ITEMS = 6;

function EducationCard({
  item,
  index,
}: {
  item: EducationType;
  index: number;
}) {
  const isAward = item.degree.toLowerCase().includes("certificate");

  return (
    <motion.div
      className="relative pl-8 pb-8 border-l last:pb-0"
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
          borderColor: item.current ? "var(--accent)" : "var(--border)",
        }}
      >
        {isAward ? (
          <Award size={16} className="text-accent" />
        ) : (
          <GraduationCap size={16} className="text-accent" />
        )}
      </div>

      <div className="ml-4">
        <div className="flex items-center gap-3 mb-1">
          <h3
            className="text-lg font-semibold"
            style={{ color: "var(--text)" }}
          >
            {item.institution}
          </h3>
          {item.current && (
            <span className="text-xs px-2 py-0.5 bg-accent/10 text-accent">
              Current
            </span>
          )}
        </div>

        <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
          {item.degree} in {item.field}
        </p>

        <p className="text-xs mt-1" style={{ color: "var(--text-secondary)" }}>
          {item.period}
        </p>

        {item.description && (
          <p
            className="text-sm mt-3 leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {item.description}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export function Education() {
  const displayedEducation = education.slice(0, MAX_ITEMS);
  const hasMore = education.length > MAX_ITEMS;

  return (
    <section
      id="education"
      className="py-20 px-6"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          title="Education"
          subtitle="Academic background and professional certifications"
        />

        <div className="mt-8">
          {displayedEducation.map((item, index) => (
            <EducationCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {hasMore && <ViewAllLink to="/education" label="View All Education" />}
      </div>
    </section>
  );
}
