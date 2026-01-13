import React, { useState, useRef, useEffect } from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';
import { Project } from '../types';
import { PROJECTS } from '../constants';

interface ProjectCardProps {
  project: Project;
  index: number;
  scrollProgress: MotionValue<number>;
  onSelect: (id: number) => void;
}

const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, scrollProgress, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);

  // WebAudio for subtle flip sound on hover
  const audioCtxRef = useRef<AudioContext | null>(null);
  const playingRef = useRef(false);

  const playFlipSound = () => {
    try {
      let ctx = audioCtxRef.current;
      if (!ctx) {
        ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
        audioCtxRef.current = ctx;
      }
      if (ctx.state === 'suspended') ctx.resume();
      if (playingRef.current) return;
      playingRef.current = true;

      const bufferSize = Math.floor(ctx.sampleRate * 0.18); // ~180ms noise burst
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
      }

      const src = ctx.createBufferSource();
      src.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 1200;
      filter.Q.value = 0.8;

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.0001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.18);

      src.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      src.start();
      src.stop(ctx.currentTime + 0.18);
      src.onended = () => {
        playingRef.current = false;
        try { src.disconnect(); filter.disconnect(); gain.disconnect(); } catch(_) {}
      };
    } catch (e) {
      console.warn('Play flip sound failed', e);
      playingRef.current = false;
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
        audioCtxRef.current = null;
      }
    };
  }, []);

  const total = PROJECTS.length;
  const halfTotal = total / 2; 

  const relativePosition = useTransform(scrollProgress, (v) => {
    return wrap(-halfTotal, halfTotal, index - v);
  });

  const range = [-halfTotal, -halfTotal / 2, 0, halfTotal / 2, halfTotal];
  const x = useTransform(relativePosition, range, [600, 300, 0, -300, -600]);
  const y = useTransform(relativePosition, range, [-450, -225, 0, 225, 450]);
  
  const rotateY = -35; 
  const skewY = 10;    

  const zIndexBase = useTransform(relativePosition, (v) => Math.round(5000 + v * 100));

  if (project.isIndex) {
    return (
      <motion.div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '300px',
          height: '300px',
          marginTop: '-150px',
          marginLeft: '-150px',
          zIndex: zIndexBase,
          x,
          y,
          rotateY,
          skewY,
          transformStyle: 'preserve-3d',
          pointerEvents: 'none'
        }}
      >
        <div className="relative w-full h-full drop-shadow-[20px_20px_50px_rgba(0,0,0,0.1)]">
          <div 
            className="absolute -top-16 left-0 w-fit h-16 bg-[#e5e5e5]/80 backdrop-blur-xl border border-white/40 border-b-0 flex items-center px-6"
            style={{ 
              borderTopLeftRadius: '12px', 
              borderTopRightRadius: '12px',
              boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.5)'
            }}
          >
            <span className="text-[12px] font-semibold tracking-[0.1em] text-black leading-none uppercase whitespace-nowrap">
              {project.indexLabel}
            </span>
          </div>
          
          <div 
            className="absolute inset-0 bg-[#e5e5e5]/60 backdrop-blur-xl border border-white/30 flex items-center justify-center overflow-hidden"
            style={{ 
              borderRadius: '4px',
              boxShadow: 'inset 0 0 100px rgba(0,0,0,0.02)'
            }}
          >
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#000_2px,#000_3px)]" />

            <div className="flex flex-col items-center justify-center select-none rotate-90 scale-[1.5]">
               <span className="text-8xl font-medium tracking-tight text-black/[0.04]">
                {project.indexLabel}
               </span>
            </div>

            <div className="absolute flex flex-col items-center">
               <div className="w-12 h-[1px] bg-black/10 mb-4" />
               <span className="text-[9px] font-medium tracking-[0.5em] text-black/20 uppercase">{project.indexLabel}</span>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '300px',
        height: '300px',
        marginTop: '-150px',
        marginLeft: '-150px',
        zIndex: isHovered ? 20000 : zIndexBase,
        x,
        y,
        rotateY,
        skewY,
        transformStyle: 'preserve-3d',
      }}
      className="flex items-center justify-center pointer-events-none"
    >
      <motion.div 
        className="relative w-full h-full pointer-events-auto cursor-pointer" 
        style={{ 
          transformStyle: 'preserve-3d',
          opacity: 1 
        }}
        onMouseEnter={() => { setIsHovered(true); playFlipSound(); }}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => onSelect(project.id)}
        animate={{ 
          y: isHovered ? -150 : 0, 
        }}
        transition={{ 
          type: "spring", 
          stiffness: 350, 
          damping: 35,
          mass: 0.5
        }}
      >
        <div 
          className="absolute inset-0 overflow-hidden"
          style={{ 
            transform: 'translateZ(0px)',
            maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 65%, rgba(0,0,0,0.3) 100%)',
            WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 65%, rgba(0,0,0,0.3) 100%)',
          }}
        >
          <div className="w-full h-full relative bg-white shadow-[10px_10px_40px_rgba(0,0,0,0.12)] group">
            <div className="w-full h-full overflow-hidden">
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-black/5 pointer-events-none" />
            


            <div className="absolute top-6 right-6 text-[11px] font-bold opacity-10 pointer-events-none">
              {String(project.id).padStart(2, '0')}
            </div>
          </div>
        </div>

        <div 
          className="absolute inset-0 pointer-events-none border border-white/40"
          style={{ 
            transform: 'translateZ(1px)',
            maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 70%, rgba(0,0,0,0.3) 100%)',
            WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 70%, rgba(0,0,0,0.3) 100%)',
          }}
        />
      </motion.div>
    </motion.div>
  );
};