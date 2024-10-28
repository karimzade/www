// import { SocialButtonProps } from "@/types";
// import IconArrowRightUp from "./shared/icons/arrow-right-up";
// import IconYoutube from "./shared/icons/youtube";
// import IconMail from "./shared/icons/mail";
// import IconLinkedin from "./shared/icons/linkedin";
// import IconX from "./shared/icons/twitter";
// import IconGithub from "./shared/icons/github";
// import IconKaggle from "./shared/icons/kaggle";
// import IconCV from "./shared/icons/cv";

// import Link from "next/link";

// function SocialButton({ href, children }: SocialButtonProps) {
//   return (
//     <Link
//       href={href}
//       rel="noopener noreferrer"
//       target="_blank"
//       passHref
//       className="font-normal flex items-center  justify-center p-2 no-underline transition-all
//       text-neutral-950 hover:text-neutral-500 dark:text-neutral-100 dark:hover:text-neutral-500"
//     >
//       {children}
//     </Link>
//   );
// }



// export default function Social() {
//   return (

//     <div className="items-center flex flex-row gap-6 md:flex-row md:gap-4 underline underline-offset-4 decoration-1 decoration-zinc-300 ">

//       <SocialButton href="https://x.com/karimzzde">
//         <div className="flex flex-col items-center">
//           <IconX />
//           <span>X</span>
//         </div>
//       </SocialButton>

//       <SocialButton href="https://linkedin.com/in/karimzade">
//         <div className="flex flex-col items-center">
//           <IconLinkedin />
//           <span>LinkedIn</span>
//         </div>
//       </SocialButton>


//       <SocialButton href="https://github.com/karimzade">
//         <div className="flex flex-col items-center">
//           <IconGithub />
//           <span>GitHub</span>
//         </div>
//       </SocialButton>

//       <SocialButton href="https://kaggle.com/karimzade">
//         <div className="flex flex-col items-center">
//           <IconKaggle />
//           <span>Kaggle</span>
//         </div>
//       </SocialButton>

//       <SocialButton href="https://huggingface.co/karimzade">
//         <div className="flex flex-col items-center">
//           <IconHuggingFace />
//           <span>HuggingFace</span>
//         </div>
//       </SocialButton>


//       <SocialButton href="https://youtube.com/@karimzade">
//         <div className="flex flex-col items-center">
//           <IconYoutube />
//           <span>YouTube</span>
//         </div>
//       </SocialButton>

//       <SocialButton href="mailto:mahammadkarimzade@gmail.com">
//         <div className="flex flex-row items-center">
//           <IconMail />
//           <span className="ml-0">Mail</span>
//         </div>
//       </SocialButton>

//     </div>
//   );
// }



import { SocialButtonProps } from "@/types";
import IconArrowRightUp from "./shared/icons/arrow-right-up";
import IconGithub from "./shared/icons/github";
import IconCv from "./shared/icons/cv";
import IconHF from "./shared/icons/hf";
import IconMail from "./shared/icons/mail";
import IconLinkedin from "./shared/icons/linkedin";
import IconX from "./shared/icons/twitter";
import IconKaggle from "./shared/icons/kaggle";

import Link from "next/link";

function SocialButton({ href, children }: SocialButtonProps) {
  return (
    <Link
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      passHref
      className="flex font-normal w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
    >
      {children}
      <IconArrowRightUp />
    </Link>
  );
}

export default function Social() {
  return (
    <div className="flex flex-col gap-2 md:flex-row mt-10 mb-10 md:gap-2">

      {/* <SocialButton href="https://github.com/karimzade">
        <div className="flex flex-row items-center">
          <IconGithub />
          <span className="ml-3">Github</span>
        </div>
      </SocialButton>
      <SocialButton href="/MuhammedKerimzadeCV.pdf">
        <div className="flex flex-row items-center">
          <IconCv />
          <span className="ml-3">Read CV</span>
        </div>
      </SocialButton>
      <SocialButton href="mailto:mahammadkarimzade@gmail.com">
        <div className="flex flex-row items-center">
          <IconMail />
          <span className="ml-3">Mail</span>
        </div>
      </SocialButton> */}


      <SocialButton href="https://kaggle.com/karimzade">
        <div className="flex flex-row items-center">
          <IconKaggle />
          <span className="ml-3">Kaggle</span>
        </div>
      </SocialButton>
      <SocialButton href="https://github.com/karimzade">
        <div className="flex flex-row items-center">
          <IconGithub/>
          <span className="ml-3">Github</span>
        </div>
      </SocialButton>
      {/* <SocialButton href="https://huggingface.co/karimzade">
        <div className="flex flex-row items-center">
          <IconHF />
          <span className="ml-3">HuggingFace</span>
        </div>
      </SocialButton> */}
      <SocialButton href="https://linkedin.com/in/karimzade">
        <div className="flex flex-row items-center">
          <IconLinkedin />
          <span className="ml-3">Linkedin</span>
        </div>
      </SocialButton>


    </div>
  );
}