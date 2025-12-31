"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


interface HeroProps {
    slide: {
        id: number;
        title: string;
        description: string;
        image: string;
        cta: string;
        link: string;
    };
}


export default function Hero({slide}: HeroProps) {
    return (
        <section className="relative h-[70vh] rounded-b-[2rem] overflow-hidden group">

            <div 
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out `}
            >
                {/* Background Image */}
                <div className="absolute inset-0">  
                    <Image
                        src={slide.image}
                        alt="Hero background"
                        fill
                        priority={true}
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
 
        </section>
    );
}
