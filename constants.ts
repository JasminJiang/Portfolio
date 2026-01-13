import { Project } from './types';

export interface DetailedProject extends Project {
  description?: string;
  detailImages?: string[];
}

// 辅助函数：生成随机占位图
const getImg = (id: number, w: number = 800, h: number = 800) => `https://picsum.photos/seed/unveil-${id}/${w}/${h}`;

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
    imageUrl: getImg(1),
    description: "A formal exploration of balance and geometric precision in modern structural design. This project focuses on the interplay between light and rigid vertical elements."
  },
  {
    id: 2,
    title: "OBLIVION",
    category: "Architecture",
    year: "2024",
    imageUrl: getImg(2),
    description: "Exploring the boundaries of space and time through ephemeral structures. A visual study of how architecture can dissolve into its environment."
  },
  {
    id: 3,
    title: "VELOCITY",
    category: "Architecture",
    year: "2023",
    imageUrl: getImg(3),
    description: "Fluid dynamics applied to stationary forms. This installation captures the essence of movement through aerodynamic curvature."
  },
  {
    id: 4,
    title: "ELEMENTAL",
    category: "Architecture",
    year: "2023",
    imageUrl: getImg(4),
    description: "Back to basics. An investigation into raw materials—stone, wood, and steel—and their tactile relationship with the human observer."
  },
  {
    id: 5,
    title: "NEBULOUS",
    category: "Architecture",
    year: "2023",
    imageUrl: getImg(5),
    description: "An atmospheric installation that uses mist and lighting to create ever-shifting volumes within a fixed cubic frame."
  },
  {
    id: 6,
    title: "HORIZON",
    category: "Architecture",
    year: "2022",
    imageUrl: getImg(6),
    description: "A cantilevered observation deck designed to minimize visual impact on the landscape while providing panoramic views."
  },
  {
    id: 7,
    title: "STRUCTURE",
    category: "Architecture",
    year: "2022",
    imageUrl: getImg(7),
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
    category: "Photography",
    year: "2024",
    imageUrl: getImg(8),
    description: "Capturing the filtered light through natural textures. A photographic journey through organic patterns and sustainable living spaces."
  },
  {
    id: 9,
    title: "DYNASTY SCROLL",
    category: "Photography",
    year: "2023",
    imageUrl: getImg(9),
    description: "A visual narrative connecting traditional craftsmanship with modern minimalist aesthetics. Reimagining heritage through a contemporary lens."
  },
  {
    id: 10,
    title: "CHROME ATELIER",
    category: "Photography",
    year: "2024",
    imageUrl: getImg(10),
    description: "The beauty of industrial utility. Exploring the textures of brushed metal, concrete, and high-precision machinery."
  }
];

export const NAV_ITEMS = [
  { label: 'PROJECTS', active: true },
  { label: 'RESEARCH', active: false },
  { label: 'ABOUT ME', active: false }
];