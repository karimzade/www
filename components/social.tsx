import { SocialButtonProps } from "@/types";
import IconArrowRightUp from "./shared/icons/arrow-right-up";
import IconGithub from "./shared/icons/github";
import IconCv from "./shared/icons/cv";
import IconHF from "./shared/icons/hf";
import IconMail from "./shared/icons/mail";
import IconLinkedin from "./shared/icons/linkedin";
import IconX from "./shared/icons/twitter";
import IconKaggle from "./shared/icons/kaggle";
import dynamic from 'next/dynamic';

const IconUpwork = dynamic(() => import('./shared/icons/upwork'), { ssr: false });

import Link from "next/link";

function SocialButton({ href, children }: SocialButtonProps) {
  return (
    <Link
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      passHref
      className="flex font-normal w-[200px] border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
    >
      {children}
      <IconArrowRightUp />
    </Link>
  );
}

export default function Social() {
  return (
    <div className="flex flex-col gap-4 items-center">      
      <div className="flex flex-col md:flex-row gap-4 justify-center">

      <SocialButton href="https://linkedin.com/in/karimzade">
          <div className="flex flex-row items-center">
            <IconLinkedin/>
            <span className="ml-3">LinkedIn</span>
          </div>
        </SocialButton>

        <SocialButton href="https://github.com/karimzade">
          <div className="flex flex-row items-center">
            <IconGithub/>
            <span className="ml-3">Github</span>
          </div>
        </SocialButton>

        <SocialButton href="https://www.upwork.com/freelancers/~0188938593154dc17c">
          <div className="flex flex-row items-center">
            <IconUpwork />
            <span className="ml-3">Upwork</span>
          </div>
        </SocialButton>
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <SocialButton href="mailto:mahammadkarimzade@gmail.com">
          <div className="flex flex-row items-center">
            <IconMail />
            <span className="ml-3">Mail</span>
          </div>
        </SocialButton>

        <SocialButton href="/KarimzadeMahammadCV.pdf">
          <div className="flex flex-row items-center">
            <IconCv />
            <span className="ml-3">Resume</span>
          </div>
        </SocialButton>

      </div>

    </div>
  );
}