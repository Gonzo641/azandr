import Copy from "@/components/Copy"
import ReactLenis from "lenis/react"
import Image from "next/image"

export default function page() {
  return (
    <>
      <ReactLenis root />
      <div className="relative h-screen w-full ">
        <div className="flex flex-col gap-8 md:pt-60 pt-64">
          <Image
            src="/images/Azandr4.jpg"
            alt="Paysage en arrière-plan"
            fill
            priority
            className="-z-10 opacity-80"
            quality={75}
          />
          <Copy delay={0.6}>
            <h1 className="flex justify-center items-center pt-50 text-[6rem] md:text-[14rem]">
              Who am i
            </h1>
          </Copy>
        </div>
      </div>


      <div className="flex flex-col md:flex-row justify-center items-center py-40 md:px-20 px-4 gap-8">
        <div className="relative w-3/4 h-150">
          <Image
            src="/images/Azandr11.jpg"
            alt="Paysage en arrière-plan"
            fill
            priority
            className="-z-10 opacity-80 object-cover rounded-2xl"
            quality={75}
          />
        </div>
        <div className="flex flex-col gap-4 justify-center w-full col-start-2
                        font-anton text-3xl ">
          <Copy delay={0.8}>
            <div>
              <p>
                Azandr is a DJ and producer based in Porto, Portugal,
                delivering energetic Tech House set built for clubs and
                festivals.<br />
                <br />
                His sound focuses on tight grooves, warm
                basslines and melodic tension, designed to keep the
                crowd locked in from the first track to the last.
              </p>
            </div>
          </Copy>
          <Copy delay={0.9}>
            <div>
              <p>
                With over a decade behind the decks across Europe
                and Asia, he’s comfortable on peak-time slots as well
                as sunset and late-night sessions, always adapting his
                selection to the room while keeping a strong,
                dancefloor-driven identity.
              </p>
            </div>
          </Copy>
        </div>
      </div>


      <div>
        <Copy>
        <h1 className="md:text-[12rem] text-[5rem] pl-18 md:pb-20">
          SELECTED VENUES
        </h1>
        </Copy>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center py-20 md:px-20 px-4 gap-8">
        <div className="flex flex-col justify-center w-full
                        font-anton md:text-5xl text-3xl">
          <Copy>
            <div>
              <p>
               Folie Douce – Val Thorens
              </p>
              <p>
               Duplex Club – Biarritz
              </p>
              <p>
               Dr Bernard – Lisbon
              </p>
              <p>
               Ferro Bar – Porto
              </p>
              <p>
               Engine Room – Bali
              </p>
              <p>
               Manava Pool Party – Moorea
              </p>
              <p>
               Helios – Tahiti
              </p>
              <p>
               Area – Osaka
              </p>
              <p>
               Revolver – Melbourne
              </p>
            </div>
          </Copy>
        </div>
        <div className="relative w-3/4 h-150">
          <Image
            src="/images/Azandr5.jpg"
            alt="Paysage en arrière-plan"
            fill
            priority
            className="-z-10 opacity-80 object-cover rounded-2xl"
            quality={75}
          />
        </div>
      </div>



      <div className="flex flex-col justify-center items-center py-20 gap-8">
        <Copy>
          <h1 className="md:text-[10rem] text-[5rem]">
            MUSIC STYLE
          </h1>
        </Copy>
        <Copy>
          <div className="flex flex-col justify-center items-center gap-4 md:text-[2rem] text-[1rem] font-anton">
            <p>
              TECH HOUSE  & GROOVE
            </p>
            <p>
              CLUB-ORIENTED · 122–127 BPM · WARM-UP / PEAK-TIME / CLOSING
            </p>
          </div>
        </Copy>
      </div>


      <div className="flex flex-col md:flex-row justify-center items-center py-40 md:px-20 px-4 gap-8">
        <div className="relative w-3/4 h-150">
          <Image
            src="/images/Azandr8.jpg"
            alt="Paysage en arrière-plan"
            fill
            priority
            className="-z-10 opacity-80 object-cover rounded-2xl"
            quality={75}
          />
        </div>
        <div className="flex flex-col gap-8 justify-center w-full p-8 col-start-2
                        font-anton text-2xl">
          <Copy delay={0.6}>
            <div>
              <h1 className="text-[6rem]">
                WHAT YOU GET
              </h1>
            </div>
          </Copy>
          <Copy delay={0.4}>
            <div>
              <p>
                • 2–3 HOUR CLUB-FOCUSED SETS (ADAPTABLE TO THE LINE-UP)
              </p>
            </div>
          </Copy>
          <Copy>
            <div>
              <p>
                • TECH HOUSE & MELODIC HOUSE SELECTION BUILT FOR DANCEFLOORS
              </p>
            </div>
          </Copy>
          <Copy>
            <div>
              <p>
                • MOOTH TRANSITIONS, TENSION + RELEASE, STRONG CROWD READING
              </p>
            </div>
          </Copy>
          <Copy>
            <div>
              <p>
                • PROFESSIONAL APPROACH: ON TIME, RELIABLE, EASY TO WORK WITH
              </p>
            </div>
          </Copy>
        </div>
      </div>


      <div className="flex flex-col justify-center items-center md:pt-40 pb-48 gap-8 px-8">
        <Copy>
          <h1 className="text-[10rem]">
            RIDER
          </h1>
        </Copy>
        <Copy delay={0.4}>
        <div className="flex flex-col justify-center text-[2rem] font-anton">
          <p>
            • 2× PIONEER CDJ-2000NXS2 OR CDJ-3000
          </p>
          <p>
            • 1× PIONEER DJM-900NXS2 OR DJM-V10
          </p>
          <p>
            • HIGH-QUALITY BOOTH MONITORS
          </p>
          <p>
            • STABLE AND ISOLATED DJ BOOTH (NO HEAVY VIBRATIONS)
          </p>
        </div>
        </Copy>
      </div>
    </>
  )
}