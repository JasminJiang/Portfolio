import { Project } from './types';

/**
 * PROJECT IMAGE CONFIGURATION
 * To use your own images:
 * 1. Place your images in a folder named 'image' in the project root.
 * 2. Ensure filenames match the paths below (e.g., 'image/arch_01.jpg').
 * 3. Supported formats: .jpg, .png, .webp, etc.
 */

export interface DetailedProject extends Project {
  description?: string;
}

export const PROJECTS: DetailedProject[] = [
  { 
    id: -1, 
    title: "", 
    category: "", 
    year: "", 
    imageUrl: "", 
    isIndex: true, 
    indexLabel: "ARCHITECTURE" 
  },
  {
    id: 1,
    title: "SYMMETRY",
    category: "Architecture",
    year: "2024",
    imageUrl: "image/arch_01.jpg",
    description: "A formal exploration of balance and geometric precision in modern structural design. This project focuses on the interplay between light and rigid vertical elements."
  },
  {
    id: 2,
    title: "OBLIVION",
    category: "Experimental",
    year: "2024",
    imageUrl: "image/arch_02.jpg",
    description: "Exploring the boundaries of space and time through ephemeral structures. A visual study of how architecture can dissolve into its environment."
  },
  {
    id: 3,
    title: "VELOCITY",
    category: "Automotive",
    year: "2023",
    imageUrl: "image/arch_03.jpg",
    description: "Fluid dynamics applied to stationary forms. This installation captures the essence of movement through aerodynamic curvature."
  },
  {
    id: 4,
    title: "ELEMENTAL",
    category: "Research",
    year: "2023",
    imageUrl: "image/arch_04.jpg",
    description: "Back to basics. An investigation into raw materials—stone, wood, and steel—and their tactile relationship with the human observer."
  },
  {
    id: 5,
    title: "NEBULOUS",
    category: "Installation",
    year: "2023",
    imageUrl: "image/arch_05.jpg",
    description: "An atmospheric installation that uses mist and lighting to create ever-shifting volumes within a fixed cubic frame."
  },
  {
    id: 6,
    title: "HORIZON",
    category: "Structure",
    year: "2022",
    imageUrl: "image/arch_06.jpg",
    description: "A cantilevered observation deck designed to minimize visual impact on the landscape while providing panoramic views."
  },
  {
    id: 7,
    title: "STRUCTURE",
    category: "Studio",
    year: "2022",
    imageUrl: "image/arch_07.jpg",
    description: "The core identity of our studio. This project showcases our signature approach to modular building systems and sustainable materials."
  },
  { 
    id: -2, 
    title: "", 
    category: "", 
    year: "", 
    imageUrl: "", 
    isIndex: true, 
    indexLabel: "PHOTOGRAPHY" 
  },
  {
    id: 8,
    title: "BAMBOO PAVILION",
    category: "Atmospheric",
    year: "2024",
    imageUrl: "image/photo_01.jpg",
    description: "Capturing the filtered light through natural textures. A photographic journey through organic patterns and sustainable living spaces."
  },
  {
    id: 9,
    title: "DYNASTY SCROLL",
    category: "Historical",
    year: "2023",
    imageUrl: "image/photo_02.jpg",
    description: "A visual narrative connecting traditional craftsmanship with modern minimalist aesthetics. Reimagining heritage through a contemporary lens."
  },
  {
    id: 10,
    title: "CHROME ATELIER",
    category: "Industrial",
    year: "2024",
    imageUrl: "image/photo_03.jpg",
    description: "The beauty of industrial utility. Exploring the textures of brushed metal, concrete, and high-precision machinery."
  }
];

export const NAV_ITEMS = [
  { label: 'PROJECTS', active: true },
  { label: 'RESEARCH', active: false },
  { label: 'ABOUT ME', active: false }
];