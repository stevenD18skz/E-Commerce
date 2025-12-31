"use client";

import { useState } from "react";
import { Star, ThumbsUp, MoreHorizontal, Filter, ChevronDown, Check, User } from "lucide-react";
import clsx from "clsx";
import Image from "next/image";

// --- Mock Data ---

type Review = {
  id: string;
  author: string;
  avatar?: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  verified: boolean;
  images?: string[];
  helpfulCount: number;
};

const MOCK_REVIEWS: Review[] = [
  {
    id: "1",
    author: "Sofía Rodríguez",
    rating: 5,
    date: "12 de Octubre, 2024",
    title: "¡Superó mis expectativas!",
    content: "La calidad de este producto es increíble. El acabado es suave y se nota que los materiales son premium. Llegó antes de lo esperado y el empaque estaba muy cuidado. Definitivamente volveré a comprar.",
    verified: true,
    images: [
      "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&q=80&w=200",
      "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&q=80&w=200"
    ],
    helpfulCount: 24,
  },
  {
    id: "2",
    author: "Carlos Méndez",
    rating: 4,
    date: "5 de Septiembre, 2024",
    title: "Muy bueno, pero...",
    content: "El producto es excelente, pero el color es un poco más oscuro de lo que se ve en la foto. Aún así, combina perfecto con mi sala. La instalación fue muy sencilla.",
    verified: true,
    helpfulCount: 0,
  },
  {
    id: "3",
    author: "Ana García",
    rating: 5,
    date: "28 de Agosto, 2024",
    title: "Diseño elegante y minimalista",
    content: "Me encanta cómo se ve. Es exactamente lo que estaba buscando para darle un toque moderno a mi habitación. Muy recomendado.",
    verified: true,
    images: ["https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&q=80&w=200"],
    helpfulCount: 42,
  },
  {
    id: "4",
    author: "Javier López",
    rating: 3,
    date: "15 de Agosto, 2024",
    title: "Bien, precio calidad aceptable",
    content: "Cumple su función. No es lo mejor del mercado pero por el precio está bastante bien. El envío tardó un poco más de lo normal.",
    verified: false,
    helpfulCount: 5,
  },
  {
    id: "5",
    author: "Elena Torres",
    rating: 5,
    date: "2 de Agosto, 2024",
    title: "Maravilloso",
    content: "Compré dos y estoy fascinada. La atención al cliente también fue excelente cuando tuve una duda sobre las medidas.",
    verified: true,
    helpfulCount: 12,
  },
];

const RATING_BREAKDOWN = {
  5: 75,
  4: 15,
  3: 5,
  2: 3,
  1: 2,
};

// --- Components ---

function StarRating({ rating, size = "md" }: { rating: number; size?: "sm" | "md" | "lg" }) {
  const iconSize = size === "sm" ? "w-3 h-3" : size === "md" ? "w-4 h-4" : "w-5 h-5";
  return (
    <div className="flex gap-0.5 text-amber-400">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={clsx(
            iconSize,
            i < Math.floor(rating) ? "fill-current" : "text-neutral-200 fill-neutral-200"
          )}
        />
      ))}
    </div>
  );
}

