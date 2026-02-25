"use client";

import Copy from "@/components/Copy";
import RevealList from "@/components/RevealList";
import Spotlight from "@/components/Spotlight/Spotlight";
import ReactLenis from "lenis/react";
import Image from "next/image";
import { SiSoundcloud, SiBeatport, SiInstagram, SiFacebook, SiSpotify } from "react-icons/si";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomEase from "gsap/CustomEase";
import { useGSAP } from "@gsap/react";
import "./preloader.css";

let isInitialLoad = true;

gsap.registerPlugin(ScrollTrigger, CustomEase);
CustomEase.create("hop", "0.9, 0, 0.1, 1");

export default function Home() {
  const lenisRef = useRef<any>(null);
  const [showPreloader, setShowPreloader] = useState<boolean>(isInitialLoad);
  const [loaderAnimating, setLoaderAnimating] = useState<boolean>(false);

  // À la sortie de la page → désactive le preloader pour les prochaines navigations
  useEffect(() => {
    return () => {
      isInitialLoad = false;
    };
  }, []);

  // Stop/Start Lenis selon état du preloader
  useEffect(() => {
    if (lenisRef.current?.lenis) {
      const lenis = lenisRef.current.lenis;
      if (loaderAnimating) {
        lenis.stop();
      } else {
        lenis.start();
      }
    }
  }, [loaderAnimating]);

  // Animation du preloader
  useGSAP(() => {
    const tl = gsap.timeline({
      delay: 0.3,
      defaults: { ease: "hop" },
    });

    if (showPreloader) {
      setLoaderAnimating(true);
      const counts = document.querySelectorAll(".count");
      
      // Configuration du timing (en secondes)
      const stepDuration = 1.5; // Intervalle entre chaque phrase (plus grand = plus lent)
      const exitDelay = 1.5;    // Délai avant que la phrase ne remonte

      counts.forEach((count, index) => {
        const digits = count.querySelectorAll(".digit h1");

        tl.to(
          digits,
          { y: "0%", duration: 1, stagger: 0.075 },
          index * stepDuration
        );

        if (index < counts.length) {
          tl.to(
            digits,
            { y: "-120%", duration: 1, stagger: 0.075 },
            index * stepDuration + exitDelay
          );
        }
      });

      tl.to(".spinner", { opacity: 0, duration: 0.3 });

      tl.to(".word h1", { y: "0%", duration: 1 }, "<");

      tl.to(".divider", {
        scaleY: "100%",
        duration: 1,
        onComplete: () => {
          gsap.to(".divider", { opacity: 0, duration: 0.3, delay: 0.3 });
        },
      });

      tl.to("#word-1 h1", { y: "100%", duration: 1, delay: 0.3 });
      tl.to("#word-2 h1", { y: "-100%", duration: 1 }, "<");

      tl.to(
        ".loader-block",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 1,
          stagger: 0.1,
          delay: 0.75,
          onStart: () => {
            gsap.to(".hero-img", { scale: 1, duration: 2, ease: "hop" });
          },
          onComplete: () => {
            gsap.set(".loader", { pointerEvents: "none" });
            setLoaderAnimating(false);
            setShowPreloader(false);
          },
        },
        "<"
      );
    }
  }, [showPreloader]);

  return (
    <>
      <ReactLenis root ref={lenisRef} />
      
      {/* Preloader */}
      {showPreloader && (
        <div className="loader text-[#e3e4d8]">
          <div className="overlay">
            <div className="loader-block"></div>
            <div className="loader-block"></div>
          </div>
          <div className="intro-logo">
            <div className="word" id="word-1">
              <h1>
                <span>Azandr</span>
              </h1>
            </div>
            <div className="word" id="word-2">
              <h1>Music</h1>
            </div>
          </div>
          <div className="divider"></div>
          <div className="spinner-container">
            <div className="spinner"></div>
          </div>
          <div className="counter">
            <div className="count">
              <div className="digit"><h1>You think it&apos;s a Drop ?</h1></div>
            </div>
            <div className="count">
              <div className="digit"><h1>You think it&apos;s a Moment ?</h1></div>
            </div>
            <div className="count">
              <div className="digit"><h1>Ahahaha</h1></div>
            </div>
            <div className="count">
              <div className="digit"><h1>This is not a Drop</h1></div>
            </div>
            <div className="count">
              <div className="digit"><h1>This is a Statement</h1></div>
            </div>
          </div>
        </div>
      )}

      <div className="relative flex flex-col md:flex-row h-svh w-full p-8 gap-4">
        <Image
          src="/images/Azandr7.jpg"
          alt="Paysage en arrière-plan"
          fill
          priority
          className="-z-10 opacity-90 hero-img object-cover"
          quality={75}
        />
        <div className="flex items-end h-full">
          <div className="overflow-hidden">
            <Copy key={showPreloader ? "loading-copy" : "loaded-copy"} delay={showPreloader ? 100 : 0.05} animateOnScroll={false}>
              <Image
                src="/images/Logo_Azandr_blanc.png"
                alt="Azandr Logo"
                width={1400}
                height={40}
                priority
              />
            </Copy>
          </div>
        </div>

        <RevealList key={showPreloader ? "loading-list" : "loaded-list"} className="flex justify-end items-end w-full gap-3.5" delay={showPreloader ? 100 : 0.05} interval={0.1}>
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
