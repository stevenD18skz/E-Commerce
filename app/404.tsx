"use client";

import Link from "next/link";
import Image from "next/image";

import { Home, ArrowLeft } from "lucide-react";

export default function Custom404() {
  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        {/* Image */}
        <div className="relative w-full aspect-[4/3] mb-8">
          <Image
            src="https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=1200"
            alt="Peaceful living room"
            className="w-full h-full object-cover rounded-2xl"
            width={1200}
            height={900}
          />
          <div className="absolute inset-0 bg-neutral-900/10 rounded-2xl" />
        </div>

        {/* Content */}
        <h1 className="text-6xl font-light text-neutral-900 mb-4">404</h1>
        <h2 className="text-2xl font-medium text-neutral-800 mb-3">
          Página no encontrada
        </h2>
        <p className="text-neutral-600 mb-8 max-w-md mx-auto">
          Lo sentimos, parece que el espacio que buscas no existe. Pero no te
          preocupes, tenemos muchos otros diseños para inspirarte.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-neutral-100 text-neutral-900 rounded-full
                   inline-flex items-center space-x-2
                   hover:bg-neutral-200 transition-colors group w-full sm:w-auto justify-center"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            <span>Volver atrás</span>
          </button>
          <Link
            href="/"
            className="px-6 py-3 bg-neutral-900 text-white rounded-full
                   inline-flex items-center space-x-2
                   hover:bg-neutral-800 transition-colors group w-full sm:w-auto justify-center"
          >
            <Home className="h-4 w-4" />
            <span>Ir al inicio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
