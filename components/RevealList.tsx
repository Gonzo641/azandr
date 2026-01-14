"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RevealListProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  interval?: number;
  animateOnScroll?: boolean;
}

export default function RevealList({
  children,
  className = "",
  delay = 0,
  interval = 0.1,
  animateOnScroll = true,
}: RevealListProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // On cible les enfants directs du conteneur (les balises <a> dans votre cas)
      const elements = Array.from(containerRef.current.children) as HTMLElement[];

      // État initial : décalé vers le bas et invisible
      gsap.set(elements, { y: "100%", opacity: 0 });

      const animationProps = {
        y: "0%",
        opacity: 1,
        duration: 1,
        stagger: interval, // Délai entre chaque élément
        ease: "power4.out",
        delay: delay, // Délai avant le début de l'animation globale
      };

      if (animateOnScroll) {
        gsap.to(elements, {
          ...animationProps,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 95%", // Déclenche l'anim quand le haut du conteneur est à 95% du viewport
            once: true,
          },
        });
      } else {
        gsap.to(elements, animationProps);
      }
    },
    { scope: containerRef, dependencies: [delay, interval, animateOnScroll] }
  );

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
