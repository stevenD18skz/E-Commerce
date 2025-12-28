"use client";

import Image from "next/image";
import { ChevronRight, Plus } from "lucide-react";

interface Design {
    id: string;
    name: string;
    image: string;
    description: string;
    price: number;
}

interface DesignShowcaseProps {
    designs: Design[];
}

export default function DesignShowcase({ designs }: DesignShowcaseProps) {
    if (designs.length === 0) return null;

    return (
        <section className="mb-[var(--spacing-xxl)]">
            <div className="flex flex-col md:flex-row justify-between items-end mb-[var(--spacing-lg)] gap-4">
                <div>
                    <span className="text-amber-600 font-medium tracking-wider text-sm uppercase mb-2 block">Inspiración</span>
                    <h2 className="text-3xl font-light text-[var(--text-primary)]">Espacios Diseñados</h2>
                    <p className="text-[var(--text-secondary)] mt-2 font-light max-w-xl">
                        Sets completos curados por nuestros interioristas para facilitar tu elección.
                    </p>
                </div>
                <button className="text-[var(--text-primary)] font-medium text-sm flex items-center hover:opacity-70 transition-opacity">
                    Ver todos los diseños <ChevronRight className="w-4 h-4 ml-1" />
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--spacing-lg)]">
                {designs.map((design) => (
                    <div
                        key={design.id}
                        className="group bg-white rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-black/5 transition-all duration-500 border border-neutral-100"
                    >
                        <div className="relative aspect-[4/3] overflow-hidden">
                            <Image
                                src={design.image}
                                alt={design.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <button className="absolute bottom-4 right-4 bg-white text-black p-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-black hover:text-white">
                                <Plus className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="p-6 md:p-8">
                            <div className="flex justify-between items-start mb-3">
                                <h3 className="text-xl font-medium text-[var(--text-primary)]">{design.name}</h3>
                                <span className="text-lg font-semibold text-[var(--text-primary)]">
                                    ${design.price.toLocaleString()}
                                </span>
                            </div>

                            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6 font-light line-clamp-2">
                                {design.description}
                            </p>

                            <button className="w-full py-3 px-4 border border-neutral-200 rounded-full text-sm font-medium text-[var(--text-primary)] hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-300">
                                Ver detalles del set
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
