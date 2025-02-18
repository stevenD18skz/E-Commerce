import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { categories, recommendations } from "@/app/lib/data";
import Newsletter from "@/app/ui/Newsletter";
import CarrouselProducts from "@/app/ui/CarrouselProducts";
import SearchBar from "@/app/ui/SearchBar";
import { Suspense } from "react";

import TableCategorie from "@/app/ui/categoria/TableCategorie";
import TableCategorieSkeleton from "@/app/ui/categoria/TableCategorieSkeleton";

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
    <div className="min-h-screen bg-background bg-slate-100">
      {/* Hero Section with Search */}
      <section className="mb-8 relative bg-[url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=2000&auto=format')] bg-cover bg-center h-[400px]">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-6xl font-bold text-white mb-8">Shop</h1>
          <p className="text-2xl text-white mb-8">Give All You Need</p>
          <div className="max-w-xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Search on Stuffeus"
                className="w-full px-4 py-3 pl-12 bg-white rounded-full"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-primary text-primary-foreground rounded-full">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-[120rem] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex gap-8">
          {/* Sidebar actualizado */}
          <div className="w-64 flex-shrink-0">
            <SearchBar placeholder="Search invoices..." />
            {query}
            <h2 className="font-semibold mb-4">Category</h2>

            <div className="space-y-2">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/categories/${category.id}`}
                  className={`flex items-center w-full px-4 py-2 rounded-lg text-sm ${
                    "sofas" === category.id
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-accent"
                  }`}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Products Grid con Image optimizado */}
          <div className="flex-1">
            <Suspense
              key={query + currentPage}
              fallback={<TableCategorieSkeleton />}
            >
              <TableCategorie query={query} />
            </Suspense>

            {/* Paginación funcional */}
            <div className="flex items-center justify-center space-x-2 mt-8">
              <button disabled={currentPage === 1}>
                <ChevronLeft className="w-5 h-5" />
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button key={i} className={`w-8 h-8 rounded-lg  `}>
                  {i + 1}
                </button>
              ))}
              <button className="p-2 rounded-lg hover:bg-accent">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <CarrouselProducts
          recommendations={recommendations}
          title="You may also like"
          description="These are some of the products that other customers have bought together with the products in this page."
        ></CarrouselProducts>

        <Newsletter />
      </main>
    </div>
  );
}
