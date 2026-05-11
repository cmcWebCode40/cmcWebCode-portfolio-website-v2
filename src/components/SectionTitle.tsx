import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2
        className="text-2xl md:text-3xl font-bold mb-2"
        style={{ color: "var(--text)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
          {subtitle}
        </p>
      )}
      <div className="w-16 h-1 bg-accent mt-4" />
    </motion.div>
  );
}
