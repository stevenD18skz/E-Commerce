"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Trash2, ShoppingBag, Star, ArrowRight } from "lucide-react";
import { useCurrency } from "@/context/CurrencyContext";
import { Product } from "@/types/product";
import { MOCK_WISHLIST } from "@/lib/data";




export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState<Product[]>(MOCK_WISHLIST);
  const { formatPrice } = useCurrency();

  const handleRemoveFromWishlist = (id: string) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-white px-4">
        <div className="text-center space-y-6 max-w-md">
          <div className="bg-neutral-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-8 h-8 text-neutral-300" />
          </div>
          <h1 className="text-3xl font-light text-neutral-900">
            Tu lista de deseos está vacía
          </h1>
          <p className="text-neutral-500 font-light text-lg">
            Guarda aquí los artículos que más te gusten para no perderlos de vista.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-neutral-900 text-white px-8 py-4 rounded-full font-medium hover:bg-black transition-all shadow-lg shadow-neutral-900/10 hover:shadow-xl mt-4 group"
          >
            Explorar productos
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-20">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-neutral-900 mb-4 tracking-tight">
            Lista de Deseos
          </h1>
          <p className="text-neutral-500 text-lg font-light">
            {wishlistItems.length} {wishlistItems.length === 1 ? 'artículo' : 'artículos'} guardados
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10 md:gap-y-12">
          {wishlistItems.map((product) => (
            <div key={product.id} className="group flex flex-col gap-4">
              {/* Image Card */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-neutral-100/50">
                <Link href={`/p/${product.id}`} className="block h-full w-full">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </Link>

                {/* Remove Button */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleRemoveFromWishlist(product.id);
                  }}
                  className="absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur-md rounded-full text-neutral-400 hover:text-red-500 hover:bg-white transition-all shadow-sm z-10 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:translate-x-4 lg:group-hover:translate-x-0 duration-300"
                  aria-label="Remove from wishlist"
                >
                  <Trash2 className="w-5 h-5" />
                </button>

                {/* Rating Badge */}
                <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md px-2.5 py-1.5 rounded-lg shadow-sm flex items-center gap-1.5 pointer-events-none">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="text-xs font-semibold text-neutral-700">{product.rating}</span>
                </div>

                {/* Quick Add Overlay (Desktop) */}
                <div className="absolute inset-x-4 bottom-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10 hidden lg:block">
                  <button className="w-full bg-white/95 backdrop-blur-md text-neutral-900 font-medium py-3 rounded-xl hover:bg-neutral-900 hover:text-white transition-all shadow-lg shadow-black/5 flex items-center justify-center gap-2">
                    <ShoppingBag className="w-4 h-4" />
                    Añadir al carrito
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-1">
                <div className="flex justify-between items-start gap-4">
                  <Link
                    href={`/p/${product.id}`}
                    className="text-lg font-medium text-neutral-800 hover:text-black transition-colors line-clamp-1"
                  >
                    {product.name}
                  </Link>
                  <span className="font-semibold text-neutral-900 whitespace-nowrap">
                    {formatPrice(product.price)}
                  </span>
                </div>
                <p className="text-sm text-neutral-500 font-light line-clamp-1">
                  {product.category}
                </p>

                {/* Mobile Add to Cart Button */}
                <button className="w-full mt-2 lg:hidden bg-neutral-100 text-neutral-900 font-medium py-2.5 rounded-xl hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 text-sm">
                  <ShoppingBag className="w-4 h-4" />
                  Añadir al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
