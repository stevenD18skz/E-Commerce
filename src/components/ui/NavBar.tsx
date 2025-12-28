"use client";

import { Sofa, Menu, Search, User, ShoppingBag, ChevronDown } from "lucide-react";
import {
  CookingPot,
  BedDouble,
  Tag,
  PaintRoller,
  Umbrella,
} from "lucide-react";


import ReactCountryFlag from "react-country-flag";

import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useCurrency, Currency } from "../../context/CurrencyContext";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = usePathname();
  const { currency, setCurrency } = useCurrency();
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const currencyRef = useRef<HTMLDivElement>(null);

  const categories = [
    { name: "Cocina", icon: <CookingPot />, ref: "/rooms/kitchen" },
    { name: "Sala", icon: <Sofa />, ref: "/rooms/living-room" },
    { name: "Habitación", icon: <BedDouble />, ref: "/rooms/bedroom" },
    { name: "Ofertas", icon: <Tag />, ref: "/rooms/sales" },
    { name: "Decoración", icon: <PaintRoller />, ref: "/rooms/decoration" },
    { name: "Exteriores", icon: <Umbrella />, ref: "/rooms/outdoors" },
  ];

  const flags: Record<Currency, string> = {
    USD: "US",
    EUR: "EU",
    COP: "CO",
    GBP: "GB",
  };

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!currencyRef.current) return;
      // if click is outside the currency menu, close it
      if (
        currencyOpen &&
        currencyRef.current &&
        !currencyRef.current.contains(e.target as Node)
      ) {
        setCurrencyOpen(false);
      }
    };

    document.addEventListener("click", onDocClick);
    return () => {
      document.removeEventListener("click", onDocClick);
    };
  }, [currencyOpen]);

  const currencies: { name: string; code: string; flag: string; value: Currency }[] = [
    { name: "Dólares", code: "USD", flag: "US", value: "USD" },
    { name: "Euros", code: "EUR", flag: "EU", value: "EUR" },
    { name: "Pesos", code: "COP", flag: "CO", value: "COP" },
    { name: "Libras", code: "GBP", flag: "GB", value: "GBP" },
  ];


  return (
    <nav className="w-full px-6 py-4 relative bg-white border-b border-neutral-100 top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Menu Button and Logo */}
        <div className="flex items-center space-x-6">
          <button
            className="p-2 hover:bg-neutral-50 rounded-lg transition-colors duration-200"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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

          <div ref={currencyRef} className="relative">
            <button
              aria-haspopup="menu"
              aria-expanded={currencyOpen}
              onClick={() => setCurrencyOpen((v) => !v)}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-md font-medium hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-[--indigo]"
            >
              <span className="min-w-[48px] flex items-center gap-2">
                <ReactCountryFlag
                  countryCode={flags[currency] || "US"}
                  svg
                  style={{ width: 20, height: 20 }}
                  title={flags[currency]}
                />
                <span className="hidden sm:inline">
                  {currency}
                </span>
              </span>
              <ChevronDown className="h-4 w-4 text-gray-300" />
            </button>

            {currencyOpen && (
              <ul
                role="menu"
                className="absolute right-0 mt-2 w-56 rounded-lg bg-neutral-50 py-2 shadow-lg ring-1 ring-neutral-100 ring-opacity-30 z-50"
              >
                {currencies.map((c) => (
                  <li key={c.code} role="none">
                    <button
                      role="menuitem"
                      onClick={() => {
                        setCurrency(c.value);
                        setCurrencyOpen(false);
                      }}
                      className="flex w-full items-center justify-between gap-3 px-4 py-2 text-md text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
                    >
                      <span className="flex items-center gap-3">
                        <ReactCountryFlag
                          countryCode={c.flag || "US"}
                          svg
                          style={{ width: 18, height: 18 }}
                        />
                        <span className="truncate">{c.name}</span>
                      </span>
                      <span className="text-xs text-neutral-400">{c.code}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

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
        className={clsx(
          "absolute left-0 right-0 bg-white border-b border-neutral-100 shadow-xl transition-all duration-500 overflow-hidden z-40",
          isMenuOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="max-w-7xl mx-auto pb-2 pt-4 px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link
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
              </Link>
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
