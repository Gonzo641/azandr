import Copy from "@/components/Copy";
import RevealList from "@/components/RevealList";
import Spotlight from "@/components/Spotlight/Spotlight";
import ReactLenis from "lenis/react";
import Image from "next/image";
import { SiSoundcloud, SiBeatport, SiInstagram, SiFacebook, SiSpotify } from "react-icons/si";

export default function Home() {
  return (
    <>
      <ReactLenis root />
      <div className="relative flex flex-col md:flex-row h-svh w-full p-8 gap-4">
        <Image
          src="/images/Azandr7.jpg"
          alt="Paysage en arrière-plan"
          fill
          priority
          className="-z-10 opacity-90"
          quality={75}
        />
        <div className="flex items-end h-full">
          <Copy delay={0.6}>
            <h1 className="text-8xl lg:text-[12rem]">
              AZANDR
            </h1>
          </Copy>
        </div>

        <RevealList className="flex justify-end items-end w-full gap-3.5" delay={1} interval={0.1}>
          <a href="https://www.facebook.com/4zandr" target="_blank" rel="noreferrer" className="group">
            <SiFacebook size={30} className="transition-transform duration-300 group-hover:scale-125"/>
          </a>
          <a href="https://www.instagram.com/azandr.music/" target="_blank" rel="noreferrer" className="group">
            <SiInstagram size={30} className="transition-transform duration-300 group-hover:scale-125"/>
          </a>
          <a href="https://soundcloud.com/azandr" target="_blank" rel="noreferrer" className="group">
            <SiSoundcloud size={30} className="transition-transform duration-300 group-hover:scale-125"/>
          </a>
          <a href="https://www.beatport.com/fr/artist/azandr/1174499" target="_blank" rel="noreferrer" className="group">
            <SiBeatport size={30} className="transition-transform duration-300 group-hover:scale-125"/>
          </a>
          <a href="https://open.spotify.com/intl-fr/artist/6vojifGZRH5QqYDsIaraRm" target="_blank" rel="noreferrer" className="group">
            <SiSpotify size={30} className="transition-transform duration-300 group-hover:scale-125"/>
          </a>
        </RevealList>
      </div>
      <Spotlight />
    </>
  );
};
