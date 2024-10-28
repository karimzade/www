import type { Metadata } from "next";
import Container from "@/components/shared/container";
import Social from "@/components/social";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work",
  description: "A summary of my work and contributions.",
};

export default function Work() {
  return (
    <Container
      size="large"
      className="prose prose-zinc dark:prose-invert
      text-zinc-800 dark:text-zinc-200 container animate-enter">

      <p>
        Here&apos;s a summary of my work so far.
      </p>

      <hr className="my-6 border-neutral-200 dark:border-neutral-800" />

      <h2 className="font-medium text-xl tracking-tighter mb-0 mt-6">GrifonAI</h2>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-1">
        Machine Learning Intern, January 2024 — March 2024
      </p>
      <ul>
        <li>
        Data visualisation using Plotly, seaborn, matplotlib.
        </li>
        <li>
        Data cleaning process for tabular data.
        </li>
        <li>
          Time series modelling.
        </li>
      </ul>

    </Container>
  );
}
