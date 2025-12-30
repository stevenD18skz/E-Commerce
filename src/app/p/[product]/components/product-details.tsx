"use client";

import { Heart, Star, Minus, Plus, Truck, Package } from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import clsx from "clsx";
import { useCurrency } from "@/context/CurrencyContext";
import { inOffer, inWishlist } from "@/utils/products";
import { Product } from "@/types/product";



export default function ProductDetails({ product }: { product: Product }) {
  const sizes = ["S", "M", "L", "XL"];
  const [formData, setFormData] = useState({
    color: product.colors[0],
    size: sizes[1],
    image: 0,
    quantity: 1,
  });

  const [extraData, setExtraData] = useState<{ offer: any; wishlist: any }>({
    offer: null,
    wishlist: null,
  });

  const { formatPrice } = useCurrency();

  useEffect(() => {
    const offer = inOffer(product);
    const wishlist = inWishlist(product);

    setExtraData({
      offer: offer || null,
      wishlist: wishlist || null,
    });
  }, [product]);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const selectedElement = scrollContainerRef.current.children[formData.image] as HTMLElement;
      if (selectedElement) {
        selectedElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [formData.image]);

  return (
    <div className="flex flex-col lg:flex-row gap-[var(--spacing-md)]">
      {/* Left Column - Gallery */}
      <div className="w-full lg:w-[50%] space-y-[var(--spacing-md)]">
        {/* Main Image */}
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-zoom-in">
          <Image
            src={product.images[formData.image]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            priority
          />
        </div>

        {/* Thumbnails Carousel */}
        <div ref={scrollContainerRef} className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 snap-x">
          {product.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setFormData({ ...formData, image: index })}
              className={clsx(
                "relative flex-shrink-0 w-32 h-32 rounded-2xl overflow-hidden border-2 transition-all snap-start",
                formData.image === index
                  ? "border-neutral-900 opacity-100"
                  : "border-transparent opacity-70 hover:opacity-100"
              )}
            >
              <Image
                src={image}
                alt={`${product.name} view ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Right Column - Product Info */}
      <div className="w-full lg:w-[50%] space-y-[var(--spacing-md)]">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-light text-[var(--text-primary)] mb-2 tracking-tight">
              {product.name}
            </h1>

            <div className="flex items-center gap-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={clsx(
                      "w-4 h-4",
                      i < Math.floor(product.rating) ? "fill-current" : "text-neutral-200 fill-neutral-200"
                    )}
                  />
                ))}
              </div>
              <span className="text-sm text-[var(--text-secondary)] font-medium underline underline-offset-4 cursor-pointer hover:text-[var(--text-primary)]">
                {product.reviews} reseñas
              </span>
            </div>

            {extraData.offer ? (
              <div className="">
                <p className="text-2xl font-medium text-rose-500">
                  {formatPrice(product.price - (product.price * extraData.offer.discount / 100))}
                </p>
                <p className="text-lg font-medium text-[var(--text-primary)] line-through italic">
                  {formatPrice(product.price)}
                </p>
              </div>
            ) : (
              <p className="text-lg font-medium text-[var(--text-primary)]">
                {formatPrice(product.price)}
              </p>
            )
            }
          </div>

          <button
            onClick={() => setExtraData({ ...extraData, wishlist: true })}
            className="p-3 hover:bg-neutral-100 rounded-full transition-colors group"
            aria-label="Add to favorites"
          >
            <Heart
              className={clsx(
                "w-6 h-6 transition-colors",
                extraData.wishlist
                  ? "fill-red-500 text-red-500"
                  : "text-neutral-400 group-hover:text-neutral-600"
              )}
            />
          </button>
        </div>

        {/* Description */}
        <div className="prose prose-neutral">
          <p className="text-[var(--text-secondary)] leading-relaxed font-light">
            {product.description}
          </p>
        </div>

        {/* Options */}
        <div className="">
          {/* Colors */}
          <div>
            <span className="text-sm font-medium text-[var(--text-primary)] block">Color</span>
            <div className="flex gap-3">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setFormData({ ...formData, color: color })}
                  className={clsx(
                    "w-10 h-10 rounded-full border-2 transition-all ring-offset-2",
                    formData.color === color ? "border-neutral-900 scale-110" : "border-transparent hover:scale-105"
                  )}
                  style={{ backgroundColor: color }}
                  aria-label={`Select color ${color}`}
                />
              ))}
            </div>
          </div>

          {/* Sizes (Mockup mainly for furniture dimensions usually, but kept for logic consistency) */}
          <div>
            <span className="text-sm font-medium text-[var(--text-primary)] block">Tamaño</span>
            <div className="flex gap-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setFormData({ ...formData, size: size })}
                  className={clsx(
                    "w-12 h-10 rounded-lg text-sm font-medium transition-all border",
                    formData.size === size
                      ? "bg-neutral-900 text-white border-neutral-900"
                      : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400"
                  )}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          {/* Quantity */}
          <div className="flex items-center border border-neutral-200 rounded-full px-4 gap-4 h-14">
            <button
              onClick={() => setFormData({ ...formData, quantity: Math.max(1, formData.quantity - 1) })}
              className="text-neutral-500 hover:text-black transition-colors"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="font-medium text-[var(--text-primary)] w-4 text-center">{formData.quantity}</span>
            <button
              onClick={() => setFormData({ ...formData, quantity: formData.quantity + 1 })}
              className="text-neutral-500 hover:text-black transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <button className="flex-1 bg-neutral-900 text-white font-medium rounded-full h-14 hover:bg-black transition-all shadow-lg shadow-neutral-900/10 active:scale-[0.98]">
            Añadir al carrito
          </button>
        </div>

        {/* Delivery Info */}
        <div className="bg-neutral-100 rounded-2xl p-5 space-y-4">
          <div className="flex items-start gap-4">
            <div className="bg-white p-2.5 rounded-full shadow-sm text-neutral-700">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <p className="font-medium text-[var(--text-primary)] text-sm">Envío a Domicilio</p>
              <p className="text-[var(--text-secondary)] text-sm mt-0.5">
                Entrega estimada: <span className="text-black font-medium">{product.delivery.time}</span>
              </p>
            </div>
          </div>
          <div className="h-px bg-neutral-200/50 w-full" />
          <div className="flex items-start gap-4">
            <div className="bg-white p-2.5 rounded-full shadow-sm text-neutral-700">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <p className="font-medium text-[var(--text-primary)] text-sm">Garantía de Devolución</p>
              <p className="text-[var(--text-secondary)] text-sm mt-0.5">
                30 días para devoluciones gratuitas.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
