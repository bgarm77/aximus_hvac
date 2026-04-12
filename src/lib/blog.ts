import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

export interface BlogFrontmatter {
  title: string;
  description: string;
  date: string;
  author?: string;
  keywords?: string[];
  ogImage?: string;
  faqs?: { q: string; a: string }[];
}

export interface BlogPostMeta extends BlogFrontmatter {
  slug: string;
  readingMinutes: number;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");

function readDirSafe(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));
}

export function getAllPosts(): BlogPostMeta[] {
  return readDirSafe()
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, "");
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
      const { data, content } = matter(raw);
      const fm = data as BlogFrontmatter;
      return {
        slug,
        title: fm.title,
        description: fm.description,
        date: fm.date,
        author: fm.author ?? "Aximus HVAC Team",
        keywords: fm.keywords,
        ogImage: fm.ogImage,
        faqs: fm.faqs,
        readingMinutes: Math.max(1, Math.round(readingTime(content).minutes)),
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const candidates = [
    path.join(BLOG_DIR, `${slug}.mdx`),
    path.join(BLOG_DIR, `${slug}.md`),
  ];
  const file = candidates.find((p) => fs.existsSync(p));
  if (!file) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  const fm = data as BlogFrontmatter;
  return {
    slug,
    title: fm.title,
    description: fm.description,
    date: fm.date,
    author: fm.author ?? "Aximus HVAC Team",
    keywords: fm.keywords,
    ogImage: fm.ogImage,
    faqs: fm.faqs,
    readingMinutes: Math.max(1, Math.round(readingTime(content).minutes)),
    content,
  };
}

export function getAllSlugs(): string[] {
  return readDirSafe().map((f) => f.replace(/\.mdx?$/, ""));
}

export function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