export default function ProductReviews() {
  const [filter, setFilter] = useState("Más recientes");

  return (
    <section className="py-12 border-t border-neutral-100 mt-12 bg-white">
      <div className="max-w-7xl mx-auto px-[var(--spacing-md)]">
        <h2 className="text-5xl font-normal text-[var(--text-primary)] mb-8 tracking-tight">
          Reseñas de Clientes
        </h2>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column: Summary & Breakdown */}
          <div className="w-full lg:w-1/3 space-y-8">
            {/* Overall Rating */}
            <div className="bg-neutral-50 p-6 rounded-2xl">
              <div className="flex items-end gap-4 mb-2">
                <span className="text-6xl font-medium text-[var(--text-primary)] leading-none">4.8</span>
                <div className="mb-2">
                  <StarRating rating={5} size="md" />
                  <p className="text-sm text-[var(--text-secondary)] mt-1 font-medium">Basado en 128 reseñas</p>
                </div>
              </div>

              <div className="space-y-2 mt-6">
                {[5, 4, 3, 2, 1].map((star) => (
                  <div key={star} className="flex items-center gap-3 text-sm">
                    <span className="w-3 text-[var(--text-secondary)] font-medium">{star}</span>
                    <Star className="w-3 h-3 text-neutral-300 fill-neutral-300" />
                    <div className="flex-1 h-2 bg-neutral-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-amber-400 rounded-full"
                        style={{ width: `${RATING_BREAKDOWN[star as keyof typeof RATING_BREAKDOWN]}%` }}
                      />
                    </div>
                    <span className="w-8 text-right text-[var(--text-secondary)] opacity-60">
                      {RATING_BREAKDOWN[star as keyof typeof RATING_BREAKDOWN]}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Write Review CTA */}
            <div className="border border-neutral-200 rounded-2xl p-6 text-center space-y-3">
              <h3 className="font-medium text-[var(--text-primary)]">¿Tienes este producto?</h3>
              <p className="text-sm text-[var(--text-secondary)]">Comparte tu opinión con otros clientes y ayúdalos en su decisión.</p>
              <button className="w-full py-3 px-4 bg-white border border-neutral-300 text-[var(--text-primary)] font-medium rounded-full hover:border-black hover:bg-neutral-50 transition-all">
                Escribir una reseña
              </button>
            </div>
          </div>

          {/* Right Column: Reviews List */}
          <div className="w-full lg:w-2/3">
            {/* Controls / Filter */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-neutral-100">
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {["Todos", "Con Fotos", "5 Estrellas"].map((f) => (
                  <button
                    key={f}
                    className="whitespace-nowrap px-4 py-2 rounded-full border border-neutral-200 text-sm font-medium text-[var(--text-secondary)] hover:border-neutral-400 hover:text-[var(--text-primary)] transition-colors first:bg-neutral-900 first:text-white first:border-neutral-900"
                  >
                    {f}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-[var(--text-secondary)]">Ordenar por:</span>
                <button className="flex items-center gap-2 text-sm font-medium text-[var(--text-primary)] hover:underline">
                  Más relevantes <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* List */}
            <div className="space-y-8">
              {MOCK_REVIEWS.map((review) => (
                <div key={review.id} className="border-b border-neutral-100 pb-8 last:border-0 animation-fade-in">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 overflow-hidden">
                        {review.avatar ? (
                          <Image src={review.avatar} alt={review.author} width={40} height={40} className="w-full h-full object-cover" />
                        ) : (
                          <User className="w-5 h-5" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-medium text-[var(--text-primary)] text-sm">{review.author}</h4>
                        <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                          <span>{review.date}</span>
                          {review.verified && (
                            <span className="flex items-center gap-1 text-emerald-600 font-medium">
                              <Check className="w-3 h-3" /> Compra verificada
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <StarRating rating={review.rating} size="sm" />
                  </div>

                  <h3 className="font-medium text-[var(--text-primary)] mb-2">{review.title}</h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                    {review.content}
                  </p>

                  {review.images && review.images.length > 0 && (
                    <div className="flex gap-3 mb-4 overflow-x-auto scrollbar-hide">
                      {review.images.map((img, idx) => (
                        <div key={idx} className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border border-neutral-200 cursor-zoom-in group">
                          <Image src={img} alt="Review image" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center gap-6">
                    <button className="flex items-center gap-2 text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] group transition-colors">
                      <div className="p-1.5 rounded-full group-hover:bg-neutral-100 transition-colors">
                        <ThumbsUp className="w-4 h-4" />
                      </div>
                      Útil ({review.helpfulCount})
                    </button>
                    <button className="text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:underline">
                      Reportar
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button className="px-6 py-3 border border-neutral-200 rounded-full text-sm font-medium text-[var(--text-primary)] hover:border-neutral-900 transition-colors">
                Cargar más reseñas
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
