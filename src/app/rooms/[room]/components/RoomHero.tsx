"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface RoomHeroProps {
    title: string;
    description: string;
    image: string;
}

export default function RoomHero({ title, description, image }: RoomHeroProps) {
    return (
        <section className="relative h-[60vh] min-h-[500px] overflow-hidden rounded-b-[3rem]">
            <Image
                src={image}
                alt={title}
                fill
                priority
                className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div className="relative h-full max-w-[140rem] mx-auto px-8 lg:px-16 flex flex-col justify-end pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-2xl"
                >
                    <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight">
                        {title}
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">
                        {description}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
