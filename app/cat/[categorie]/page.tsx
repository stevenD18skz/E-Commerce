"use client";

import { useParams, usePathname } from "next/navigation";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { categories, products, recommendations } from "@/app/lib/data";
import Newsletter from "@/app/ui/Newsletter";
import CarrouselProducts from "@/app/ui/CarrouselProducts";

export default function Page() {
  const params = useParams();
  const categorie = params.categorie as string;
  const [currentPage, setCurrentPage] = useState(1);
  const pathName = usePathname();
  const totalPages = 10;

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

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
            <h2 className="font-semibold mb-4">Category</h2>
            <div className="space-y-2">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/categories/${category.id}`}
                  className={`flex items-center w-full px-4 py-2 rounded-lg text-sm ${
                    categorie === category.id
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products
                .filter((p) => p.category === categorie)
                .map((product) => (
                  <Link
                    key={product.id}
                    href={`/p/${encodeURIComponent(product.id)}`}
                    className="bg-white rounded-lg shadow-sm block"
                  >
                    <div className="relative aspect-square">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        //fill
                        //className="object-cover rounded-t-lg"
                        className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                      />
                      <span className="absolute top-3 right-3 px-2 py-1 text-xs bg-white rounded">
                        {product.category}
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium">{product.name}</h3>
                      <div className="flex items-center mt-1">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <span key={i}>★</span>
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground ml-2">
                          {product.reviews} Reviews
                        </span>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <span className="font-bold">
                          ${product.price.toFixed(2)}
                        </span>
                        <div className="space-x-2">
                          <button className="px-4 py-2 text-sm border rounded-md hover:bg-accent">
                            Add to Cart
                          </button>
                          <button className="px-4 py-2 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
                            Buy Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>

            {/* Paginación funcional */}
            <div className="flex items-center justify-center space-x-2 mt-8">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  className={`w-8 h-8 rounded-lg ${
                    currentPage === i + 1
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-accent"
                  }`}
                >
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
