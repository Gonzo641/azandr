import Link from "next/link"
import { SiSoundcloud, SiBeatport } from "react-icons/si";

export default function Nav() {
  return (
    <nav className="fixed z-10 flex items-center justify-between w-full p-8">
      <div>
        <Link href="/" className="text-2xl font-anton">
          Azandr
        </Link>
      </div>
      <div className="flex gap-8 justify-center items-center font-anton">
        <Link href="/" className="text-2xl">Home</Link>
        <Link href="/about" className="text-2xl">About me</Link>
        <Link href="/contact" className="text-2xl">Contact</Link>
      {/* Logo SoundCloud */}
      <a href="https://soundcloud.com/azandr" target="_blank" rel="noreferrer">
        <SiSoundcloud size={40} />
        {/* <SiSoundcloud size={40} color="#FF5500" /> */}
      </a>

      {/* Logo Beatport */}
      <a href="https://www.beatport.com/fr/artist/azandr/1174499" target="_blank" rel="noreferrer">
        <SiBeatport size={40} />
        {/* <SiBeatport size={40} color="#01FF95" /> */}
      </a>
      </div>
    </nav>
  )
};