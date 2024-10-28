import { ISVGProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function IconHF({ size = 16, ...props }: ISVGProps) {
  return (
    <Link href="/">
      <Image
        src="/hf-lg.png"
        alt="Logo"
        width={size}
        height={size}
        priority={true}
      />
    </Link>
  );
}
