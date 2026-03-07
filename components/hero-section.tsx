import React from 'react'
import { ArrowLeft } from "lucide-react"

export default function HeroSection() {
  return (
    <section 
      id="hero" 
      className="relative h-[650px] w-full flex items-center justify-center text-center text-white"
      style={{
        // جربي اللينك ده، لو مظهرش غيريه بأي لينك صورة تانية عندك شغالة في الموقع
        backgroundImage: `linear-gradient(rgba(139, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://i.postimg.cc/VvyzVrhK/image-5.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed' // بيعمل تأثير شيك جداً وأنتِ بتعملي سكرول
      }}
    >
      <div className="relative z-10 px-4 max-w-4xl">
        <p className="mb-4 text-sm font-bold tracking-[0.2em] text-[#C5A059] uppercase">
          معاً نبني المستقبل
        </p>
        <h1 className="mb-6 text-5xl font-black md:text-7xl drop-shadow-2xl">
          كيان الشباب المستقبل
        </h1>
        <p className="mb-10 text-lg font-medium opacity-90 md:text-xl leading-relaxed">
          نحو تمكين حقيقي للشباب في الجمهورية الجديدة وتعزيز مهارات القيادة والإبداع
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-6">
          <a
            href="#register"
            className="flex items-center gap-2 rounded-lg bg-[#C5A059] px-10 py-4 text-sm font-black text-black transition-all hover:scale-110 hover:bg-white shadow-xl"
          >
            انضم إلينا الآن
            <ArrowLeft className="h-5 w-5" />
          </a>
          <a
            href="#about"
            className="rounded-lg border-2 border-white/50 px-10 py-4 text-sm font-bold text-white transition-all hover:bg-white/20 backdrop-blur-sm"
          >
            اكتشف مبادراتنا
          </a>
        </div>
      </div>
    </section>
  )
}
