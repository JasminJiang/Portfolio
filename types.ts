
export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  imageUrl: string;
  isEmpty?: boolean;
  isIndex?: boolean;
  indexLabel?: string;
}

export interface NavItem {
  label: string;
  active?: boolean;
}
