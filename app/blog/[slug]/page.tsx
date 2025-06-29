import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import Container from "@/components/shared/container";
import { getBlogPosts } from "@/app/db/blog";
import { CustomMDX } from "@/components/mdx";
import { formatDate } from "@/lib/utils";
import Claps from "@/components/claps";

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  let blog = getBlogPosts().find((blog) => blog.slug === params.slug);
  if (!blog) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
  } = blog.metadata;
  let ogImage = `https://karimzade.vercel.app/logo.png`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://karimzade.vercel.app/blog/${blog.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "player",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function BlogDetailPage({ params }) {
  const blog = getBlogPosts().find((blog) => blog.slug === params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <Container size="medium">
      <div className="mx-auto px-2 sm:px-6 lg:px-8 w-full sm:max-w-screen-lg">

        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: blog.metadata.title,
              datePublished: blog.metadata.publishedAt,
              dateModified: blog.metadata.publishedAt,
              description: blog.metadata.summary,
              image: blog.metadata.image
                ? `https://karimzade.vercel.app${blog.metadata.image}`
                : `https://karimzade.vercel.app/og?title=${blog.metadata.title}`,
              url: `https://karimzade.vercel.app/blog/${blog.slug}`,
              author: {
                "@type": "Person",
                name: "Muhammed Kerimzade",
              },
            }),
          }}
        />

        <h1 className="title font-medium text-xl tracking-tighter max-w-[650px]">
          {blog.metadata.title}
        </h1>


        {/* <div className="flex justify-start items-center mt-2 mb-8 text-sm max-w-[650px]">
          <Suspense fallback={<p className="h-5" />}>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {formatDate(blog.metadata.publishedAt)}
            </p>
            <span className="mx-2 text-neutral-400">—</span>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {blog.readingTime} min read
            </p>
          </Suspense>
        </div> */}


        <article className="prose prose-quoteless prose-neutral dark:prose-invert text-justify w-auto">
          <CustomMDX source={blog.content} />
        </article>


        {/* <Claps /> */}
      </div>
    </Container>
  );
}
