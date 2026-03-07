"use client"
import React from 'react'
import Image from 'next/image'
import { ArrowLeft } from "lucide-react"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const heroImages = [
  { src: "https://i.postimg.cc/VvyzVrhK/image-(5).jpg", alt: "1" },
  { src: "https://i.postimg.cc/vBrKG4B5/image-(6).jpg", alt: "2" },
  { src: "https://i.postimg.cc/NffnwfwJ/image-(7).jpg", alt: "3" },
  { src: "https://i.postimg.cc/RFLgj2ss/image-(8).jpg", alt: "4" },
]

export default function HeroSection() {
  const [emblaRef] = useEmblaCarousel({ loop: true, direction: 'rtl' }, [Autoplay({ delay: 4000 })])

  return (
    <section id="hero" className="relative min-h-[600px] overflow-hidden">
      <div className="absolute inset-0 z-0" ref={emblaRef}>
        <div className="flex h-full">
          {heroImages.map((img, i) => (
            <div key={i} className="relative h-full min-w-full flex-[0_0_100%]">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                priority={i === 0}
                unoptimized
              />
              <div className="absolute inset-0 bg-[#8B0000]/60 md:bg-gradient-to-t from-[#8B0000]/90 via-[#8B0000]/60 to-[#8B0000]/40" />
            </div>
          ))}
        </div>
      </div>

      {/* المحتوى النصي فوق الصور */}
      <div className="relative z-10 flex min-h-[600px] flex-col items-center justify-center px-4 text-center text-white">
        <p className="mb-4 text-sm font-semibold tracking-wider opacity-90">
          معاً نبني المستقبل
        </p>
        <h1 className="mb-4 text-4xl font-black leading-tight md:text-5xl lg:text-6xl text-balance">
          كيان الشباب المستقبل
        </h1>
        <p className="mb-8 max-w-xl text-base leading-relaxed opacity-90 md:text-lg">
          نمكّن الشباب من تطوير مهارات القيادة والإبداع لبناء جيل مستعد للمستقبل في الجمهورية الجديدة
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#register"
            className="flex items-center gap-2 rounded-lg bg-[#C5A059] px-6 py-3 text-sm font-bold text-black transition-transform hover:scale-105"
          >
            انضم إلينا
            <ArrowLeft className="h-4 w-4" />
          </a>
          <a
            href="#about"
            className="rounded-lg border-2 border-white px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
          >
            مبادراتنا
          </a>
        </div>
      </div>
    </section>
  )
}
