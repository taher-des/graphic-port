'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

interface PortfolioItem {
  id: number;
  type: 'image' | 'video';
  src: string;
}

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [portfolioItems] = useState<PortfolioItem[]>([
    { id: 1, type: 'image', src: '/YE_NEWS.png' },
    { id: 2, type: 'image', src: '/bulletholdbandaid.png' },
    { id: 3, type: 'image', src: '/DAEMON.png' },
    { id: 4, type: 'image', src: '/psgirl.PNG' },
    { id: 5, type: 'image', src: '/99c_fries.png' },
    { id: 6, type: 'image', src: '/VERAWANG_EMBRACE_Rose.png' },
  ]);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="h-[40vh] flex flex-col items-center justify-start text-center px-4 pt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Taher Ksibi
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl mb-4"
        >
          Design / Marketing
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl mb-8"
        >
          Located in Toronto, ON
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex w-full justify-center"
        >
          <a 
            href="https://twitter.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-400 transition-colors mr-[75px]"
          >
            <FaXTwitter style={{ color: 'white' }} />
          </a>
          <a 
            href="mailto:your.email@example.com"
            className="text-2xl hover:text-gray-400 transition-colors"
          >
            <MdEmail style={{ color: 'white' }} />
          </a>
        </motion.div>
      </section>

      {/* Portfolio Grid */}
      <section className="portfolio-grid">
        {portfolioItems.map((item) => (
          <div
            key={item.id}
            className="portfolio-item"
            onClick={() => setSelectedItem(selectedItem === item.src ? null : item.src)}
          >
            {item.type === 'image' && (
              <img src={item.src} alt="Portfolio item" />
            )}
            {item.type === 'video' && (
              <video src={item.src} loop muted playsInline />
            )}
          </div>
        ))}
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay"
            onClick={() => setSelectedItem(null)}
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedItem}
              alt="Selected portfolio item"
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
