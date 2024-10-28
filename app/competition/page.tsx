import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/container";

export const metadata: Metadata = {
  title: "Competition",
  description: "Competition.",
};

const posts = [
  {
    title: "Datathon 2024",
    rank: "48th / 364 (Top \%13)",
    detail: "Sep 2024 · Kaggle",
    link: "https://www.kaggle.com/competitions/datathon-2024/leaderboard",
  },
];

export default function Competition() {
  return (
    <Container size="large">
      {posts.map((post, index) => (
        <div key={index}>
          <article className="py-8 sm:py-8 dark:border-b-zinc-800">
            <header>
              <h3 className="font-semibold underline underline-offset-4 decoration-1 decoration-zinc-300">
                <Link href={post.link} target="_blank" rel="noopener noreferrer">
                  {post.title}
                </Link>
              </h3>
              <p className="mt-1 opacity-75 dark:opacity-65">
                {post.rank}
              </p>
            </header>
            <footer className="mt-1 flex items-center space-x-2 font-mono text-sm uppercase tracking-wider opacity-60 dark:opacity-50">
              <span>{post.detail}</span>
            </footer>
          </article>
        </div>
      ))}
    </Container>
  );
}


