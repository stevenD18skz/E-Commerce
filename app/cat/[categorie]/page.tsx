"use client";

import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const categories = [
  { id: "all", name: "All Product", active: true },
  { id: "home", name: "For Home", active: false },
  { id: "music", name: "For Music", active: false },
  { id: "phone", name: "For Phone", active: false },
  { id: "storage", name: "For Storage", active: false },
];

const products = [
  {
    id: "phone-holder",
    name: "Phone Holder Sakti",
    price: 29.9,
    rating: 4.5,
    reviews: 120,
    category: "Other",
    image:
      "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?w=500&auto=format",
  },
  {
    id: "headphones",
    name: "Headsound",
    price: 12.0,
    rating: 4.7,
    reviews: 175,
    category: "Music",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format",
  },
  {
    id: "cleaner",
    name: "Adudu Cleaner",
    price: 29.9,
    rating: 4.4,
    reviews: 89,
    category: "Other",
    image:
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=500&auto=format",
  },
  {
    id: "ilana-sofa",
    name: "Ilana",
    price: 430.99,
    rating: 4.5,
    reviews: 230,
    category: "Home",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "stuffus-32",
    name: "Stuffus Peker 32",
    price: 9.9,
    rating: 4.6,
    reviews: 156,
    category: "Other",
    image:
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&auto=format",
  },
  {
    id: "stuffus-r175",
    name: "Stuffus R175",
    price: 34.1,
    rating: 4.8,
    reviews: 203,
    category: "Music",
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format",
  },
];

const recommendations = [
  {
    id: "tws",
    name: "TWS Bujug",
    price: 29.9,
    rating: 4.3,
    reviews: 89,
    category: "Other",
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format",
  },
  {
    id: "headphones-baptis",
    name: "Headsound Baptis",
    price: 12.0,
    rating: 4.5,
    reviews: 120,
    category: "Music",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format",
  },
  {
    id: "piano",
    name: "Grand Piano",
    price: 29.9,
    rating: 4.9,
    reviews: 45,
    category: "Music",
    image:
      "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=500&auto=format",
  },
];

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  return (
    <div className="min-h-screen bg-background bg-slate-100">
      {/* Hero Section with Search */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=2000&auto=format')] bg-cover bg-center h-[400px]">
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
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <h2 className="font-semibold mb-4">Category</h2>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`flex items-center w-full px-4 py-2 rounded-lg text-sm ${
                    category.active
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-accent"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <a
                  key={product.id}
                  className="bg-white rounded-lg shadow-sm"
                  href={`/p/${product.id}`}
                >
                  <div className="relative aspect-square">
                    <img
                      src={product.image}
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
                </a>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center space-x-2 mt-8">
              <button className="p-2 rounded-lg hover:bg-accent">
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

        {/* Recommendations */}
        <section className="mt-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Explore our recommendations</h2>
            <div className="flex space-x-2">
              <button className="p-2 rounded-full hover:bg-accent">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full hover:bg-accent">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendations.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-sm">
                <div className="relative aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    //fill
                    className="object-cover rounded-t-lg"
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
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="mt-16 bg-gray-900 rounded-lg text-white p-8">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold mb-2">
                Ready to Get Our New Stuff?
              </h2>
              <p className="text-gray-400">Stuffeus for Homes and Needs</p>
            </div>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 bg-white/10 rounded-full text-white placeholder:text-gray-400"
              />
              <button className="px-6 py-2 bg-white text-gray-900 rounded-full hover:bg-gray-100">
                Send
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
