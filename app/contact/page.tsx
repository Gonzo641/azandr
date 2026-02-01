import Copy from "@/components/Copy";
import ReactLenis from "lenis/react";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <ReactLenis root />
      <div className="flex h-svh w-full flex-col items-center justify-center gap-8 p-8">
        <Image
          src="/images/Azandr9.jpg"
          alt="Paysage en arrière-plan"
          fill
          priority
          className="-z-10 opacity-50"
          quality={75}
        />
        <Copy delay={0.5}>
          <h1>
            Contact
          </h1>
        </Copy>
        <Copy delay={0.8}>
          <Link href="mailto:azandrperso@gmail.com" className="text-2xl">
            azandrperso@gmail.com
          </Link>
        </Copy>
      </div>
    </>
  );
}