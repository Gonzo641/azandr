import Link from "next/link"


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

      </div>
    </nav>
  )
};