import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User, Smartphone, Code2, FileText, Briefcase, GraduationCap } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navigation = [
  { name: "About", href: "#about", icon: User },
  { name: "Projects", href: "#projects", icon: Smartphone },
  { name: "Open Source", href: "#opensource", icon: Code2 },
  { name: "Articles", href: "#articles", icon: FileText },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Education", href: "#education", icon: GraduationCap },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md border-b" : "bg-transparent"
      }`}
      style={{
        backgroundColor: isScrolled ? "var(--bg-secondary)" : "transparent",
        borderColor: "var(--border)",
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-center">
          <div className="hidden md:flex items-center gap-6">
            {navigation.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-1.5 text-sm transition-colors"
                  style={{ color: "var(--text-secondary)" }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--accent)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-secondary)")
                  }
                >
                  <Icon size={16} />
                  <span>{item.name}</span>
                </motion.a>
              );
            })}
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center justify-between w-full">
            <ThemeToggle />
            <button
              className="transition-colors"
              style={{ color: "var(--text-secondary)" }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden backdrop-blur-md border-b"
            style={{
              backgroundColor: "var(--bg-secondary)",
              borderColor: "var(--border)",
            }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-2 text-sm transition-colors"
                    style={{ color: "var(--text-secondary)" }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon size={16} />
                    <span>{item.name}</span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
