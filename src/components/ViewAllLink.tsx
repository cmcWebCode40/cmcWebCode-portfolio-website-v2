import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ViewAllLinkProps {
  to: string;
  label?: string;
}

export function ViewAllLink({ to, label = "View All" }: ViewAllLinkProps) {
  return (
    <motion.div
      className="flex justify-center mt-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <Link
        to={to}
        className="inline-flex items-center gap-2 px-6 py-3 border font-medium transition-all duration-300 hover:border-accent hover:text-accent group"
        style={{ borderColor: "var(--border)", color: "var(--text)" }}
      >
        {label}
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
    </motion.div>
  );
}
