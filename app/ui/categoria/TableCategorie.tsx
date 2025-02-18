import Link from "next/link";
import Image from "next/image";
import { products } from "@/app/lib/data";

export default function TableCategorie({ query }: { query: string }) {
  const filteredProducts = products.filter(
    (p) =>
      p.category === "sofas" &&
      p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map((product) => (
        <Link
          key={product.id}
          href={`/p/${encodeURIComponent(product.id)}`}
          className="bg-white rounded-lg shadow-sm block"
        >
          <div className="relative aspect-square">
            <Image
              width={400}
              height={400}
              src={product.images[0]}
              alt={product.name}
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
              <span className="font-bold">${product.price.toFixed(2)}</span>
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
  );
}
