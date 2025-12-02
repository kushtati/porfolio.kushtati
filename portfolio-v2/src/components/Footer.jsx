 import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-950/80 border-t border-white/10 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            className="text-gray-400 flex items-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Créé avec <FaHeart className="text-red-500 animate-pulse" /> par{' '}
            <span className="text-gradient font-semibold">Ibrahim Barry</span>
          </motion.p>

          <motion.div
            className="flex items-center gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="https://github.com/kushtati"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <FaGithub size={20} />
            </a>
            <span className="text-gray-400">© 2025 Tous droits réservés</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
