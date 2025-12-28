import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/data";
import { Heart, ShoppingBag } from "lucide-react";

export default function TableCategorie({ query }: { query: string }) {
  const filteredProducts = products.filter(
    (p) =>
      p.category === "sofas" &&
      p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
      {filteredProducts.map((product) => (
        <Link
          key={product.id}
          href={`/p/${encodeURIComponent(product.id)}`}
          className="group block"
        >
          {/* Image Container */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-neutral-100 mb-4">
            <Image
              width={500}
              height={600}
              src={product.images[0]}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            />

            {/* Overlay Actions */}
            <div className="absolute right-3 top-3 flex flex-col gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
              <button className="bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-sm hover:bg-black hover:text-white transition-colors" title="Add to Wishlist">
                <Heart className="w-4 h-4" />
              </button>
              <button className="bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-sm hover:bg-black hover:text-white transition-colors delay-75" title="Quick Add">
                <ShoppingBag className="w-4 h-4" />
              </button>
            </div>

            {/* Badges */}
            <div className="absolute left-3 top-3 flex flex-col gap-1">
              {/* Only show badge if needed, e.g. for sales or new items */}
              {/* <span className="bg-white/90 backdrop-blur text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm">New</span> */}
            </div>
          </div>

          {/* Info */}
          <div className="space-y-1">
            <div className="flex justify-between items-start gap-4">
              <h3 className="font-medium text-[var(--text-primary)] text-base leading-tight group-hover:underline underline-offset-4 decoration-neutral-300 transition-all">
                {product.name}
              </h3>
              <span className="font-semibold text-sm shrink-0">
                ${product.price.toLocaleString()}
              </span>
            </div>

            <p className="text-sm text-[var(--text-secondary)] line-clamp-1">
              {product.category} Collection
            </p>

            <div className="flex items-center gap-1 pt-1">
              <div className="flex text-neutral-300 text-xs">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < 4 ? "text-amber-400" : ""}>★</span>
                ))}
              </div>
              <span className="text-xs text-neutral-400 ml-1">({product.reviews})</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
