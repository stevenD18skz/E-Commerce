"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface Category {
    id: string;
    name: string;
    image: string;
    productsAvailable: number;
}

interface CategoryListProps {
    categories: Category[];
}

export default function CategoryList({ categories }: CategoryListProps) {
    if (categories.length === 0) return null;

    return (
        <section className="mb-[var(--spacing-xxl)]">
            <div className="flex justify-between items-end mb-[var(--spacing-md)]">
                <div>
                    <h2 className="text-3xl font-light text-[var(--text-primary)]">Categorías</h2>
                    <p className="text-[var(--text-secondary)] mt-2 font-light">
                        Explora por tipo de mueble
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[var(--spacing-sm)]">
                {categories.map((category) => (
                    <Link
                        key={category.id}
                        href={`/cat/${category.id}`}
                        className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-100 block"
                    >
                        <Image
                            src={category.image}
                            alt={category.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                            <div className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white">
                                <ArrowUpRight className="w-4 h-4" />
                            </div>
                        </div>

                        <div className="absolute bottom-0 left-0 p-5 w-full">
                            <h3 className="text-white font-medium text-lg tracking-wide">{category.name}</h3>
                            <p className="text-white/70 text-xs mt-1 font-light tracking-wider uppercase">
                                {category.productsAvailable} productos
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
