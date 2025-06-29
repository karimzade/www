import { ISVGProps } from "@/types";
import Image from "next/image";

export default function IconUpwork({ size = 24, ...props }: ISVGProps) {
  return (
    <Image
      src="/upwork.png"
      alt="Upwork"
      width={size}
      height={size}
      priority={true}
    />
  );
}
