import { getBlogPosts } from "app/db/blog";

export default async function sitemap() {
  let blogs = getBlogPosts().map((blog) => ({
    url: `https://karimzade.vercel.app/blog/${blog.slug}`,
    lastModified: blog.metadata.publishedAt,
  }));

  let routes = ["", "/blog", "/about"].map((route) => ({
    url: `https://karimzade.vercel.app${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
