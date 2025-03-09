export type BlogPost = {
  id: string;
  title: string;
  brief: string;
  slug: string;
  coverImage: string;
  dateAdded: string;
  readTime: string;
  tags: string[];
};

export type BlogCategory = 'interview-tips' | 'cv-optimization' | 'productivity';

export type BlogTag = {
  name: string;
  slug: string;
  count: number;
}; 