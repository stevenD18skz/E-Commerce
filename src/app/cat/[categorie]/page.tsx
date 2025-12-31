import { SlidersHorizontal } from "lucide-react";
import { MOCK_RECOMMENDATIONS, MOCK_PRODUCTS } from "@/lib/data";
import CarrouselProducts from "@/components/CarrouselProducts";
import SearchBar from "@/components/ui/SearchBar";
import { Suspense } from "react";
import Hero from "@/components/ui/Hero";

import TableCategorie from "@/app/cat/[categorie]/components/TableCategorie";
import TableCategorieSkeleton from "@/app/cat/[categorie]/components/TableCategorieSkeleton";
import FiltersSidebar from "@/app/cat/[categorie]/components/FiltersSidebar";
import Pagination from "@/app/cat/[categorie]/components/pagination";
import SortControls from "@/app/cat/[categorie]/components/SortControls";

interface PageProps {
  params: Promise<{ categorie: string }>;
  searchParams: Promise<{
    query?: string;
    page?: string;
    itemsPerPage?: string;
    minPrice?: string;
    maxPrice?: string;
    brands?: string;
    colors?: string;
    rating?: string;
    sort?: string;
  }>;
}

// Helper to map color names to approximate hex codes found in data
const colorMap: Record<string, string[]> = {
  "Beige": ["#E5B168", "#F5E6CA", "#F4F1DE", "#D4A373", "#f5f5dc"],
  "Black": ["#000000", "#1B263B", "#2B2D42", "#1F2937", "#2F3E46", "#3A405A", "#0F4C5C"],
  "White": ["#FFFFFF", "#F8F9FA", "#F3F4F6", "#F5F5F5"],
  "Brown": ["#582F0E", "#BC6C25", "#8b4513"],
  "Gray": ["#9CA3AF", "#6B7280", "#6D6875", "#4A5759", "#ADB5BD", "#D1D5DB", "#374151"],
  "Blue": ["#4A5B7D", "#0F4C5C", "#3A405A", "#2F4858", "#5F0F40"], // Include some purples/darks
  // Add broad matches
};

export default async function Page(props: PageProps) {
  const params = await props.params;
  const searchParams = await props.searchParams;

  const categorieName = decodeURIComponent(params.categorie);
  const query = searchParams.query || "";
  const currentPage = Number(searchParams.page) || 1;
  const itemsPerPageParam = searchParams.itemsPerPage || "12";
  const itemsPerPage = itemsPerPageParam === "all" ? 1000 : Number(itemsPerPageParam);

  const minPrice = Number(searchParams.minPrice) || 0;
  const maxPrice = Number(searchParams.maxPrice) || 10000;
  const brandsFilter = searchParams.brands?.split(",") || [];
  const colorsFilter = searchParams.colors?.split(",") || [];
  const ratingFilter = Number(searchParams.rating) || 0;
  const sortOption = searchParams.sort || "relevance";

  // Base Products (Duplicated for demo volume as in original)
  const productsCategorie = [...MOCK_PRODUCTS, ...MOCK_PRODUCTS, ...MOCK_PRODUCTS, ...MOCK_PRODUCTS, ...MOCK_PRODUCTS, ...MOCK_PRODUCTS, ...MOCK_PRODUCTS, ...MOCK_PRODUCTS, ...MOCK_PRODUCTS, ...MOCK_PRODUCTS, ...MOCK_PRODUCTS, ...MOCK_PRODUCTS];

  // Apply Filters
  const filteredProducts = productsCategorie.filter((product) => {
    // 1. Search Query
    if (query && !product.name.toLowerCase().includes(query.toLowerCase())) {
      return false;
    }
    // 2. Price Range
    if (product.price < minPrice || product.price > maxPrice) {
      return false;
    }
    // 3. Brands
    if (brandsFilter.length > 0 && (!product.brand || !brandsFilter.includes(product.brand))) {
      return false;
    }
    // 4. Rating
    if (product.rating < ratingFilter) {
      return false;
    }
    // 5. Colors (Approximate Check)
    if (colorsFilter.length > 0) {
      const productHasColor = product.colors.some(c => {
        return colorsFilter.some(filterColor => {
          const mappedHexes = colorMap[filterColor] || [];
          return mappedHexes.some(h => h.toLowerCase() === c.toLowerCase());
        });
      });
      if (!productHasColor) return false;
    }

    return true;
  });

  // Apply Sorting
  filteredProducts.sort((a, b) => {
    switch (sortOption) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "newest":
        // Assuming no date, maybe sort by ID or just keep order
        return 0;
      case "relevance":
      default:
        return 0; // Keep original order (or sort by rating/reviews if desired)
    }
  });


  const totalItems = filteredProducts.length;
  const start = (currentPage - 1) * itemsPerPage;
  const end = Math.min(start + itemsPerPage, totalItems);
  const productsVisible = filteredProducts.slice(start, end);

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
        className="max-w-[120rem] mx-auto p-12">
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
              <p className="text-[var(--text-secondary)] text-sm">
                {query
                  ? `Resultados para "${query}"`
                  : `Mostrando ${productsVisible.length > 0 ? start + 1 : 0} - ${end} de ${totalItems} productos`
                }
              </p>

              {/* Sort Dropdown */}
              <SortControls />
            </div>

            <Suspense
              key={JSON.stringify(searchParams)}
              fallback={<TableCategorieSkeleton />}
            >
              <TableCategorie products={productsVisible} />
            </Suspense>

            {/* Pagination */}
            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                categorieName={categorieName}
                searchParams={searchParams}
              />
            )}

          </div>
        </div>

        <div className="">
          <CarrouselProducts
            recommendations={MOCK_RECOMMENDATIONS}
            title="También te podría gustar"
            description="Productos comprados frecuentemente con esta colección."
          />
        </div>
      </main>
    </div>
  );
}
