import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion,AnimatePresence } from "framer-motion";

export default function ThemeController() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="rounded-full">
      <motion.button
      onClick={toggleTheme}
      className="dark:bg-black p-2 rounded-full cursor-pointer"
      whileTap={{ scale: 0.9 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "light" ? (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.3 }}
          >
            <Moon size={20} className="text-gray-900 dark:text-yellow-300" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: 90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -90 }}
            transition={{ duration: 0.3 }}
          >
            <Sun size={20} className="text-yellow-500" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
    </div>
  );
}
