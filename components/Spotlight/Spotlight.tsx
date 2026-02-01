"use client";
import "./Spotlight.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Spotlight = () => {
  const spotlightRef = useRef<HTMLElement | null>(null);
  const titlesContainerRef = useRef<HTMLDivElement | null>(null);
  const imagesContainerRef = useRef<HTMLDivElement | null>(null);
  const spotlightHeaderRef = useRef<HTMLDivElement | null>(null);
  const titlesContainerElementRef = useRef<HTMLDivElement | null>(null);
  const mobileCardRef = useRef<HTMLAnchorElement | null>(null);

  // refs qui contiennent des tableaux d’éléments
  const introTextElementsRef = useRef<HTMLDivElement[]>([]);
  const imageElementsRef = useRef<HTMLElement[]>([]);
  const titleElementsRef = useRef<HTMLHeadingElement[]>([]);
  // const currentActiveIndexRef = useRef<number>(0);

  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  
  const [mobileIndex, setMobileIndex] = useState(0);

  // configuration
  const config = {
    gap: 0.08,
    speed: 0.3,
    arcRadius: 500,
  };

  const spotlightItems = [
    { name: "Statement", img: "/images/az-track10.jpg", link: "https://open.spotify.com/intl-fr/album/07vFoZ7yersYOCpwStbkpW" },
    { name: "Let's Have Some Groove MF", img: "/images/az-track1.jpg", link: "https://soundcloud.com/azandr/lets-have-some-groove-mf" },
    { name: "Tequila Please", img: "/images/az-track2.jpg", link: "https://open.spotify.com/intl-fr/track/6ROgRXmCnenY2IUZDz3L6U" },
    { name: "Herbal Disorder", img: "/images/az-track3.jpg", link: "https://open.spotify.com/intl-fr/album/6ay3UFH4pUKuhGZ66mBiI5" },
    { name: "Estranha Forma", img: "/images/az-track4.jpg", link: "https://soundcloud.com/azandr/estranha-forma-azandr-afro" },
    { name: "Unfade", img: "/images/az-track5.jpg", link: "https://open.spotify.com/intl-fr/track/0GCuLbDD1Z0rHFRSKGD7NS" },
    { name: "Will Clarke - Holding On ( Azandr Remix )", img: "/images/az-track6.jpg", link: "https://soundcloud.com/azandr/will-clarke-holding-on-azandr-remix" },
    { name: "Baile F**k", img: "/images/az-track7.jpg", link: "https://open.spotify.com/intl-fr/track/3ViHhwC0Ny0MBjsPt8j4vn" },
    { name: "Therapy - Azandr", img: "/images/az-track8.jpg", link: "https://open.spotify.com/intl-fr/track/0OkOot8YvydKLrGeOTqQvb" },
  ];

  const handleMobileChange = (direction: number) => {
    if (!mobileCardRef.current) return;
    
    // Animation de sortie (fade out)
    gsap.to(mobileCardRef.current, {
      opacity: 0,
      duration: 0.2,
      onComplete: () => {
        // Changement de l'index une fois invisible
        setMobileIndex((prev) => (prev + direction + spotlightItems.length) % spotlightItems.length);
      }
    });
  };

  // Animation d'entrée (fade in) à chaque changement d'index
  useEffect(() => {
    if (mobileCardRef.current) {
      gsap.to(mobileCardRef.current, { opacity: 1, duration: 0.3 });
    }
  }, [mobileIndex]);




  useEffect(() => {
    const mm = gsap.matchMedia();

    // Animation uniquement pour Desktop (>= 1000px)
    mm.add("(min-width: 1000px)", () => {
      const titlesContainer = titlesContainerRef.current;
      const imagesContainer = imagesContainerRef.current;
      const spotlightHeader = spotlightHeaderRef.current;
      const titlesContainerElement = titlesContainerElementRef.current;

      if (!titlesContainer || !imagesContainer || !spotlightHeader || !titlesContainerElement) return;

      const introTextElements = introTextElementsRef.current;
      const imageElements = imageElementsRef.current;
      const titleElements = titleElementsRef.current;
      let currentActiveIndex = 0;

      const containerWidth = window.innerWidth * 0.3;
      const containerHeight = window.innerHeight;
      const arcStartX = containerWidth - 220;
      const arcStartY = -200;
      const arcEndY = containerHeight + 200;
      const arcControlPointX = arcStartX + config.arcRadius;
      const arcControlPointY = containerHeight / 2;

      const getBezierPosition = (t: number) => {
        const x =
          (1 - t) * (1 - t) * arcStartX +
          2 * (1 - t) * t * arcControlPointX +
          t * t * arcStartX;
        const y =
          (1 - t) * (1 - t) * arcStartY +
          2 * (1 - t) * t * arcControlPointY +
          t * t * arcEndY;
        return { x, y };
      };

      const getImgProgressState = (index: number, overallProgress: number) => {
        const startTime = index * config.gap;
        const endTime = startTime + config.speed;
        if (overallProgress < startTime) return -1;
        if (overallProgress > endTime) return 2;
        return (overallProgress - startTime) / config.speed;
      };

      imageElements.forEach((img) => gsap.set(img, { opacity: 0 }));

      // Initialisation : on pousse les titres vers le bas (hors champ) au départ
      const initialTitlesY = window.innerHeight;
      gsap.set(titlesContainer, { y: initialTitlesY });

      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: ".spotlight",
        start: "top top",
        end: `+=${window.innerHeight * 10}px`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;

          if (progress <= 0.2) {
            const animationProgress = progress / 0.2;
            const moveDistance = window.innerWidth * 0.6;
            gsap.set(introTextElements[0], { x: -animationProgress * moveDistance, opacity: 1 });
            gsap.set(introTextElements[1], { x: animationProgress * moveDistance, opacity: 1 });

            gsap.set(".spotlight-bg-img", { transform: `scale(${animationProgress})` });
            gsap.set(".spotlight-bg-img img", { transform: `scale(${1.5 - animationProgress * 0.5})` });

            imageElements.forEach((img) => gsap.set(img, { opacity: 0 }));
            spotlightHeader.style.opacity = "0";
            gsap.set(titlesContainerElement, { "--before-opacity": "0", "--after-opacity": "0" });
            
            // S'assurer que les titres restent en bas si on remonte
            gsap.set(titlesContainer, { y: window.innerHeight });
          } else if (progress > 0.2 && progress <= 0.25) {
            gsap.set(".spotlight-bg-img", { transform: "scale(1)" });
            gsap.set(".spotlight-bg-img img", { transform: "scale(1)" });
            gsap.set(introTextElements[0], { opacity: 0 });
            gsap.set(introTextElements[1], { opacity: 0 });
            imageElements.forEach((img) => gsap.set(img, { opacity: 0 }));
            spotlightHeader.style.opacity = "1";
            gsap.set(titlesContainerElement, { "--before-opacity": "1", "--after-opacity": "1" });

            // S'assurer que les titres restent en bas juste avant l'animation
            gsap.set(titlesContainer, { y: window.innerHeight });
          } else if (progress > 0.25 && progress <= 0.95) {
            gsap.set(introTextElements[0], { opacity: 0 });
            gsap.set(introTextElements[1], { opacity: 0 });
            spotlightHeader.style.opacity = "1";
            gsap.set(titlesContainerElement, { "--before-opacity": "1", "--after-opacity": "1" });

            const switchProgress = (progress - 0.25) / 0.7;
            const viewportHeight = window.innerHeight;
            const titlesContainerHeight = titlesContainer.scrollHeight;
            const startPosition = viewportHeight;
            const targetPosition = -titlesContainerHeight;
            const totalDistance = startPosition - targetPosition;
            const currentY = startPosition - switchProgress * totalDistance;

            gsap.set(titlesContainer, { y: currentY });

            imageElements.forEach((img, index) => {
              const imageProgress = getImgProgressState(index, switchProgress);
              if (imageProgress < 0 || imageProgress > 1) {
                gsap.set(img, { opacity: 0 });
              } else {
                const pos = getBezierPosition(imageProgress);
                gsap.set(img, { x: pos.x - 100, y: pos.y - 75, opacity: 1 });
              }
            });

            // mise à jour du titre actif
            const viewportMiddle = viewportHeight / 2;
            let closestIndex = 0;
            let closestDistance = Infinity;

            titleElements.forEach((title, index) => {
              const rect = title.getBoundingClientRect();
              const titleCenter = rect.top + rect.height / 2;
              const distance = Math.abs(titleCenter - viewportMiddle);
              if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = index;
            }
            });

            if (closestIndex !== currentActiveIndex) {
              titleElements[currentActiveIndex].style.opacity = "0.35";
              titleElements[closestIndex].style.opacity = "1";
              const bgImg = document.querySelector<HTMLImageElement>(".spotlight-bg-img img");
              if (bgImg) bgImg.src = spotlightItems[closestIndex].img;
              currentActiveIndex = closestIndex;
            }
          } else if (progress > 0.95) {
            spotlightHeader.style.opacity = "0";
            gsap.set(titlesContainerElement, { "--before-opacity": "0", "--after-opacity": "0" });
          }
        },
      });
    });

    return () => {
      mm.revert();
    };
    // ✅ dépendances figées
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 




  
  return (
    <section className="spotlight" ref={spotlightRef}>
      {/* --- Desktop View --- */}
      <div className="spotlight-desktop-view">
        <div className="spotlight-inner">
          <div className="spotlight-intro-text-wrapper">
            <div className="spotlight-intro-text" ref={(el) => { if (el) introTextElementsRef.current[0] = el; }}>
              <h1 className="text-[8rem]">Last</h1>
            </div>
            <div className="spotlight-intro-text" ref={(el) => { if (el) introTextElementsRef.current[1] = el; }}>
              <h1 className="text-[8rem]">Tracks</h1>
            </div>
          </div>
          <div className="spotlight-bg-img">
            <Image
              src="/images/Azandr15.jpg"
              alt="spotlight background"
              fill
              sizes="100vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>
        <div className="spotlight-titles-container" ref={titlesContainerElementRef}>
          <div className="spotlight-titles" ref={titlesContainerRef}>
            {spotlightItems.map((item, index) => (
              <h1 
                key={index} 
                style={{ opacity: index === 0 ? 1 : 0.35 }}
                ref={(el) => { if (el) titleElementsRef.current[index] = el; }}
              >
                <Link href={item.link} className="spotlight-link" target="_blank" rel="noopener noreferrer">{item.name}</Link>
              </h1>
            ))}
          </div>
        </div>
        <div className="spotlight-images" ref={imagesContainerRef}>
          {spotlightItems.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className="spotlight-img"
              ref={(el) => { if (el) imageElementsRef.current[index] = el; }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={item.img} alt={item.name} />
            </Link>
          ))}
        </div>
        <div className="spotlight-header" ref={spotlightHeaderRef}>
          <h1 className="text-[4rem]">
              Discover
          </h1>
        </div>
        <div className="spotlight-outline"></div>
      </div>

      {/* --- Mobile View --- */}
      <div className="spotlight-mobile-view">
        <h2 className="spotlight-mobile-title">Last Tracks</h2>
        
        <div className="spotlight-mobile-carousel">
          <button className="spotlight-mobile-arrow" onClick={() => handleMobileChange(-1)} aria-label="Previous track">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
          </button>

          <Link 
            href={spotlightItems[mobileIndex].link} 
            className="spotlight-mobile-card" 
            target="_blank" 
            rel="noopener noreferrer"
            ref={mobileCardRef}
          >
            <div className="spotlight-mobile-img-container">
              <Image src={spotlightItems[mobileIndex].img} alt={spotlightItems[mobileIndex].name} fill className="object-cover" />
            </div>
            <h3 className="spotlight-mobile-card-title">{spotlightItems[mobileIndex].name}</h3>
          </Link>

          <button className="spotlight-mobile-arrow" onClick={() => handleMobileChange(1)} aria-label="Next track">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Spotlight;
