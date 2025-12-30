
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    categorieName: string;
    searchParams: { [key: string]: string | string[] | undefined };
}

export default function Pagination({
    currentPage,
    totalPages,
    categorieName,
    searchParams,
}: PaginationProps) {

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    console.log(pages);

    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);

    const pagesToDisplay = pages.slice(startPage - 1, endPage + 1);

    console.log(pagesToDisplay);

    const hasPreviousPage = currentPage > 1;
    const hasNextPage = currentPage < totalPages;

    if (pagesToDisplay.length === 1) {
        return null;
    }

    return (
        <div className="flex items-center justify-center space-x-2 mt-16">
            <Link
                href={{
                    pathname: `/cat/${categorieName}`,
                    query: { ...searchParams, page: currentPage > 1 ? currentPage - 1 : 1 }
                }}
                className={`p-2 rounded-full hover:bg-neutral-100 transition-colors ${currentPage <= 1 ? "pointer-events-none opacity-30" : ""}`}
                aria-disabled={currentPage <= 1}
            >
                <ChevronLeft className="w-5 h-5" />
            </Link>

            <div className="flex items-center gap-1">
                {pagesToDisplay.map((page, i) => (
                    typeof page === 'number' ? (
                        <Link
                            key={i}
                            href={{
                                pathname: `/cat/${categorieName}`,
                                query: { ...searchParams, page }
                            }}
                            className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium transition-colors ${page === currentPage ? "bg-neutral-900 text-white" : "hover:bg-neutral-100 text-neutral-600"}`}
                        >
                            {page}
                        </Link>
                    ) : (
                        <span key={i} className="px-2 text-neutral-400">
                            {page}
                        </span>
                    )
                ))}
            </div>

            <Link
                href={{
                    pathname: `/cat/${categorieName}`,
                    query: { ...searchParams, page: currentPage < 10 ? currentPage + 1 : 10 }
                }}
                className={`p-2 rounded-full hover:bg-neutral-100 transition-colors ${currentPage >= 10 ? "pointer-events-none opacity-30" : ""}`}
                aria-disabled={currentPage >= 10}
            >
                <ChevronRight className="w-5 h-5" />
            </Link>
        </div>
    )
}