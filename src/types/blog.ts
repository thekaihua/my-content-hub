// Generic blog post interface that works across all CMS platforms
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content?: string; // HTML content for individual post pages
  publishedAt: string; // ISO date string
  featuredImage?: string;
  featuredImageAlt?: string;
  tags?: string[];
  author?: {
    name: string;
    avatar?: string;
  };
}

// For blog listing pages - minimal data needed
export interface BlogPostPreview extends Omit<BlogPost, 'content'> {}

// CMS-specific adapters should transform their data to match these interfaces