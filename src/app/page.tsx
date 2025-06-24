'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdEmail } from 'react-icons/md';
import { FaFilePdf } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import Image from 'next/image';

interface PortfolioItem {
  id: number;
  type: 'image' | 'video' | 'gif';
  src: string;
  description?: string;
}

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [showAbout, setShowAbout] = useState(false);
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
    { id: 1, type: 'image', src: '/bellahadidvogue.webp', description: 'Editorial Work' },
    { id: 2, type: 'image', src: '/VERAWANG EMBRACE Rose.webp', description: 'Product Campaign' },
    { id: 3, type: 'image', src: '/99c fries.webp', description: 'Advertising Campaign' },
    { id: 4, type: 'image', src: '/starbucks.webp', description: 'Digital Campaign' },
    { id: 5, type: 'gif', src: '/rebrand.gif', description: 'Brand Identity' },
    { id: 6, type: 'image', src: '/levis email campaign.webp', description: 'Email Campaign' },
    { id: 7, type: 'image', src: '/levis.webp', description: 'Editorial Design' },
    { id: 8, type: 'image', src: '/sabrina astral pink.webp', description: 'Editorial Work' },
    { id: 9, type: 'image', src: '/astral pink.webp', description: 'Product Campaign' },
    { id: 10, type: 'video', src: '/20250519_1405_Silhouette with Moving Grain_simple_compose_01jvmvhepqeqy9y7qwrm5cspks_1.mp4', description: 'Video Art' },
    { id: 11, type: 'image', src: '/wrangler.webp', description: 'Fashion Brand Campaign' },
    { id: 12, type: 'image', src: '/youngonce.webp', description: 'Music Campaign' },
    { id: 13, type: 'video', src: '/Sephora Skincareiq 2 3.mp4', description: 'Sephora Campaign' },
    { id: 14, type: 'image', src: '/rometheworld.webp', description: 'Travel Photography' },
    { id: 15, type: 'image', src: '/marlboro cowboy.webp', description: 'Vintage Advertising' },
    { id: 16, type: 'image', src: '/car magazine 1.webp', description: 'Magazine Spread' },
    { id: 17, type: 'image', src: '/car magazine 2.webp', description: 'Magazine Cover' },
    { id: 18, type: 'image', src: '/hellhound.webp', description: 'Album Cover' },
    { id: 19, type: 'image', src: '/cutout.webp', description: 'Conceptual Art' },
    { id: 20, type: 'image', src: '/final friday.webp', description: 'Movie Poster' },
    { id: 21, type: 'image', src: '/starlight2.webp', description: 'Digital Art' },
    { id: 22, type: 'image', src: '/YE NEWS.webp', description: 'News Graphic' },
    { id: 23, type: 'image', src: '/beabadoobee.webp', description: 'Band Merchandise' },
    { id: 24, type: 'video', src: '/chocolate shuffle.mp4', description: 'Chocolate Shuffle' },
    { id: 25, type: 'image', src: '/wrangler woman.webp', description: 'Fashion Campaign' },
    { id: 26, type: 'image', src: '/daves triple.webp', description: 'Brand Campaign' },
  ]);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="h-[40vh] flex flex-col items-center justify-start text-center px-4 pt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-7xl md:text-9xl font-bold mb-4"
        >
          Taher Ksibi
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl mb-4"
        >
          Design / Marketing
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl mb-4"
        >
          Located in Toronto, ON
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          onClick={() => setShowAbout(true)}
          className="text-sm border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 mb-8"
        >
          About
        </motion.button>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex w-full justify-center"
        >
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-400 transition-colors mr-[75px]"
          >
            <FaFilePdf style={{ color: 'white' }} />
          </a>
          <a 
            href="mailto:taherksibi@gmail.com"
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
              <Image
                src={item.src}
                alt={item.description || 'Portfolio item'}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority={item.id <= 4} // Prioritize loading for first 4 images
              />
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
              <Image
                src={item.src}
                alt={item.description || 'Portfolio item'}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            )}
            {item.description && (
              <div className="portfolio-item-overlay">
                <p>{item.description}</p>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* About Modal */}
      <AnimatePresence>
        {showAbout && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="about-modal-overlay"
            onClick={() => setShowAbout(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="about-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold">About Me</h2>
                <button
                  onClick={() => setShowAbout(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <IoClose size={24} />
                </button>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I&apos;m a Toronto-based designer with 10+ years of Photoshop experience and a Bachelor&apos;s degree in Finance and Economics from the University of Toronto.
                </p>
                <p>
                  This portfolio features concept work that combines strong visual design with strategic marketing goals — reflecting my ability to think creatively with intention.
                </p>
                <p>
                  I specialize in editorial design, digital and product advertising, brand identity, and social media marketing. I bring both the creative eye and the analytical mindset — from designing bold visuals to optimizing performance across platforms like Meta (Facebook/Instagram) and TikTok.
                </p>
                <p>
                  I&apos;m passionate about creating work that not only looks sharp, but delivers real results.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Portfolio Modal */}
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
