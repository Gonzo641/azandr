import Link from "next/link";
import { SiSoundcloud, SiBeatport, SiInstagram, SiFacebook, SiSpotify } from "react-icons/si";
import Copy from "./Copy";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full pt-40 pb-24 px-8 flex flex-col items-center justify-center gap-8 text-(--base-100) z-10 relative bg-transparent">
      <div className="w-[75%] h-px bg-gray-100 opacity-20"></div>
      <div className="flex flex-col items-center gap-2">
        <Copy delay={0.5}>
            <h3 className="text-2xl uppercase tracking-wider" style={{ fontFamily: 'var(--font-anton)' }}>
                Contact
            </h3>
        </Copy>
        <Copy delay={0.8}>
            <Link href="mailto:azandrperso@gmail.com" className="text-lg hover:opacity-70 transition-opacity">
            azandrperso@gmail.com
            </Link>
        </Copy>
      </div>

      <div className="flex gap-6">
          <Link href="https://www.facebook.com/4zandr" target="_blank" rel="noreferrer" className="group" aria-label="Facebook">
            <SiFacebook size={24} className="transition-transform duration-300 group-hover:scale-125"/>
          </Link>
          <Link href="https://www.instagram.com/azandr.music/" target="_blank" rel="noreferrer" className="group" aria-label="Instagram">
            <SiInstagram size={24} className="transition-transform duration-300 group-hover:scale-125"/>
          </Link>
          <Link href="https://soundcloud.com/azandr" target="_blank" rel="noreferrer" className="group" aria-label="SoundCloud">
            <SiSoundcloud size={24} className="transition-transform duration-300 group-hover:scale-125"/>
          </Link>
          <Link href="https://www.beatport.com/fr/artist/azandr/1174499" target="_blank" rel="noreferrer" className="group" aria-label="Beatport">
            <SiBeatport size={24} className="transition-transform duration-300 group-hover:scale-125"/>
          </Link>
          <Link href="https://open.spotify.com/intl-fr/artist/6vojifGZRH5QqYDsIaraRm" target="_blank" rel="noreferrer" className="group" aria-label="Spotify">
            <SiSpotify size={24} className="transition-transform duration-300 group-hover:scale-125"/>
          </Link>
      </div>

      <div className="text-sm opacity-50">
        &copy; {currentYear} Azandr. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;