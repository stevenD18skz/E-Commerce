"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, ArrowRight, Timer } from "lucide-react";
import { rooms, offers, recommendations } from "./lib/data";
import Newsletter from "./ui/Newsletter";
import CarrouselProducts from "./ui/CarrouselProducts";

export default function Page() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="relative mx-4 h-[50vh] rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/70 to-neutral-900/30" />
        <div className="relative h-full flex flex-col justify-center px-8 sm:px-12">
          <h1 className="text-4xl sm:text-6xl font-light text-white max-w-2xl">
            Diseño que <span className="font-medium">transforma</span> tu
            espacio
          </h1>
          <p className="mt-4 text-lg text-neutral-200 max-w-xl">
            Descubre nuestra colección de muebles modernos y funcionales para
            crear el hogar de tus sueños.
          </p>
          <button
            className="mt-8 px-8 py-4 bg-white text-neutral-900 rounded-full 
                           inline-flex items-center space-x-2 w-fit
                           hover:bg-neutral-100 transition-colors group"
          >
            <span>Ver colección</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-[120rem] mx-auto px-4 sm:px-8 lg:px-16">
        {/* Categories Grid */}
        <section className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((category) => (
            <Link
              key={category.title}
              className="group relative h-[400px] rounded-xl overflow-hidden cursor-pointer"
              href={`/rooms/${category.id}`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${category.cardImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-medium text-white">
                  {category.title}
                </h3>
                <p className="mt-2 text-neutral-200">
                  {category.cardDescription}
                </p>
              </div>
            </Link>
          ))}
        </section>

        {/* Featured Offers Section */}
        <section className="mt-16">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl font-medium text-neutral-900">
                Ofertas destacadas
              </h2>
              <p className="mt-1 text-neutral-600">
                ¡No te pierdas estas ofertas por tiempo limitado!
              </p>
            </div>
            <button className="text-neutral-900 flex items-center space-x-2 group">
              <span>Ver todas las ofertas</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {offers.map((offer) => (
              <div
                key={offer.name}
                className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row h-full">
                  <div className="relative w-full md:w-2/5 aspect-square md:aspect-auto">
                    <Image
                      src={offer.images[0]}
                      alt={offer.name}
                      priority
                      width={800}
                      height={800}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      -{offer.discount}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-between w-full md:w-3/5">
                    <div>
                      <h3 className="text-xl font-medium text-neutral-900">
                        {offer.name}
                      </h3>
                      <p className="mt-2 text-neutral-600">
                        {offer.description}
                      </p>
                      <div className="mt-4 flex items-center space-x-3">
                        <span className="text-2xl font-medium text-neutral-900">
                          ${offer.discountedPrice}
                        </span>
                        <span className="text-lg text-neutral-400 line-through">
                          ${offer.price}
                        </span>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-neutral-600">
                        <Timer className="h-5 w-5" />
                        <span>Termina en {offer.timeLeft}</span>
                      </div>
                      <Link
                        className="px-6 py-2 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-colors flex items-center space-x-2"
                        href={`/p/${offer.id}`}
                      >
                        <ShoppingBag className="h-4 w-4" />
                        <span>Ver</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <CarrouselProducts
          recommendations={recommendations}
          title={"Productos destacados"}
          description={"Diseños exclusivos seleccionados para ti"}
        />

        <Newsletter />
      </main>
    </div>
  );
}
