import Container from "@/components/shared/container";
import Resume from "@/components/resume";
import Image from "next/image";
import Link from "next/link";
import Social from "@/components/social";

export default function About() {
  const paragraphs = [
    `I'm still in the process of discovering who I am and what truly excites me. I'm 21 years old, and I'm trying to explore as many things as I can — to learn, to fail, and to grow through real experiences. Among the areas that interest me, artificial intelligence stands out the most.`,
    
    `Lately, I've been practicing two types of discipline: one at the gym, the other in my mind. I work out a few times a week and read regularly to keep my thinking sharp. I value balance — between movement and rest, curiosity and structure, code and reflection.`,
    
    `I was born in Azerbaijan and currently live temporarily in Turkey. I graduated here with a degree in Electrical and Electronics Engineering.`,
    
    `Right now, I'm focused on building intelligent agents and useful tools powered by large language models. Instead of relying on ready-made frameworks, I prefer to write systems from scratch in Python — staying close to the core of the problem.`,
    
    `When I'm not coding, you'll usually find me reading, thinking, or training. I see myself as a lifelong learner — always open, always evolving.`,
    
    `This site is a small corner of the internet where I share my thoughts, projects, and progress.`,
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