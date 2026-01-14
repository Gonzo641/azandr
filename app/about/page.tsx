import ReactLenis from "lenis/react"
import Image from "next/image"

export default function page() {
  return (
    <>
      <ReactLenis root />
      <div className="flex flex-col gap-8 py-60">
        {/* <div className="mx-auto w-full flex gap-8 px-2 py-4">
          <img src="/images/img_01.png" alt="Image 01" className="aspect-5/7" />
          <img src="/images/img_02.png" alt="Image 02" className="aspect-5/7" />
        </div>
        <div className="mx-auto w-full flex gap-8 px-2 py-4">
          <img src="/images/img_03.png" alt="Image 03" className="aspect-5/7" />
          <img src="/images/img_04.png" alt="Image 04" className="aspect-5/7" />
        </div> */}

          <h1>
            About me
          </h1>

      </div>
    </>
  )
}