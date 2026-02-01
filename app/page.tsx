// import Copy from "@/components/Copy";
// import RevealList from "@/components/RevealList";
// import TrackItem from "@/components/TrackItem";
// import Image from "next/image";
// import { SiSoundcloud, SiBeatport, SiInstagram, SiFacebook } from "react-icons/si";

// export default function Home() {
//   return (
//     <>
//       <div className="relative flex flex-col md:flex-row h-svh w-full p-8 gap-4">
//         <Image
//           src="/images/Azandr7.jpg"
//           alt="Paysage en arrière-plan"
//           fill
//           priority
//           className="-z-10 opacity-90"
//           quality={75}
//         />
//         <div className="flex items-end h-full">
//           <Copy delay={0.6}>
//             <h1 className="text-8xl lg:text-[12rem]">
//               AZANDR
//             </h1>
//           </Copy>
//         </div>

//         <RevealList className="flex justify-end items-end w-full gap-3.5" delay={1} interval={0.1}>
//           <a href="https://www.facebook.com/4zandr" target="_blank" rel="noreferrer" className="group">
//             <SiFacebook size={30} className="transition-transform duration-300 group-hover:scale-125"/>
//           </a>
//           <a href="https://www.instagram.com/azandr.music/" target="_blank" rel="noreferrer" className="group">
//             <SiInstagram size={30} className="transition-transform duration-300 group-hover:scale-125"/>
//           </a>
//           <a href="https://soundcloud.com/azandr" target="_blank" rel="noreferrer" className="group">
//             <SiSoundcloud size={30} className="transition-transform duration-300 group-hover:scale-125"/>
//           </a>
//           <a href="https://www.beatport.com/fr/artist/azandr/1174499" target="_blank" rel="noreferrer" className="group">
//             <SiBeatport size={30} className="transition-transform duration-300 group-hover:scale-125"/>
//           </a>
//         </RevealList>
//       </div>
//       <div className="flex justify-center items-center py-50">
//         <h1>
//           Last Tracks
//         </h1>
//       </div>
//       <div className="flex flex-col gap-4 w-full max-w-4xl mx-auto">
//         <TrackItem 
//           imageSrc="/images/az-track10.jpg" 
//           artist="Azandr" 
//           title="Statement" 
//         />
//         <TrackItem 
//           imageSrc="/images/az-track1.jpg" 
//           artist="Azandr" 
//           title="Let's Have Some Groove MF" 
//         />
//         <TrackItem 
//           imageSrc="/images/az-track2.jpg" 
//           artist="Azandr" 
//           title="Tequila Please" 
//         />
//         <TrackItem 
//           imageSrc="/images/az-track3.jpg" 
//           artist="Azandr" 
//           title="Herbal Disorder" 
//         />
//         <TrackItem 
//           imageSrc="/images/az-track4.jpg" 
//           artist="Azandr" 
//           title="Estranha Forma (Azandr Afro House Edit) Extented" 
//         />
//         <TrackItem 
//           imageSrc="/images/az-track5.jpg" 
//           artist="Azandr" 
//           title="Nom de la track" 
//         />
//         <TrackItem 
//           imageSrc="/images/az-track6.jpg" 
//           artist="Azandr" 
//           title="Nom de la track" 
//         />
//         <TrackItem 
//           imageSrc="/images/az-track7.jpg" 
//           artist="Azandr" 
//           title="Nom de la track" 
//         />
//         <TrackItem 
//           imageSrc="/images/az-track8.jpg" 
//           artist="Azandr" 
//           title="Nom de la track" 
//         />
//         <TrackItem 
//           imageSrc="/images/az-track9.jpg" 
//           artist="Azandr" 
//           title="Nom de la track" 
//         />

//       </div>
//     </>
//   );
// };




import Copy from "@/components/Copy";
import RevealList from "@/components/RevealList";
import Spotlight from "@/components/Spotlight/Spotlight";
import TrackItem from "@/components/TrackItem";
import Image from "next/image";
import { SiSoundcloud, SiBeatport, SiInstagram, SiFacebook } from "react-icons/si";

export default function Home() {
  return (
    <>
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
        </RevealList>
      </div>
      {/* <div className="flex justify-center items-center py-50">
        <h1>
          Last Tracks
        </h1>
      </div>
      <div className="flex flex-col gap-4 w-full max-w-4xl mx-auto">
        <TrackItem 
          imageSrc="/images/az-track10.jpg" 
          artist="Azandr" 
          title="Statement" 
        />
        <TrackItem 
          imageSrc="/images/az-track1.jpg" 
          artist="Azandr" 
          title="Let's Have Some Groove MF" 
        />
        <TrackItem 
          imageSrc="/images/az-track2.jpg" 
          artist="Azandr" 
          title="Tequila Please" 
        />
        <TrackItem 
          imageSrc="/images/az-track3.jpg" 
          artist="Azandr" 
          title="Herbal Disorder" 
        />
        <TrackItem 
          imageSrc="/images/az-track4.jpg" 
          artist="Azandr" 
          title="Estranha Forma (Azandr Afro House Edit) Extented" 
        />
        <TrackItem 
          imageSrc="/images/az-track5.jpg" 
          artist="Azandr" 
          title="Nom de la track" 
        />
        <TrackItem 
          imageSrc="/images/az-track6.jpg" 
          artist="Azandr" 
          title="Nom de la track" 
        />
        <TrackItem 
          imageSrc="/images/az-track7.jpg" 
          artist="Azandr" 
          title="Nom de la track" 
        />
        <TrackItem 
          imageSrc="/images/az-track8.jpg" 
          artist="Azandr" 
          title="Nom de la track" 
        />
        <TrackItem 
          imageSrc="/images/az-track9.jpg" 
          artist="Azandr" 
          title="Nom de la track" 
        />

      </div> */}

      <Spotlight />
    </>
  );
};
