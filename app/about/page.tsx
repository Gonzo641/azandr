import ReactLenis from "lenis/react"
import Image from "next/image"

export default function page() {
  return (
    <>
      <ReactLenis root />
      <div className="flex flex-col gap-8 py-60">
        <Image
          src="/images/Azandr4.jpg"
          alt="Paysage en arrière-plan"
          fill
          priority
          className="-z-10 opacity-80"
          quality={75}
        />
        <h1 className="p-8">
          About me
        </h1>
      </div>
    </>
  )
}