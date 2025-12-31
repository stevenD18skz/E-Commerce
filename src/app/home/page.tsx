"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Timer } from "lucide-react";
import { useEffect, useState } from "react";

import { useCurrency } from "@/context/CurrencyContext";

import CarrouselProducts from "@/components/CarrouselProducts";
import HeroCarousel from "@/app/home/components/HeroCarousel";
import HomeSkeleton from "./components/HomeSkeleton";

import { Room } from "@/types/room";
import { Product, Offer } from "@/types/product";
import { getAllRooms } from "@/ports/rooms";
import { getAllOffers, getRecommendations } from "@/ports/products";

export default function Page() {
  const { formatPrice } = useCurrency();
  const [rooms, setRooms] = useState<Room[]>([]);
  const [offers, setOffers] = useState<(Product & Offer)[]>([]);
  const [recommendations, setRecommendations] = useState<Product[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    // Use Promise.all to fetch all data in parallel
    Promise.all([
      getAllRooms(),
      getAllOffers(),
      getRecommendations()
    ]).then(([roomsData, offersData, recommendationsData]) => {
      setRooms(roomsData);
      setOffers(offersData);
      setRecommendations(recommendationsData);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <HomeSkeleton />;
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <HeroCarousel />

      {/* Main Content */}
      <main className="max-w-[140rem] mx-auto px-16 space-y-[var(--spacing-xxl)] py-[var(--spacing-xxl)]">
        {/* Categories Grid */}
        <section className="">
          <div className="flex flex-col md:flex-row justify-between items-end mb-[var(--spacing-xs)] gap-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-light tracking-tight text-[var(--text-primary)]">
                Explora nuestras categorías
              </h2>
              <p className="text-[var(--text-secondary)] font-light text-lg">
                Curaduría de muebles para cada rincón de tu hogar
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <Link
                key={room.title}
                className="group relative h-[440px] rounded-2xl overflow-hidden cursor-pointer block bg-neutral-100"
                href={`/rooms/${room.id}`}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${room.cardImage})` }}
                />

                {/* Gradient Overlays - Darker at bottom for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
                    <h3 className="text-3xl font-light text-white tracking-tight mb-3">
                      {room.title} Collection
                    </h3>
                    <p className="text-neutral-200 text-sm font-light leading-relaxed max-w-[90%] opacity-90 group-hover:text-white transition-colors">
                      {room.cardDescription}
                    </p>
                  </div>

                  {/* Hover Action Indicator */}
                  <div className="absolute bottom-8 left-8 flex items-center gap-3 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    <span className="w-12 h-[1px] bg-white/70"></span>
                    <span className="text-white text-sm font-medium tracking-widest uppercase">
                      Explorar
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Offers Section */}
        <section className="">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-light tracking-tight text-[var(--text-primary)]">
                Ofertas destacadas
              </h2>
              <p className="text-[var(--text-secondary)] font-light text-lg">
                Oportunidades únicas por tiempo limitado
              </p>
            </div>
            <button className="text-sm font-medium text-[var(--text-primary)] flex items-center gap-2 group hover:text-neutral-600 transition-colors pb-1">
              <span>Ver todas las ofertas</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {offers.map((offer) => (
              <div
                key={offer.name}
                className="group flex flex-col sm:flex-row bg-white rounded-2xl overflow-hidden border border-neutral-100 hover:border-neutral-200 hover:shadow-xl hover:shadow-neutral-200/40 transition-all duration-500"
              >
                {/* Image Section - Reduced width & controlled aspect ratio */}
                <div className="relative w-full sm:w-[200px] shrink-0 aspect-[4/3] sm:aspect-auto overflow-hidden">
                  <Image
                    src={offer.images[0]}
                    alt={offer.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-rose-700/80 backdrop-blur-sm text-[var(--text-primary)] text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
                    -{offer.discount}%
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col justify-between flex-grow gap-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="font-medium text-xl text-[var(--text-primary)] leading-tight">
                        {offer.name}
                      </h3>
                      <div className="flex flex-col items-end">
                        <span className="text-lg font-semibold text-[var(--text-primary)]">
                          {formatPrice(offer.price * (1 - offer.discount / 100))}
                        </span>
                        <span className="text-sm text-neutral-400 line-through">
                          {formatPrice(offer.price)}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-[var(--text-secondary)] line-clamp-2 font-light leading-relaxed">
                      {offer.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-neutral-50 mt-2">
                    <div className="flex items-center gap-2 text-xs font-medium text-amber-700 bg-amber-50 px-3 py-1.5 rounded-full">
                      <Timer className="h-3.5 w-3.5" />
                      <span>{offer.daysLeft} días restantes</span>
                    </div>

                    <Link
                      href={`/p/${offer.id}`}
                      className="text-sm font-medium text-[var(--text-primary)] group-hover:text-black hover:underline hover:underline-offset-4 transition-all flex items-center gap-2"
                    >
                      Ver detalles
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recommendations Section */}
        <CarrouselProducts
          recommendations={recommendations}
          title={"Productos destacados"}
          description={"Diseños exclusivos seleccionados para ti"}
        />
      </main>
    </div>
  );
}
