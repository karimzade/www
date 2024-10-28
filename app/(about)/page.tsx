import Container from "@/components/shared/container";
import Resume from "@/components/resume";
import Image from "next/image";
import Link from "next/link";
import Social from "@/components/social";



export default function About() {
  const paragraphs = [
    // `Hi 👋 I am a machine learning engineer based in Ankara, currently working on Next.js, 
    // v0, and various other projects at Vercel.`,
    `Freshly graduated rookie AI engineer who works, reads, and lifts.`,
    ``
  ];

  return (
    <Container
      size="large"
      className="prose prose-zinc dark:prose-invert
      text-zinc-800 dark:text-zinc-200 container animate-enter"
    >

      <div className="flex flex-col items-center">
        {/* <div className="flex flex-col mr-4">
          <span className="text-medium inline-block font-medium">
            Muhammed Kerimzade
          </span>
          <span className="opacity-60"> machine learning engineer</span>
        </div> */}

        {/* <Link href="/">
          <Image
            src="/me-modified.png"
            alt="Logo"
            width={130}
            height={130}
            priority={true}
          />
        </Link> */}

      </div>

      {/* <div  className="flex flex-col">
        <span className="text-medium inline-block font-medium">
          Muhammed Kerimzade
        </span>
        <span className="opacity-60"> machine learning engineer</span>
      </div> */}


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

      {/* <hr className="mt-0"/> */}

      {/* <div className="mb-10">
        <span className="text-gray-1100 font-normal">
          You can review my&nbsp;
          <a className="font-normal" href="/MuhammedKarimzadeCV.pdf" target="_blank" rel="noopener noreferrer">
            CV
          </a>
          &nbsp;and also contact me via&nbsp;
          <a className="font-normal" href="mailto:mahammadkarimzade@gmail.com" target="_blank" rel="noopener noreferrer">
            mail
          </a>.
        </span>
      </div> */}



      {/* <div className="mt-10 mb-10">
      <Resume/>
      </div> */}

      <Social />

    </Container>
  );
}