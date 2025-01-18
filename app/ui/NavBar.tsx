"use client";

import { Sofa, Menu, Search, User, ShoppingBag } from "lucide-react";
import {
  CookingPot,
  BedDouble,
  Tag,
  PaintRoller,
  Umbrella,
} from "lucide-react";

import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";

export default function NavBar() {
  const isMenuOpen = true;

  const path = usePathname();
  console.log(path);

  const categories = [
    { name: "Cocina", icon: <CookingPot />, ref: "/kitchen" },
    { name: "Sala", icon: <Sofa />, ref: "/room" },
    { name: "Habitación", icon: <BedDouble />, ref: "/Bedroom" },
    { name: "Ofertas", icon: <Tag />, ref: "/sales" },
    { name: "Decoración", icon: <PaintRoller />, ref: "/Decoration" },
    { name: "Exteriores", icon: <Umbrella />, ref: "/Outdoors" },
  ];

  return (
    <nav className="w-full px-6 py-4 bg-white border-b border-neutral-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Menu Button and Logo */}
        <div className="flex items-center space-x-6">
          <button
            className="p-2 hover:bg-neutral-50 rounded-lg transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6 text-neutral-700" />
          </button>

          <Link
            href="/"
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <Sofa className="h-8 w-8 text-neutral-800 group-hover:text-neutral-600 transition-colors" />
            <div className="flex flex-col">
              <h1 className="text-2xl font-light tracking-tight text-neutral-900">
                {" "}
                casa<span className="font-medium">moderna</span>
              </h1>
              <span className="text-xs tracking-widest text-neutral-400 uppercase">
                {" "}
                diseño & confort
              </span>
            </div>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="hidden md:block max-w-md w-full px-8">
          <form className="relative group">
            <input
              type="text"
              placeholder="Buscar muebles..."
              className="w-full px-6 py-3 pl-12 bg-white border border-neutral-100 rounded-xl text-sm text-neutral-600 placeholder:text-neutral-400 shadow-sm hover:shadow-md focus:shadow-md focus:outline-none focus:ring-2 focus:ring-neutral-200  transition-all duration-300"
            />
            <Search className="absolute left-4 top-3 h-5 w-5 text-neutral-400 group-hover:text-neutral-600 transition-colors duration-300" />
          </form>
        </div>

        {/* Navigation Icons */}
        <div className="flex items-center space-x-6">
          <button className="relative p-3 rounded-xl hover:bg-neutral-50    active:scale-95 transition-all duration-300">
            <User className="h-5 w-5 text-neutral-700" />
          </button>
          <button className="relative p-3 rounded-xl hover:bg-neutral-50    active:scale-95 transition-all duration-300 group">
            <ShoppingBag className="h-5 w-5 text-neutral-700" />
            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-neutral-800    text-white text-xs flex items-center justify-center   group-hover:scale-110 transition-transform">
              0
            </span>
          </button>
        </div>
      </div>

      {/* Categories Menu */}
      <div
        className={`absolute left-0 right-0 bg-white transform transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-82 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto pb-2 pt-4 px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <a
                href={category.ref}
                key={category.name}
                className={clsx(
                  "text-sm flex flex-col items-center justify-center space-y-2 p-1 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-all duration-200 text-left",
                  {
                    "outline-none ring-2 ring-neutral-200 bg-neutral-100":
                      path.includes(category.ref),
                  }
                )}
              >
                <div className="flex justify-center items-center">
                  {category.icon}
                </div>
                <p>{category.name}</p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="mt-4 md:hidden px-4">
        <form className="relative group">
          <input
            type="text"
            placeholder="Buscar muebles..."
            className="w-full px-6 py-3 pl-12 bg-white border border-neutral-100 rounded-xl     text-sm text-neutral-600 placeholder:text-neutral-400     shadow-sm hover:shadow-md focus:shadow-md     focus:outline-none focus:ring-2 focus:ring-neutral-200      transition-all duration-300"
          />
          <Search className="absolute left-4 top-3 h-5 w-5 text-neutral-400    group-hover:text-neutral-600 transition-colors duration-300" />
        </form>
      </div>
    </nav>
  );
}
