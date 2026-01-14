import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="flex h-svh w-full flex-col items-center justify-center gap-8 p-8">
      <Image
        src="/images/Azandr9.jpg"
        alt="Paysage en arrière-plan"
        fill
        priority
        className="-z-10 opacity-50"
        quality={75}
      />
      <h1>Contact</h1>
      <a href="mailto:contact@silhouette.dev" className="text-2xl">
        contact@bmlc.com
      </a>
    </div>
  );
}