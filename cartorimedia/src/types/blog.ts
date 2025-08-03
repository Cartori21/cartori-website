export interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  readTime: string;
  date: string;
  content: BlogContent[];
  portfolio?: {
    type: 'youtube' | 'image';
    src: string;
    alt?: string;
  };
}

export interface BlogContent {
  type: 'paragraph' | 'heading' | 'list' | 'tip-box' | 'example-box' | 'warning-box' | 'quote' | 'image' | 'code';
  content: string | string[];
  level?: number; // For headings (h2, h3, etc.)
  highlights?: string[]; // Words/phrases to highlight in blue
  src?: string; // For images
  alt?: string; // For images
  language?: string; // For code blocks
}