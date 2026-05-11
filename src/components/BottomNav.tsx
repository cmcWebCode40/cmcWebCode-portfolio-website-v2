import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { User, Smartphone, Code2, FileText, Briefcase, GraduationCap } from "lucide-react";

const navItems = [
  { name: "About", href: "#about", icon: User },
  { name: "Apps", href: "#projects", icon: Smartphone },
  { name: "OSS", href: "#opensource", icon: Code2 },
  { name: "Blog", href: "#articles", icon: FileText },
  { name: "Work", href: "#experience", icon: Briefcase },
  { name: "Edu", href: "#education", icon: GraduationCap },
];

export function BottomNav() {
  const [activeSection, setActiveSection] = useState("about");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);

      // Detect active section
      const sections = navItems.map(item => item.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleClick = (href: string) => {
    const section = href.replace("#", "");
    setActiveSection(section);
  };

  return (
    <motion.nav
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: isVisible ? 0 : 100,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Outer glow */}
      <div
        className="absolute inset-0 rounded-[28px] opacity-40"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255,255,255,0.1) 0%, transparent 70%)",
          filter: "blur(20px)",
          transform: "scale(1.1)",
        }}
      />

      {/* Main container - Liquid Glass */}
      <div
        className="relative flex items-center gap-1 px-2 py-2 rounded-[24px] border"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
          backdropFilter: "blur(40px) saturate(180%)",
          WebkitBackdropFilter: "blur(40px) saturate(180%)",
          borderColor: "rgba(255,255,255,0.18)",
          boxShadow: `
            0 8px 32px rgba(0,0,0,0.3),
            inset 0 1px 1px rgba(255,255,255,0.1),
            inset 0 -1px 1px rgba(0,0,0,0.1)
          `,
        }}
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.href.replace("#", "");

          return (
            <a
              key={item.name}
              href={item.href}
              onClick={() => handleClick(item.href)}
              className="relative flex flex-col items-center justify-center px-3 py-2 rounded-[18px] transition-all duration-300"
              style={{
                minWidth: "52px",
              }}
            >
              {/* Active background pill */}
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-[18px]"
                  style={{
                    background: "linear-gradient(135deg, rgba(34,197,94,0.3) 0%, rgba(34,197,94,0.15) 100%)",
                    boxShadow: "0 0 20px rgba(34,197,94,0.3), inset 0 1px 1px rgba(255,255,255,0.1)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}

              {/* Icon */}
              <motion.div
                className="relative z-10"
                animate={{
                  scale: isActive ? 1.1 : 1,
                  y: isActive ? -1 : 0
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Icon
                  size={20}
                  strokeWidth={isActive ? 2.5 : 2}
                  style={{
                    color: isActive ? "var(--accent)" : "rgba(255,255,255,0.6)",
                    filter: isActive ? "drop-shadow(0 0 8px rgba(34,197,94,0.5))" : "none",
                  }}
                />
              </motion.div>

              {/* Label */}
              <motion.span
                className="relative z-10 text-[10px] mt-1 font-medium"
                animate={{
                  opacity: isActive ? 1 : 0.6,
                }}
                style={{
                  color: isActive ? "var(--accent)" : "rgba(255,255,255,0.6)",
                }}
              >
                {item.name}
              </motion.span>
            </a>
          );
        })}
      </div>
    </motion.nav>
  );
}
