'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

interface PortfolioItem {
  id: number;
  type: 'image' | 'video' | 'gif';
  src: string;
}

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  const [portfolioItems] = useState<PortfolioItem[]>([
    // Images
    { id: 1, type: 'image', src: '/bellahadidvogue.png' },
    { id: 2, type: 'image', src: '/VERAWANG EMBRACE Rose.png' },
    { id: 3, type: 'image', src: '/99c fries.png' },
    { id: 4, type: 'image', src: '/daves triple.png' },
    { id: 5, type: 'gif', src: '/rebrand.gif' },
    { id: 6, type: 'image', src: '/levis.png' },
    { id: 7, type: 'image', src: '/sabrina astral pink.png' },
    { id: 8, type: 'image', src: '/astral pink.png' },
    { id: 9, type: 'video', src: '/20250519_1405_Silhouette with Moving Grain_simple_compose_01jvmvhepqeqy9y7qwrm5cspks_1.mp4' },
    { id: 10, type: 'image', src: '/wrangler.png' },
    { id: 11, type: 'image', src: '/youngonce.png' },
    { id: 12, type: 'image', src: '/rometheworld.png' },
    { id: 13, type: 'image', src: '/marlboro cowboy.png' },
    { id: 14, type: 'image', src: '/car magazine 1.png' },
    { id: 15, type: 'image', src: '/car magazine 2.png' },
    { id: 16, type: 'image', src: '/hellhound.png' },
    { id: 17, type: 'image', src: '/cutout.png' },
    { id: 18, type: 'image', src: '/final friday.png' },
    { id: 19, type: 'image', src: '/starlight2.png' },
    { id: 20, type: 'image', src: '/YE NEWS.png' },
    { id: 21, type: 'image', src: '/beabadoobee.png' },
    // Moved to end
    { id: 22, type: 'image', src: '/DAEMON.png' },
    { id: 23, type: 'image', src: '/bulletholebandaid.png' },
    { id: 24, type: 'image', src: '/focus.png' },
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
            onClick={() => setSelectedItem(selectedItem?.src === item.src ? null : item)}
          >
            {item.type === 'image' && (
              <img src={item.src} alt="Portfolio item" />
            )}
            {item.type === 'video' && (
              <video 
                ref={videoRef}
                src={item.src} 
                loop 
                muted 
                playsInline 
                autoPlay
                className="w-full h-full object-cover"
                style={{ pointerEvents: 'none' }}
              />
            )}
            {item.type === 'gif' && (
              <img src={item.src} alt="Portfolio item" />
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
            {selectedItem.type === 'image' && (
              <motion.img
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                src={selectedItem.src}
                alt="Selected portfolio item"
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              />
            )}
            {selectedItem.type === 'video' && (
              <motion.video
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                src={selectedItem.src}
                className="modal-content"
                autoPlay
                loop
                muted
                playsInline
                onClick={(e) => e.stopPropagation()}
              />
            )}
            {selectedItem.type === 'gif' && (
              <motion.img
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                src={selectedItem.src}
                alt="Selected portfolio item"
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
