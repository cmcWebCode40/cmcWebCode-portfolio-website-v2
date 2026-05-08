import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 border border-gray-700 dark:border-gray-700 light:border-gray-300 hover:border-accent transition-all duration-300"
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun size={18} className="text-gray-400 hover:text-accent" />
      ) : (
        <Moon size={18} className="text-gray-600 hover:text-accent" />
      )}
    </motion.button>
  );
}
