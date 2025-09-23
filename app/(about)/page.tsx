import Container from "@/components/shared/container";
import Resume from "@/components/resume";
import Image from "next/image";
import Link from "next/link";
import Social from "@/components/social";

export default function About() {
  const paragraphs = [

    `Hi, I’m a 22-year-old AI engineer from Azerbaijan 🇦🇿 — building interactive AI systems and chasing dreams.`,
    ``
  ];

  return (
    <Container
      size="large"
      className="prose prose-zinc dark:prose-invert
      text-zinc-800 dark:text-zinc-200 container animate-enter"
    >

      {paragraphs.map((paragraph, index) => (
        <div
          key={paragraph}
          style={
            { "--stagger": index } as React.CSSProperties & {
              [key: string]: number;
            }
          }
        >
          <p className={index === paragraphs.length - 1 ? "mb-0 mt-10" : ""}>
            {paragraph}
          </p>
          {/* {index === 1 && <hr /> } */}
        </div>
      ))}


      <Social />

    </Container>
  );
}