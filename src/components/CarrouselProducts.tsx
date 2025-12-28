"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ShoppingBag,
  Star,
  HeartIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { useRef, useState } from "react";
import { useCurrency } from "@/context/CurrencyContext";

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
  const { formatPrice } = useCurrency();
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (!containerRef.current) return;
    const containerWidth = containerRef.current.offsetWidth;
    const scrollAmount = containerWidth * 0.5;

    containerRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
    // Approximation for index tracking
    setCurrentIndex((prev) => Math.min(prev + 1, recommendations.length - 1));
  };

  const handlePrev = () => {
    if (!containerRef.current) return;
    const containerWidth = containerRef.current.offsetWidth;
    const scrollAmount = containerWidth * 0.5;

    containerRef.current.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-12 md:py-16 mx-auto w-full max-w-[100vw] overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 px-4 md:px-8 lg:px-16 gap-4">
        <div className="space-y-2 max-w-2xl">
          <h2 className="text-3xl font-light tracking-tight text-neutral-900 leading-tight">
            {title}
          </h2>
          <p className="text-neutral-500 font-light text-lg">{description}</p>
        </div>

        {/* Custom Navigation */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0} // Logic could be improved using scroll listeners, but simplified here
            className="group p-3 rounded-full border border-neutral-200 bg-white text-neutral-600 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white transition-all disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-neutral-600 disabled:hover:border-neutral-200"
            aria-label="Previous items"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            className="group p-3 rounded-full border border-neutral-200 bg-white text-neutral-600 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white transition-all"
            aria-label="Next items"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative group/carousel">
        <div
          ref={containerRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-6 px-4 md:px-8 lg:px-16 pb-12"
          style={{ scrollPaddingLeft: "2rem", scrollPaddingRight: "2rem" }}
        >
          {recommendations.map((product) => (
            <div
              key={product.id}
              className="min-w-[280px] sm:min-w-[320px] md:min-w-[300px] lg:min-w-[calc(25%-1.15rem)] flex-shrink-0 snap-start"
            >
              <div className="group relative flex flex-col h-full gap-4">
                {/* Image Card */}
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-neutral-100">
                  <Link href={`/p/${product.id}`} className="block h-full w-full">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </Link>

                  {/* Floating Action Buttons */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out z-10">
                    <button
                      className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:bg-black hover:text-white text-neutral-700 transition-colors"
                      aria-label="Add to wishlist"
                    >
                      <HeartIcon className="h-5 w-5" />
                    </button>
                    <button
                      className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:bg-black hover:text-white text-neutral-700 transition-colors"
                      aria-label="Quick shop"
                    >
                      <ShoppingBag className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Rating Badge (Always visible or hover? Let's keep it subtle) */}
                  <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md px-2 py-1 rounded-lg shadow-sm flex items-center gap-1 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                    <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                    <span className="text-xs font-medium text-neutral-700">{product.rating}</span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex flex-col items-start gap-1">
                  <div className="flex w-full justify-between items-start gap-4">
                    <Link
                      href={`/p/${product.id}`}
                      className="text-lg font-medium text-neutral-800 hover:text-black transition-colors line-clamp-1"
                    >
                      {product.name}
                    </Link>
                    <p className="font-semibold text-neutral-900 whitespace-nowrap">
                      {formatPrice(product.price)}
                    </p>
                  </div>
                  <p className="text-sm text-neutral-500 line-clamp-1">
                    Mobiliario de diseño
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Spacer for right padding in scrolling container */}
          <div className="w-4 md:w-16 flex-shrink-0" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
