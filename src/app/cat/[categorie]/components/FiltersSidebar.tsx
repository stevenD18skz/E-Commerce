"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider"; // Assuming you might have a slider, if not I'll just use inputs or standard HTML range for now. I'll stick to simple first.
import { Check, ChevronDown, ChevronUp } from "lucide-react";

export default function FiltersSidebar() {
    const [priceRange, setPriceRange] = useState([0, 5000]);
    const [openSections, setOpenSections] = useState({
        price: true,
        brands: true,
        colors: true,
        availability: false,
    });

    const toggleSection = (section: keyof typeof openSections) => {
        setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
    };

    const brands = ["IKEA", "Ashley Furniture", "Herman Miller", "West Elm", "Pottery Barn"];
    const colors = [
        { name: "Beige", class: "bg-[#f5f5dc]" },
        { name: "Black", class: "bg-black" },
        { name: "White", class: "bg-white border" },
        { name: "Brown", class: "bg-[#8b4513]" },
        { name: "Gray", class: "bg-gray-500" },
        { name: "Blue", class: "bg-blue-600" },
    ];

    return (
        <div className="w-full space-y-8 pr-4">

            {/* Price Filter */}
            <div className="border-b border-neutral-100 pb-6">
                <button
                    onClick={() => toggleSection('price')}
                    className="flex items-center justify-between w-full mb-4 group"
                >
                    <h3 className="text-sm font-medium text-[var(--text-primary)] uppercase tracking-wider">Precio</h3>
                    {openSections.price ? <ChevronUp className="w-4 h-4 text-neutral-400 group-hover:text-black" /> : <ChevronDown className="w-4 h-4 text-neutral-400 group-hover:text-black" />}
                </button>

                {openSections.price && (
                    <div className="space-y-4 animate-in slide-in-from-top-2 duration-200">
                        <div className="flex gap-4 items-center">
                            <div className="relative">
                                <span className="absolute left-3 top-2.5 text-xs text-neutral-400">$</span>
                                <input
                                    type="number"
                                    value={priceRange[0]}
                                    onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                                    className="w-full pl-6 pr-2 py-2 text-sm border border-neutral-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                                />
                            </div>
                            <span className="text-neutral-300">-</span>
                            <div className="relative">
                                <span className="absolute left-3 top-2.5 text-xs text-neutral-400">$</span>
                                <input
                                    type="number"
                                    value={priceRange[1]}
                                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                                    className="w-full pl-6 pr-2 py-2 text-sm border border-neutral-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                                />
                            </div>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="10000"
                            value={priceRange[1]}
                            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                            className="w-full h-1 bg-neutral-100 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:rounded-full hover:[&::-webkit-slider-thumb]:scale-110 transition-all"
                        />
                    </div>
                )}
            </div>

            {/* Brands Filter */}
            <div className="border-b border-neutral-100 pb-6">
                <button
                    onClick={() => toggleSection('brands')}
                    className="flex items-center justify-between w-full mb-4 group"
                >
                    <h3 className="text-sm font-medium text-[var(--text-primary)] uppercase tracking-wider">Marcas</h3>
                    {openSections.brands ? <ChevronUp className="w-4 h-4 text-neutral-400 group-hover:text-black" /> : <ChevronDown className="w-4 h-4 text-neutral-400 group-hover:text-black" />}
                </button>

                {openSections.brands && (
                    <div className="space-y-2 animate-in slide-in-from-top-2 duration-200">
                        {brands.map((brand) => (
                            <label key={brand} className="flex items-center gap-3 cursor-pointer group hover:bg-neutral-50 p-2 rounded-lg -mx-2 transition-colors">
                                <div className="relative flex items-center">
                                    <input type="checkbox" className="peer w-4 h-4 border-2 border-neutral-300 rounded appearance-none checked:bg-black checked:border-black transition-all" />
                                    <Check className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100 left-0.5" />
                                </div>
                                <span className="text-sm text-neutral-600 group-hover:text-black transition-colors">{brand}</span>
                            </label>
                        ))}
                    </div>
                )}
            </div>

            {/* Colors Filter */}
            <div className="border-b border-neutral-100 pb-6">
                <button
                    onClick={() => toggleSection('colors')}
                    className="flex items-center justify-between w-full mb-4 group"
                >
                    <h3 className="text-sm font-medium text-[var(--text-primary)] uppercase tracking-wider">Colores</h3>
                    {openSections.colors ? <ChevronUp className="w-4 h-4 text-neutral-400 group-hover:text-black" /> : <ChevronDown className="w-4 h-4 text-neutral-400 group-hover:text-black" />}
                </button>

                {openSections.colors && (
                    <div className="grid grid-cols-6 gap-2 animate-in slide-in-from-top-2 duration-200">
                        {colors.map((color) => (
                            <button
                                key={color.name}
                                className={`w-8 h-8 rounded-full ${color.class} ${color.name === 'White' ? 'border-neutral-200' : ''} hover:scale-110 hover:ring-2 hover:ring-offset-2 hover:ring-neutral-200 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black`}
                                title={color.name}
                                aria-label={`Select ${color.name}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
