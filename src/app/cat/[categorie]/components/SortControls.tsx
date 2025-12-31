"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function SortControls() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("sort", e.target.value);
        router.push(`?${params.toString()}`);
    };

    const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("itemsPerPage", e.target.value);
        // Reset to page 1 when items per page changes
        params.set("page", "1");
        router.push(`?${params.toString()}`);
    };

    return (
        <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
            <span>Mostrar:</span>
            <select
                value={searchParams.get("itemsPerPage") || "12"}
                onChange={handleItemsPerPageChange}
                className="bg-transparent font-medium text-[var(--text-primary)] focus:outline-none cursor-pointer"
            >
                <option value="12">12</option>
                <option value="24">24</option>
                <option value="48">48</option>
                <option value="all">Todo</option>
            </select>

            <span>Ordenar por:</span>
            <select
                value={searchParams.get("sort") || "relevance"}
                onChange={handleSortChange}
                className="bg-transparent font-medium text-[var(--text-primary)] focus:outline-none cursor-pointer"
            >
                <option value="relevance">Relevancia</option>
                <option value="price-asc">Precio: Menor a Mayor</option>
                <option value="price-desc">Precio: Mayor a Menor</option>
                <option value="newest">Lo más nuevo</option>
            </select>
        </div>
    );
}
