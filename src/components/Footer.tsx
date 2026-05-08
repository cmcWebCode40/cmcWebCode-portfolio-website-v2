import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Mail } from "lucide-react";
import { profile } from "../data/content";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-12 px-6" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-6">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              style={{ color: "var(--text-secondary)" }}
            >
              <FaGithub size={22} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              style={{ color: "var(--text-secondary)" }}
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href={profile.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              style={{ color: "var(--text-secondary)" }}
            >
              <FaXTwitter size={22} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-accent transition-colors"
              style={{ color: "var(--text-secondary)" }}
            >
              <Mail size={22} />
            </a>
          </div>

          <p
            className="text-xs"
            style={{ color: "var(--text-secondary)" }}
          >
            &copy; {currentYear} {profile.name}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
