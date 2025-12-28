import { ChevronLeft, ChevronRight, SlidersHorizontal } from "lucide-react";
import Link from "next/link";
import { categories, recommendations } from "@/lib/data";
import CarrouselProducts from "@/components/ui/CarrouselProducts";
import SearchBar from "@/components/ui/SearchBar";
import { Suspense } from "react";

import TableCategorie from "@/app/cat/[categorie]/components/TableCategorie";
import TableCategorieSkeleton from "@/app/cat/[categorie]/components/TableCategorieSkeleton";
import FiltersSidebar from "@/app/cat/[categorie]/components/FiltersSidebar";

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = 10;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[300px] mb-12">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?w=2000&auto=format')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-neutral-900/40" />
        <div className="relative h-full max-w-[120rem] mx-auto px-8 lg:px-16 flex flex-col justify-center">
          <span className="text-white/80 font-medium tracking-wide uppercase text-sm mb-2">Colección</span>
          <h1 className="text-5xl font-light text-white mb-6">Sofas & Sillones</h1>
          <p className="text-xl text-white/90 font-light max-w-xl">Encuentra el equilibrio perfecto entre comodidad y diseño para tu sala de estar.</p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-[120rem] mx-auto px-4 sm:px-8 lg:px-16 pb-20">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Sidebar */}
          <aside className="w-full lg:w-72 flex-shrink-0 space-y-8">
            <div className="hidden lg:block">
              <SearchBar placeholder="Buscar productos..." />
            </div>

            {/* Mobile Filter Toggle (Could be functional in real app) */}
            <button className="lg:hidden w-full flex items-center justify-center gap-2 py-3 border border-neutral-200 rounded-lg font-medium">
              <SlidersHorizontal className="w-4 h-4" /> Filtros
            </button>

            <div className="hidden lg:block">
              <FiltersSidebar />
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-[var(--text-secondary)] text-sm">{query ? `Resultados para "${query}"` : "Mostrando 12 de 45 productos"}</p>

              {/* Sort Dropdown (Static for UI) */}
              <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                <span>Ordenar por:</span>
                <select className="bg-transparent font-medium text-[var(--text-primary)] focus:outline-none cursor-pointer">
                  <option>Relevancia</option>
                  <option>Precio: Menor a Mayor</option>
                  <option>Precio: Mayor a Menor</option>
                  <option>Lo más nuevo</option>
                </select>
              </div>
            </div>

            <Suspense
              key={query + currentPage}
              fallback={<TableCategorieSkeleton />}
            >
              <TableCategorie query={query} />
            </Suspense>

            {/* Pagination */}
            <div className="flex items-center justify-center space-x-2 mt-16">
              <button disabled={currentPage === 1} className="p-2 rounded-full hover:bg-neutral-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-1">
                {[1, 2, 3, '...', 10].map((page, i) => (
                  <button
                    key={i}
                    className={`w-10 h-10 rounded-full text-sm font-medium transition-colors ${page === currentPage ? "bg-neutral-900 text-white" : "hover:bg-neutral-100 text-neutral-600"}`}
                    disabled={typeof page === 'string'}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button className="p-2 rounded-full hover:bg-neutral-100 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-24 border-t border-neutral-100 pt-16">
          <CarrouselProducts
            recommendations={recommendations}
            title="También te podría gustar"
            description="Productos comprados frecuentemente con esta colección."
          />
        </div>
      </main>
    </div>
  );
}
