"use client";

import { useState, useEffect } from "react";
import { Check, ChevronDown, ChevronUp, Star } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

export default function FiltersSidebar() {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Initial state from URL
    const initialMinPrice = Number(searchParams.get("minPrice")) || 0;
    const initialMaxPrice = Number(searchParams.get("maxPrice")) || 5000;
    const initialBrands = searchParams.get("brands")?.split(",").filter(Boolean) || [];
    const initialColors = searchParams.get("colors")?.split(",").filter(Boolean) || [];
    const initialRating = Number(searchParams.get("rating")) || 0;

    const [priceRange, setPriceRange] = useState([initialMinPrice, initialMaxPrice]);
    const [selectedBrands, setSelectedBrands] = useState<string[]>(initialBrands);
    const [selectedColors, setSelectedColors] = useState<string[]>(initialColors);
    const [selectedRating, setSelectedRating] = useState<number>(initialRating);

    const [openSections, setOpenSections] = useState({
        price: true,
        brands: true,
        colors: true,
        rating: true,
        availability: false,
    });

    const toggleSection = (section: keyof typeof openSections) => {
        setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
    };

    const updateURL = (minPrice: number, maxPrice: number, brands: string[], colors: string[], rating: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("minPrice", minPrice.toString());
        params.set("maxPrice", maxPrice.toString());

        if (brands.length > 0) params.set("brands", brands.join(","));
        else params.delete("brands");

        if (colors.length > 0) params.set("colors", colors.join(","));
        else params.delete("colors");

        if (rating > 0) params.set("rating", rating.toString());
        else params.delete("rating");

        params.set("page", "1"); // Reset page on filter change
        router.push(`?${params.toString()}`, { scroll: false });
    };

    // Debounce price update
    useEffect(() => {
        const timer = setTimeout(() => {
            updateURL(priceRange[0], priceRange[1], selectedBrands, selectedColors, selectedRating);
        }, 500);
        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [priceRange]);

    const handleBrandChange = (brand: string) => {
        const newBrands = selectedBrands.includes(brand)
            ? selectedBrands.filter(b => b !== brand)
            : [...selectedBrands, brand];
        setSelectedBrands(newBrands);
        updateURL(priceRange[0], priceRange[1], newBrands, selectedColors, selectedRating);
    };

    const handleColorChange = (color: string) => {
        const newColors = selectedColors.includes(color)
            ? selectedColors.filter(c => c !== color)
            : [...selectedColors, color];
        setSelectedColors(newColors);
        updateURL(priceRange[0], priceRange[1], selectedBrands, newColors, selectedRating);
    };

    const handleRatingChange = (rating: number) => {
        const newRating = selectedRating === rating ? 0 : rating;
        setSelectedRating(newRating);
        updateURL(priceRange[0], priceRange[1], selectedBrands, selectedColors, newRating);
    }

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
                                    <input
                                        type="checkbox"
                                        checked={selectedBrands.includes(brand)}
                                        onChange={() => handleBrandChange(brand)}
                                        className="peer w-4 h-4 border-2 border-neutral-300 rounded appearance-none checked:bg-black checked:border-black transition-all"
                                    />
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
                                onClick={() => handleColorChange(color.name)}
                                className={`w-8 h-8 rounded-full ${color.class} ${color.name === 'White' ? 'border-neutral-200' : ''} ${selectedColors.includes(color.name) ? 'ring-2 ring-offset-2 ring-black' : ''} hover:scale-110 hover:ring-2 hover:ring-offset-2 hover:ring-neutral-200 transition-all focus:outline-none`}
                                title={color.name}
                                aria-label={`Select ${color.name}`}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Rating Filter */}
            <div className="border-b border-neutral-100 pb-6">
                <button
                    onClick={() => toggleSection('rating')}
                    className="flex items-center justify-between w-full mb-4 group"
                >
                    <h3 className="text-sm font-medium text-[var(--text-primary)] uppercase tracking-wider">Valoración</h3>
                    {openSections.rating ? <ChevronUp className="w-4 h-4 text-neutral-400 group-hover:text-black" /> : <ChevronDown className="w-4 h-4 text-neutral-400 group-hover:text-black" />}
                </button>

                {openSections.rating && (
                    <div className="space-y-2 animate-in slide-in-from-top-2 duration-200">
                        {[5, 4, 3, 2, 1].map((star) => (
                            <button
                                key={star}
                                onClick={() => handleRatingChange(star)}
                                className={`flex items-center gap-2 text-sm w-full p-2 rounded-lg -mx-2 hover:bg-neutral-50 transition-colors ${selectedRating === star ? 'bg-neutral-50' : ''}`}
                            >
                                <div className={`w-4 h-4 border-2 border-neutral-300 rounded-full flex items-center justify-center mr-2 ${selectedRating === star ? 'border-black' : ''}`}>
                                    {selectedRating === star && <div className="w-2 h-2 bg-black rounded-full" />}
                                </div>
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-4 h-4 ${i < star ? "fill-yellow-400 text-yellow-400" : "text-neutral-300"}`}
                                        />
                                    ))}
                                </div>
                                <span className="ml-auto text-neutral-500 text-xs">{star}+</span>
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
