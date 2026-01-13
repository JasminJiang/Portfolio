import React, { useRef, useEffect, useState } from 'react';
import { useSpring, useMotionValue, AnimatePresence, motion } from 'framer-motion';
import { PROJECTS, DetailedProject } from './constants';
import { ProjectCard } from './components/ProjectCard';
import { Navigation } from './components/UIOverlay';

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTarget = useMotionValue(0);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  
  const scrollProgress = useSpring(scrollTarget, {
    stiffness: 25,
    damping: 22,
    restDelta: 0.001
  });

  useEffect(() => {
    if (selectedId !== null) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY * 0.0025;
      const current = scrollTarget.get();
      scrollTarget.set(current + delta);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [scrollTarget, selectedId]);

  const lastTouchY = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    lastTouchY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (selectedId !== null) return;
    const delta = (lastTouchY.current - e.touches[0].clientY) * 0.008;
    lastTouchY.current = e.touches[0].clientY;
    const current = scrollTarget.get();
    scrollTarget.set(current + delta);
  };

  const selectedProject = PROJECTS.find(p => p.id === selectedId) as DetailedProject | undefined;

  // Helper to generate 8 detail image URLs for architecture projects
  // In a real app, these would come from the Project object data
  const getDetailImages = (project: DetailedProject) => {
    const images = [project.imageUrl];
    // For demonstration, we'll repeat the main image or use indexed variations
    for (let i = 1; i < 8; i++) {
      images.push(project.imageUrl);
    }
    return images;
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-screen h-screen bg-[#fcfcfc] overflow-hidden select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <Navigation />
      
      <motion.div 
        animate={{ opacity: selectedId ? 0 : 1, scale: selectedId ? 0.95 : 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 flex items-center justify-center overflow-visible pointer-events-none"
        style={{ perspective: '80000px' }} 
      >
        <div 
          className="relative w-full h-full flex items-center justify-center"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {PROJECTS.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              scrollProgress={scrollProgress}
              onSelect={setSelectedId}
            />
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedId && selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[200] bg-white overflow-y-auto"
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedId(null)}
              className="fixed top-10 right-10 px-6 py-3 border border-black/10 hover:bg-black hover:text-white transition-all duration-300 text-[10px] font-semibold tracking-[0.2em] uppercase z-[250] bg-white/80 backdrop-blur-md"
            >
              Close
            </button>

            {/* Content Container */}
            <div className="w-full">
              {/* Header / Text Section */}
              <div className="max-w-[1440px] mx-auto pt-[20vh] pb-[10vh] px-10 md:px-20">
                <div className="flex flex-col md:flex-row gap-10 md:gap-40 items-start">
                  {/* Left: Project Title */}
                  <div className="w-full md:w-1/3">
                    <motion.h1 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.8 }}
                      className="text-[11px] font-bold tracking-[0.3em] uppercase mb-4 opacity-100"
                    >
                      {selectedProject.title}
                    </motion.h1>
                    <motion.div
                       initial={{ opacity: 0, y: 20 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ delay: 0.3, duration: 0.8 }}
                       className="text-[10px] font-medium tracking-[0.1em] text-black/40 uppercase"
                    >
                      {selectedProject.category} / {selectedProject.year}
                    </motion.div>
                  </div>

                  {/* Right: Description Text */}
                  <div className="w-full md:w-1/2">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.8 }}
                      className="text-[13px] md:text-sm leading-[1.8] text-black/70 font-medium max-w-lg"
                    >
                      <p>
                        {selectedProject.description || "A visual exploration of form and materiality. This project represents a deep dive into minimalist principles and structural clarity."}
                      </p>
                      <p className="mt-4 opacity-50">
                        Designed with focus on contemporary visual language and tactile interaction.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Detail Gallery - Specialized for Architecture */}
              {selectedProject.category === 'Architecture' ? (
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full grid grid-cols-1 md:grid-cols-2 gap-0"
                >
                  {getDetailImages(selectedProject).map((imgUrl, idx) => (
                    <div key={idx} className="w-full aspect-[3/4] overflow-hidden bg-neutral-100">
                      <img 
                        src={imgUrl} 
                        alt={`${selectedProject.title} detail ${idx + 1}`} 
                        className="w-full h-full object-cover block"
                      />
                    </div>
                  ))}
                </motion.div>
              ) : (
                /* Fallback layout for other categories */
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full flex flex-col"
                >
                  <div className="w-full overflow-hidden bg-neutral-100">
                    <img 
                      src={selectedProject.imageUrl} 
                      alt={selectedProject.title} 
                      className="w-full h-auto object-cover block"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    <div className="aspect-[4/5] bg-neutral-50 overflow-hidden">
                      <img 
                        src={selectedProject.imageUrl} 
                        alt="Detail view 01" 
                        className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-700 block"
                        style={{ filter: 'grayscale(1)' }}
                      />
                    </div>
                    <div className="aspect-[4/5] bg-neutral-50 overflow-hidden">
                      <img 
                        src={selectedProject.imageUrl} 
                        alt="Detail view 02" 
                        className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-700 block"
                      />
                    </div>
                  </div>
                  <div className="w-full overflow-hidden bg-neutral-100 h-[80vh]">
                    <img 
                      src={selectedProject.imageUrl} 
                      alt="Atmospheric shot" 
                      className="w-full h-full object-cover block"
                    />
                  </div>
                </motion.div>
              )}

              {/* Detail View Footer */}
              <div className="py-40 px-10 text-center">
                 <button 
                  onClick={() => setSelectedId(null)}
                  className="text-[10px] font-bold tracking-[0.4em] uppercase hover:opacity-50 transition-opacity underline underline-offset-8 decoration-black/10"
                 >
                   Back
                 </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.01)_100%)] pointer-events-none" />
    </div>
  );
};

export default App;