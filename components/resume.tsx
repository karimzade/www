import { SocialButtonProps } from "@/types";
import IconArrowRightUp from "./shared/icons/arrow-right-up";
import IconYoutube from "./shared/icons/youtube";
import IconMail from "./shared/icons/mail";
import IconLinkedin from "./shared/icons/linkedin";
import IconX from "./shared/icons/twitter";
import IconGithub from "./shared/icons/github";
import IconKaggle from "./shared/icons/kaggle";
import IconCV from "./shared/icons/cv";
import Link from "next/link";

function ResumeButton({ href, children }: SocialButtonProps) {
  return (
    <Link
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      passHref
      className="flex flex-col w-full max-w-[200px] mx-auto border border-neutral-400 dark:border-neutral-600 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:border-neutral-900 dark:hover:border-neutral-400 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
    >
      {children}
    </Link>
  );
}

export default function Resume() {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:gap-2">

      <ResumeButton href="/KarimzadeMahammadCV.pdf">
        <div className="flex flex-row items-center">
          <span className="ml-0 font-normal">DOWNLOAD CV</span>
        </div>
      </ResumeButton>

    </div>
  );
}


