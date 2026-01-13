import { Project } from './types';

export interface DetailedProject extends Project {
  description?: string;
  detailImages?: string[];
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
    title: "Editorial - Sculpting the Silence",
    category: "Architecture",
    year: "2024",
    imageUrl: "/image/arch_01.jpg",
    detailImages: [
      "/image/image_detail/1/240926_创作_秋冬06074.jpg",
      "/image/image_detail/1/240926_创作_秋冬06086.jpg",
      "/image/image_detail/1/240926_创作_秋冬06125.jpg",
      "/image/image_detail/1/240926_创作_秋冬06171.jpg"
    ],
    description: ""
  },
  {
    id: 2,
    title: "Editorial - Oceanic Echoes",
    category: "Architecture",
    year: "2025",
    imageUrl: "/image/arch_02.jpg",
    detailImages: [
      "/image/image_detail/2/240926_创作_饰品00055.jpg",
      "/image/image_detail/2/240926_创作_饰品00176.jpg",
      "/image/image_detail/2/240926_创作_饰品00249.jpg",
      "/image/image_detail/2/240926_创作_饰品00308.jpg",
      "/image/image_detail/2/240926_创作_饰品00446.jpg",
      "/image/image_detail/2/240926_创作_饰品00468.jpg",
      "/image/image_detail/2/240926_创作_饰品00495.jpg",
      "/image/image_detail/2/240926_创作_饰品01550.jpg"
    ],
    description: ""
  },
  {
    id: 3,
    title: "ASSIGNMENTS 24AW Runway",
    category: "Architecture",
    year: "2024",
    imageUrl: "/image/arch_03.jpg",
    detailImages: [
      "/image/image_detail/3/DSC00445.jpg",
      "/image/image_detail/3/DSC00452.jpg",
      "/image/image_detail/3/DSC00510.jpg",
      "/image/image_detail/3/DSC00615.jpg",
      "/image/image_detail/3/DSC00639.jpg",
      "/image/image_detail/3/DSC00880.jpg",
      "/image/image_detail/3/DSC00938.jpg",
      "/image/image_detail/3/DSC01035.jpg"
    ],
    description: ""
  },
  {
    id: 4,
    title: "Tension Archive 24SS Runway",
    category: "Architecture",
    year: "2024",
    imageUrl: "/image/arch_04.jpg",
    detailImages: [
      "/image/image_detail/4/DSC04807.jpg",
      "/image/image_detail/4/DSC04886.jpg",
      "/image/image_detail/4/DSC04975.jpg",
      "/image/image_detail/4/DSC05250.jpg",
      "/image/image_detail/4/DSC05255.jpg",
      "/image/image_detail/4/DSC05336.jpg",
      "/image/image_detail/4/DSC05348.jpg",
      "/image/image_detail/4/DSC05367.jpg"
    ],
    description: "Back to basics. An investigation into raw materials—stone, wood, and steel—and their tactile relationship with the human observer."
  },
  {
    id: 5,
    title: "EXCEPTION 24AW Runway",
    category: "Architecture",
    year: "2024",
    imageUrl: "/image/arch_05.jpg",
    detailImages: [
      "/image/image_detail/5/DSC07034.jpg",
      "/image/image_detail/5/DSC07222.jpg",
      "/image/image_detail/5/DSC07271-已增强-降噪.jpg",
      "/image/image_detail/5/DSC07342.jpg",
      "/image/image_detail/5/DSC07383-已增强-降噪.jpg",
      "/image/image_detail/5/DSC07409-已增强-降噪.jpg",
      "/image/image_detail/5/DSC07422-已增强-降噪.jpg",
      "/image/image_detail/5/DSC07461-已增强-降噪.jpg"
    ],
    description: ""
  },
  {
    id: 6,
    title: "ASSIGNMENTS 24SS Runway",
    category: "Architecture",
    year: "2024",
    imageUrl: "/image/arch_06.jpg",
    detailImages: [
      "/image/image_detail/6/DSC08928.jpg",
      "/image/image_detail/6/DSC09052.jpg",
      "/image/image_detail/6/DSC09119.jpg",
      "/image/image_detail/6/DSC09205.jpg",
      "/image/image_detail/6/DSC09278.jpg",
      "/image/image_detail/6/DSC09330.jpg",
      "/image/image_detail/6/DSC09371.jpg",
      "/image/image_detail/6/DSC09668.jpg"
    ],
    description: "A cantilevered observation deck designed to minimize visual impact on the landscape while providing panoramic views."
  },
  {
    id: 7,
    title: "Pretty Together 25SS Campaign ",
    category: "Architecture",
    year: "2025",
    imageUrl: "/image/arch_07.jpg",
    detailImages: [
      "/image/image_detail/7/240723_商业_饰品03918.jpg",
      "/image/image_detail/7/240723_商业_饰品04016.jpg",
      "/image/image_detail/7/240723_商业_饰品04205.jpg",
      "/image/image_detail/7/240723_商业_饰品04256.jpg",
      "/image/image_detail/7/240723_商业_饰品04262.jpg",
      "/image/image_detail/7/240723_商业_饰品04468.jpg",
      "/image/image_detail/7/240723_商业_饰品04483.jpg",
      "/image/image_detail/7/DSC04286.jpg"
    ],
    description: ""
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
    id: 10,
    title: "Contemporary Intervention",
    category: "Photography",
    year: "2024",
    imageUrl: "/image/photo_03.jpg",
    detailImages: [
      "/image/image_detail/10/1.jpg",
      "/image/image_detail/10/2.jpg",
      "/image/image_detail/10/3.jpg",
      "/image/image_detail/10/4.png",
      "/image/image_detail/10/5.png",
      "/image/image_detail/10/6.jpg",
      "/image/image_detail/10/7.jpg",
      "/image/image_detail/10/8.jpg",
      "/image/image_detail/10/9.jpg",
      "/image/image_detail/10/10.jpg",
      "/image/image_detail/10/11.jpg"
    ],
    description: "This project introduces a lightweight, modular steel framework into a traditional timber structure to create a multi-functional retail and exhibition space. By contrasting industrial teal-colored steel with historic wood, the design achieves a visual dialogue between past and present, while providing a flexible infrastructure for fine goods display and community interaction."
  },

  {
    id: 9,
    title: "Floating Scroll",
    category: "Photography",
    year: "2023",
    imageUrl: "/image/photo_02.jpg",
    detailImages: [
      "/image/image_detail/9/Portfolio_Xinjie_Jiang-1.jpg",
      "/image/image_detail/9/Portfolio_Xinjie_Jiang-2.jpg",
      "/image/image_detail/9/Portfolio_Xinjie_Jiang-3.jpg",
      "/image/image_detail/9/Portfolio_Xinjie_Jiang-4.jpg",
      "/image/image_detail/9/Portfolio_Xinjie_Jiang-5.jpg",
      "/image/image_detail/9/Portfolio_Xinjie_Jiang-6.jpg"
    ],
    description: "A modular floating architectural system inspired by traditional Chinese landscape scrolls. The project modernizes Suzhou’s waterborne heritage, creating a dynamic, mobile public space that re-establishes the connection between the historic city fabric and its waterways."
  },

  {
    id: 8,
    title: "Expressions of the Earth",
    category: "Photography",
    year: "2024",
    imageUrl: "/image/photo_01.jpg",
    detailImages: [
      "/image/image_detail/8/1.png",
      "/image/image_detail/8/2.png",
      "/image/image_detail/8/3.png",
      "/image/image_detail/8/4.png",
      "/image/image_detail/8/5.png"
    ],
    description: "An interactive installation that translates wind patterns into a visual light scape. By integrating Arduino-controlled sensors with a modular bamboo structure, the pavilion creates a poetic dialogue between natural forces and human-made space."
  }
];

export const NAV_ITEMS = [
  { label: 'PROJECTS', active: true },
  { label: 'RESEARCH', active: false },
  { label: 'ABOUT ME', active: false }
];