"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ShoppingBag,
  ArrowRight,
  Star,
  HeartIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { useRef, useState } from "react";

type Product = {
  id: string;
  name: string;
  images: string[];
  rating: number;
  price: number;
};

export default function CarrouselProducts({
  recommendations,
  title,
  description,
}: {
  recommendations: Product[];
  title: string;
  description: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (!containerRef.current) return;
    const containerWidth = containerRef.current.offsetWidth;
    const scrollAmount = containerWidth * 0.25;

    containerRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
    setCurrentIndex((prev) => Math.min(prev + 1, recommendations.length - 4));
  };

  const handlePrev = () => {
    if (!containerRef.current) return;
    const containerWidth = containerRef.current.offsetWidth;
    const scrollAmount = containerWidth * 0.25;

    containerRef.current.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="mt-16">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-2xl font-medium text-neutral-900">{title}</h2>
          <p className="mt-1 text-neutral-600">{description}</p>
        </div>
        <button className="text-neutral-900 flex items-center space-x-2 group">
          <span>Ver todos</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Contenedor del Carrusel */}
      <div className="relative">
        <div
          ref={containerRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide space-x-6 pb-4"
        >
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex >= recommendations.length - 4}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          {recommendations.map((product) => (
            <div
              key={product.name}
              className="min-w-[calc(25%-1.5rem)] flex-shrink-0 snap-start" // 4 elementos por vista
            >
              <div className="group mx-2">
                <div key={product.name} className="group">
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-neutral-100">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                    <Link
                      className="absolute bottom-4 right-16 p-3 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-neutral-50 active:scale-95"
                      href={`/p/${product.id}`}
                    >
                      <ShoppingBag className="h-5 w-5 text-neutral-900" />
                    </Link>
                    <Link
                      className="absolute bottom-4 right-4 p-3 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-neutral-50 active:scale-95"
                      href={`/p/${product.id}`}
                    >
                      <HeartIcon className="h-5 w-5 text-neutral-900" />
                    </Link>
                  </div>

                  <div className="mt-4">
                    <Link href={`/p/${encodeURIComponent(product.id)}`}>
                      <h3 className=" font-medium text-xl text-neutral-400 hover:underline hover:underline-offset-8 hover:text-neutral-900 ">
                        {product.name}
                      </h3>
                    </Link>

                    <div className="flex items-center mt-1 space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-neutral-600">
                        {product.rating}
                      </span>
                    </div>

                    <p className="mt-1 text-neutral-600">
                      {" "}
                      <strong>${product.price}</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
