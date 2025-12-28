"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface Tip {
    id: string;
    title: string;
    description: string;
    image: string;
}

interface TipsSectionProps {
    tips: Tip[];
}

export default function TipsSection({ tips }: TipsSectionProps) {
    if (tips.length === 0) return null;

    return (
        <section className="mb-[var(--spacing-xl)] bg-neutral-50 -mx-4 sm:-mx-8 lg:-mx-16 px-4 sm:px-8 lg:px-16 py-[var(--spacing-xl)]">
            <div className="max-w-[120rem] mx-auto">
                <h2 className="text-3xl font-light mb-[var(--spacing-lg)] text-[var(--text-primary)]">
                    Tips & Ideas de Diseño
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--spacing-lg)]">
                    {tips.map((tip, index) => (
                        <article
                            key={tip.id}
                            className="group flex flex-col gap-4 cursor-pointer"
                        >
                            <div className="relative aspect-[3/2] rounded-2xl overflow-hidden bg-neutral-200">
                                <Image
                                    src={tip.image}
                                    alt={tip.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-xs font-semibold tracking-widest text-neutral-400 uppercase">
                                    Artículo 0{index + 1}
                                </span>
                                <h3 className="text-xl font-medium text-[var(--text-primary)] group-hover:underline decoration-1 underline-offset-4">
                                    {tip.title}
                                </h3>
                                <p className="text-[var(--text-secondary)] text-sm font-light leading-relaxed line-clamp-3">
                                    {tip.description}
                                </p>
                                <div className="flex items-center text-sm font-medium text-[var(--text-primary)] mt-2 opacity-60 group-hover:opacity-100 transition-opacity">
                                    Leer más <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
