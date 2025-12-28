"use client";

import { Heart, ChevronRight, Star, Minus, Plus, Truck, Package } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import { useCurrency } from "@/context/CurrencyContext";

type Product = {
  id: string;
  name: string;
  price: number;
  reviews: number;
  rating: number;
  description: string;
  colors: string[];
  images: string[];
  delivery: {
    time: string;
    cost: number;
  };
};

export default function ProductDetails({ product }: { product: Product }) {
  const sizes = ["S", "M", "L", "XL"];
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[1]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const { formatPrice } = useCurrency();

  return (
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
      {/* Left Column - Gallery */}
      <div className="w-full lg:w-[60%] space-y-4">
        {/* Main Image */}
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 group cursor-zoom-in">
          <Image
            src={product.images[selectedImage]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-4 gap-4">
          {product.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={clsx(
                "relative aspect-square rounded-xl overflow-hidden border-2 transition-all",
                selectedImage === index
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
      <div className="w-full lg:w-[40%] flex flex-col pt-2">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-4xl font-light text-[var(--text-primary)] mb-2 tracking-tight">
              {product.name}
            </h1>
            <div className="flex items-center gap-2 mb-4">
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
            <p className="text-3xl font-medium text-[var(--text-primary)]">
              {formatPrice(product.price)}
            </p>
          </div>

          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="p-3 hover:bg-neutral-100 rounded-full transition-colors group"
            aria-label="Add to favorites"
          >
            <Heart
              className={clsx(
                "w-6 h-6 transition-colors",
                isFavorite
                  ? "fill-red-500 text-red-500"
                  : "text-neutral-400 group-hover:text-neutral-600"
              )}
            />
          </button>
        </div>

        {/* Description */}
        <div className="prose prose-neutral mb-8">
          <p className="text-[var(--text-secondary)] leading-relaxed font-light">
            {product.description}
          </p>
        </div>

        <div className="h-px bg-neutral-100 w-full mb-8" />

        {/* Options */}
        <div className="space-y-6 mb-8">
          {/* Colors */}
          <div>
            <span className="text-sm font-medium text-[var(--text-primary)] mb-3 block">Color</span>
            <div className="flex gap-3">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={clsx(
                    "w-10 h-10 rounded-full border-2 transition-all ring-offset-2",
                    selectedColor === color ? "border-neutral-900 scale-110" : "border-transparent hover:scale-105"
                  )}
                  style={{ backgroundColor: color }}
                  aria-label={`Select color ${color}`}
                />
              ))}
            </div>
          </div>

          {/* Sizes (Mockup mainly for furniture dimensions usually, but kept for logic consistency) */}
          <div>
            <span className="text-sm font-medium text-[var(--text-primary)] mb-3 block">Tamaño</span>
            <div className="flex gap-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={clsx(
                    "w-12 h-10 rounded-lg text-sm font-medium transition-all border",
                    selectedSize === size
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
        <div className="flex gap-4 mb-8">
          {/* Quantity */}
          <div className="flex items-center border border-neutral-200 rounded-full px-4 gap-4 h-14">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="text-neutral-500 hover:text-black transition-colors"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="font-medium text-[var(--text-primary)] w-4 text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
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
        <div className="bg-neutral-50 rounded-2xl p-5 space-y-4">
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
