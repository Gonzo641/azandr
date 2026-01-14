import Copy from "@/components/Copy";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex h-svh w-full p-8">
      <Image
        src="/images/Azandr7.jpg"
        alt="Paysage en arrière-plan"
        fill
        priority
        className="-z-10 opacity-80"
        quality={75}
      />
      <div className="mt-112.5">
        <Copy delay={0.6}>
          <h1>
            AZANDR
          </h1>
        </Copy>
      </div>
    </div>
  );
}
