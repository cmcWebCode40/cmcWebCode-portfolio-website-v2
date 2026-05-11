import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Mail, FileText } from "lucide-react";
import { profile } from "../../data/content";
import { AnimatedBackground } from "../../components/AnimatedBackground";
import { useRef, useState } from "react";

function MagneticButton({ children, href }: { children: React.ReactNode; href: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const rotateX = useTransform(ySpring, [-20, 20], [10, -10]);
  const rotateY = useTransform(xSpring, [-20, 20], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.3);
    y.set((e.clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        x: xSpring,
        y: ySpring,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        backgroundColor: "var(--accent)",
        color: "var(--bg)",
      }}
      className="relative inline-flex items-center gap-3 px-8 py-4 font-semibold overflow-hidden group cursor-pointer"
    >
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        style={{
          background: "linear-gradient(105deg, transparent 40%, rgba(128,128,128,0.3) 50%, transparent 60%)",
          backgroundSize: "200% 100%",
        }}
        animate={isHovered ? { backgroundPosition: ["200% 0", "-200% 0"] } : {}}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating particles */}
      {isHovered && (
        <>
          {[...Array(6)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute w-1 h-1"
              initial={{
                x: 0,
                y: 0,
                opacity: 0,
                scale: 0
              }}
              animate={{
                x: (Math.random() - 0.5) * 100,
                y: -60 - Math.random() * 40,
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0]
              }}
              transition={{
                duration: 1 + Math.random() * 0.5,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeOut"
              }}
              style={{ left: `${20 + i * 12}%`, bottom: "10%", backgroundColor: "var(--bg)" }}
            />
          ))}
        </>
      )}

      {/* Glow ring on hover */}
      <motion.div
        className="absolute inset-0"
        initial={{ boxShadow: "0 0 0 0 rgba(255, 255, 255, 0)" }}
        animate={{
          boxShadow: isHovered
            ? [
                "0 0 20px 2px rgba(255, 255, 255, 0.3)",
                "0 0 40px 4px rgba(255, 255, 255, 0.15)",
                "0 0 20px 2px rgba(255, 255, 255, 0.3)"
              ]
            : "0 0 0 0 rgba(255, 255, 255, 0)"
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.a>
  );
}

export function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden"
    >
      <AnimatedBackground />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight"
            style={{ color: "var(--text)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {profile.name}
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl"
            style={{ color: "var(--text-secondary)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {profile.title}{" - "}
            <span className="text-accent">{profile.company}</span>
          </motion.h2>

          <motion.p
            className="max-w-2xl text-base md:text-lg leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {profile.description}
          </motion.p>

          <motion.div
            className="flex items-center gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border hover:border-accent hover:text-accent transition-all duration-300"
              style={{ borderColor: "var(--border)", color: "var(--text)" }}
            >
              <FaGithub size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border hover:border-accent hover:text-accent transition-all duration-300"
              style={{ borderColor: "var(--border)", color: "var(--text)" }}
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href={profile.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border hover:border-accent hover:text-accent transition-all duration-300"
              style={{ borderColor: "var(--border)", color: "var(--text)" }}
            >
              <FaXTwitter size={20} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-3 border hover:border-accent hover:text-accent transition-all duration-300"
              style={{ borderColor: "var(--border)", color: "var(--text)" }}
            >
              <Mail size={20} />
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border hover:border-accent hover:text-accent transition-all duration-300"
              style={{ borderColor: "var(--border)", color: "var(--text)" }}
              title="Resume"
            >
              <FileText size={20} />
            </a>
          </motion.div>

          <motion.div
            className="pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            style={{ perspective: 1000 }}
          >
            <MagneticButton href="#projects">
              View My Work
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
