import React from 'react';
import { Cloud, Stars, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-3 rounded-full bg-gradient-to-r from-blue-200 to-blue-300 
                 dark:from-indigo-900 dark:to-purple-900 hover:scale-110 transition-all duration-300
                 shadow-lg hover:shadow-xl"
      whileHover={{ rotate: 180 }}
      transition={{ duration: 0.3 }}
      aria-label="Toggle theme"
    >
      <div className="relative">
        {theme === 'light' ? (
          <div className="relative">
            <Stars className="w-6 h-6 text-indigo-100" />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1"
            >
              <Cloud className="w-4 h-4 text-indigo-200" />
            </motion.div>
          </div>
        ) : (
          <div className="relative">
            <Sun className="w-6 h-6 text-yellow-400" />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1"
            >
              <Cloud className="w-4 h-4 text-white" />
            </motion.div>
          </div>
        )}
      </div>
    </motion.button>
  );
}