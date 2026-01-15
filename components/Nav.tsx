"use client";

import Link from "next/link"
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface HoverLinkProps {
  href: string;
  children: string;
  className?: string;
}

const HoverLink = ({ href, children, className = "" }: HoverLinkProps) => {
  const container = useRef(null);
  const overlay = useRef(null);

  const { contextSafe } = useGSAP({ scope: container });

  const onEnter = contextSafe(() => {
    gsap.to(overlay.current, { width: "100%", duration: 0.5, ease: "power2.out" });
  });

  const onLeave = contextSafe(() => {
    gsap.to(overlay.current, { width: "0%", duration: 0.5, ease: "power2.out" });
  });

  return (
    <Link href={href} className={`relative inline-block cursor-pointer text-[#e3e4d8] ${className}`} ref={container} onMouseEnter={onEnter} onMouseLeave={onLeave}>
      {/* Texte de base */}
      <span className="relative z-10">{children}</span>
      {/* Texte de remplissage (overlay) */}
      <div ref={overlay} className="absolute top-0 left-0 h-full w-0 overflow-hidden whitespace-nowrap text-[#a3b7b9] z-20 pointer-events-none" aria-hidden="true">
        {children}
      </div>
    </Link>
  );
};

export default function Nav() {
  return (
    <nav className="fixed z-10 flex items-center justify-between w-full p-8">
      <div>
        <Link href="/" className="text-2xl font-anton">
          Azandr
        </Link>
      </div>
      <div className="flex gap-4 md:gap-8 justify-center items-center font-anton">
        <HoverLink href="/" className=" text-xl md:text-2xl">Home</HoverLink>
        <HoverLink href="/about" className=" text-xl md:text-2xl">About me</HoverLink>
        <HoverLink href="/contact" className=" text-xl md:text-2xl">Contact</HoverLink>
      </div>
    </nav>
  )
};