import Image from "next/image"
import { Play } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-br from-black to-neutral-900">
      {/* Main Grid Content */}
      <div className="relative z-10 grid h-full grid-cols-4 gap-4 px-4 py-12 sm:grid-cols-8 sm:gap-6 sm:px-6 sm:py-16 md:grid-cols-12 md:gap-8 md:px-10 md:py-32 lg:gap-12">
        {/* Left Column */}
        <div className="col-span-4 flex flex-col justify-between sm:col-span-3 md:col-span-3">
          <div>
            <p className="max-w-[200px] text-base text-white sm:text-lg md:w-36">
              Empowering justice seekers through legal navigation.
            </p>
            <div className="mt-2 h-1 w-12 bg-red-600"></div>
          </div>

          <div className="mt-8 flex items-end gap-4 md:mt-0">
          <Image
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200"
              alt="Legal Elder"
              width={80}
              height={80}
              className="rounded-sm bg-gradient-to-t from-zinc-800 to-transparent object-cover"
            />
            <div className="text-white">
              <div className="text-2xl font-bold sm:text-3xl">50+</div>
              <div className="text-xs text-neutral-400 sm:text-sm">Legal Elder</div>
            </div>
          </div>
        </div>

        {/* Center Column */}
        <div className="col-span-4 flex flex-col items-start sm:col-span-5 md:col-span-5">
          <h1 className="z-20 text-6xl font-black tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-8xl">
            LEGAL
            <br />
            INSIGHT
            <br />
            HUB
          </h1>
          {/* Lawyer Image */}
          <div className="absolute right-0 top-1/4 h-[60%] w-[280px] bg-gradient-to-t from-zinc-800 to-transparent sm:right-8 sm:h-[65%] sm:w-[300px] md:right-24 md:top-24 md:h-[70%] md:w-[500px] lg:w-[600px]">
            <Image
              src="/processed-1740304073800.png"
              alt="Professional Lawyer"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
          <button className="mt-6 bg-red-600 px-6 py-3 text-base font-medium text-white transition-all hover:bg-red-700 sm:mt-8 sm:px-8 sm:py-3 sm:text-lg md:px-12 md:py-4">
            Contact Now
          </button>
        </div>

        {/* Right Column */}
        <div className="col-span-4 flex flex-col items-end justify-between sm:col-span-8 md:col-span-4">
          <button className="rounded-full bg-neutral-800 p-3 text-white transition-all hover:bg-neutral-700 sm:p-4">
            <Play className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
          </button>

          <Link href="/contact" className="relative z-20 bg-zinc-900/80 p-4 text-center backdrop-blur-sm hover:backdrop-blur-md transition-all sm:w-auto sm:p-5 md:p-6">
            <div className="font-serif text-xl italic text-red-600 sm:text-2xl">Expertise</div>
            <div className="text-base font-semibold text-white sm:text-lg">
              RECOGNISED
              <br />
              WORLDWIDE
            </div>
            <button className="mt-2 text-xs text-neutral-400 transition-colors hover:text-white sm:text-sm">
              Learn more
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

