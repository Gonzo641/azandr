"use client";

import { useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { gsap } from "gsap";
import Logo from "./Logo";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const overlayRef = useRef<HTMLDivElement | null>(null);
  const logoOverlayRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<SVGSVGElement | null>(null);
  const blocksRef = useRef<HTMLDivElement[]>([]);
  const isTransitioning = useRef<boolean>(false);

  useEffect(() => {
    const createBlocks = () => {
      const overlay = overlayRef.current;
      if (!overlay) return;
      overlay.innerHTML = "";
      blocksRef.current = [];
      for (let i = 0; i < 20; i++) {
        const block = document.createElement("div");
        block.className = "block";
        overlay.appendChild(block);
        blocksRef.current.push(block);
      }
    };

    createBlocks();

    // Préparation des blocs
    gsap.set(blocksRef.current, { scaleX: 0, transformOrigin: "left" });

    // Préparation du logo (stroke -> draw)
    if (logoRef.current) {
      const paths = logoRef.current.querySelectorAll<SVGPathElement>("path");
      paths.forEach((p) => {
        const length = p.getTotalLength();
        gsap.set(p, {
          strokeDasharray: length,
          strokeDashoffset: length,
          fill: "transparent",
        });
      });
    }

    revealPage();

    const handleRouteChange = (url: string) => {
      if (isTransitioning.current) return;
      isTransitioning.current = true;
      coverPage(url);
    };

    // Même référence pour add/remove
    const onClick = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLAnchorElement;
      // Ignorer les clics modifiés / nouveaux onglets / clic milieu
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const href = target.href;
      if (!href) return;

      const url = new URL(href).pathname;
      if (url !== pathname) {
        e.preventDefault();
        handleRouteChange(url);
      }
    };

    const links = document.querySelectorAll<HTMLAnchorElement>('a[href^="/"]');
    links.forEach((link) => link.addEventListener("click", onClick));

    return () => {
      links.forEach((link) => link.removeEventListener("click", onClick));
    };
  }, [pathname, router]);

  const coverPage = (url: string) => {
    const tl = gsap.timeline({
      onComplete: () => router.push(url),
    });

    const logoEl = logoRef.current;
    const logoPaths = logoEl?.querySelectorAll<SVGPathElement>("path") ?? [];

    tl.to(blocksRef.current, {
      scaleX: 1,
      transformOrigin: "left",
      stagger: 0.02,
      ease: "power2.out",
      duration: 0.4,
    })
      .set(logoOverlayRef.current, { opacity: 1 }, "-=0.2")
      .to(
        logoPaths,
        {
          strokeDashoffset: 0,
          duration: 2,
          ease: "power2.inOut",
        },
        "-=0.25"
      )
      .to(
        logoPaths,
        {
          fill: "#e3e4d8",
          duration: 1,
          ease: "power2.out",
        },
        "-=0.5"
      )
      .to(logoOverlayRef.current, {
        opacity: 0,
        duration: 0.25,
        ease: "power2.out",
      });
  };

  const revealPage = () => {
    gsap.set(blocksRef.current, { scaleX: 1, transformOrigin: "right" });
    gsap.to(blocksRef.current, {
      scaleX: 0,
      duration: 0.4,
      stagger: 0.02,
      ease: "power2.out",
      transformOrigin: "right",
      onComplete: () => {
        isTransitioning.current = false;
      },
    });
  };

  return (
    <>
      <div ref={overlayRef} className="transition-overlay" />
      <div ref={logoOverlayRef} className="logo-overlay">
        <div className="logo-container">
          <Logo ref={logoRef} />
        </div>
      </div>
      {children}
    </>
  );
}
