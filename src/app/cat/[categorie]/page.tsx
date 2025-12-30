import { ChevronLeft, ChevronRight, SlidersHorizontal } from "lucide-react";
import { recommendations } from "@/lib/data";
import CarrouselProducts from "@/components/CarrouselProducts";
import SearchBar from "@/components/ui/SearchBar";
import { Suspense } from "react";
import Hero from "@/components/ui/Hero";
import { products } from "@/lib/data";

import TableCategorie from "@/app/cat/[categorie]/components/TableCategorie";
import TableCategorieSkeleton from "@/app/cat/[categorie]/components/TableCategorieSkeleton";
import FiltersSidebar from "@/app/cat/[categorie]/components/FiltersSidebar";
import Pagination from "@/app/cat/[categorie]/components/pagination";

interface PageProps {
  params: Promise<{ categorie: string }>;
  searchParams: Promise<{ 
    query?: string; 
    page?: string; 
    itemsPerPage?: string }>;
}

export default async function Page(props: PageProps) {
  const params = await props.params;
  const searchParams = await props.searchParams;

  const categorieName = decodeURIComponent(params.categorie);
  const query = searchParams.query || "";
  const currentPage = Number(searchParams.page) || 1;

  const itemsPerPage = Number(searchParams.itemsPerPage) || 12;  

  const productsCategorie = [...products, ...products, ...products, ...products, ...products, ...products, ...products, ...products, ...products, ...products, ...products, ...products]

  const totalItems = productsCategorie.length;

  const productsVisible = productsCategorie.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const totalPages = Math.ceil(totalItems / itemsPerPage);



  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero slide={
        {
          id: 1,
          title: categorieName.charAt(0).toUpperCase() + categorieName.slice(1),
          description: "Encuentra el equilibrio perfecto entre comodidad y diseño para tu sala de estar.",
          image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop",
          cta: "Shop Now",
          link: `/cat/${categorieName}`,
        }
      } />

      {/* Main Content */}
      <main
        id="main-content"
        className="max-w-[120rem] mx-auto px-12 mt-12">
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
              <p className="text-[var(--text-secondary)] text-sm">{query ? `Resultados para "${query}"` : "Mostrando" + " " + itemsPerPage + " de " + totalItems + " productos"}</p>

              {/* Sort Dropdown (Static for UI) */}
              <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                
                <span>Mostrar:</span>
                <select className="bg-transparent font-medium text-[var(--text-primary)] focus:outline-none cursor-pointer">
                  <option value="12">12</option>
                  <option value="24">24</option>
                  <option value="48">48</option>
                  <option value="all">Todo</option>
                </select>


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
              <TableCategorie products={productsVisible} />
            </Suspense>

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              categorieName={categorieName}
              searchParams={searchParams}

            />

          </div>
        </div>

        <div className="">
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
