"use client";

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
    {
        id: 1,
        title: (
            <>
                Diseño que <span className="font-medium">transforma</span> tu espacio
            </>
        ),
        description:
            "Descubre nuestra colección de muebles modernos y funcionales para crear el hogar de tus sueños.",
        image:
            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000",
        cta: "Ver colección",
        link: "/rooms/living-room",
    },
    {
        id: 2,
        title: (
            <>
                Temporada de <span className="font-medium text-amber-200">Otoño</span>
            </>
        ),
        description:
            "Tonos cálidos y texturas suaves para preparar tu hogar para los días más frescos.",
        image:
            "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2000",
        cta: "Ver temporada",
        link: "/rooms/sales", // Assuming sales or separate category
    },
    {
        id: 3,
        title: (
            <>
                Combos <span className="font-medium">Populares</span>
            </>
        ),
        description:
            "Renueva espacios completos con nuestros sets curados por expertos diseñadores.",
        image:
            "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=2000&auto=format&fit=crop",
        cta: "Ver combos",
        link: "/rooms/kitchen",
    },
];

export default function HeroCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section className="relative h-[70vh] rounded-b-[2rem] overflow-hidden group">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <Image
                            src={slide.image}
                            alt="Hero background"
                            fill
                            priority={index === 0}
                            className="object-cover object-center"
                        />
                    </div>

                    {/* Overlay - slightly stronger on left for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/80 via-neutral-900/40 to-transparent" />

                    {/* Content */}
                    <div className="absolute bottom-[10%] left-[5%] md:left-[8%] p-4 md:p-0 flex flex-col justify-center max-w-2xl">
                        <h1 className="text-4xl sm:text-6xl font-light text-white leading-tight animate-fade-in-up">
                            {slide.title}
                        </h1>
                        <p className="mt-4 text-lg text-neutral-200 max-w-xl animate-fade-in-up animation-delay-200">
                            {slide.description}
                        </p>
                        <Link
                            href={slide.link}
                            className="mt-8 px-8 py-4 bg-white text-neutral-900 rounded-full 
                             inline-flex items-center space-x-2 w-fit
                             hover:bg-neutral-100 transition-all duration-300 transform hover:scale-105 active:scale-95 group/btn"
                        >
                            <span>{slide.cta}</span>
                            <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            ))}

            {/* Navigation Controls */}
            <div className="absolute bottom-8 right-8 z-20 flex gap-2">
                <button
                    onClick={prevSlide}
                    className="p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors border border-white/20"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                    onClick={nextSlide}
                    className="p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors border border-white/20"
                    aria-label="Next slide"
                >
                    <ChevronRight className="h-6 w-6" />
                </button>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-1 rounded-full transition-all duration-300 ${index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
