import { ArrowRight, ShoppingBag, Star } from "lucide-react";
import ProductDetails from "./product-details";
import { products } from "@/app/lib/data";
import CarrouselProducts from "@/app/ui/CarrouselProducts";

export function generateStaticParams() {
  return products.map((product) => ({
    product: product.id,
  }));
}

export default function ProductPage({
  params,
}: {
  params: { product: string };
}) {
  const product = products.find((p) => p.id === params.product);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-sky-200">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h1>
          <p className="text-gray-600">
            The product you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8   w-full">
      <ProductDetails product={product} />

      <CarrouselProducts
        recommendations={products}
        title="You may also like"
        description="These are some of the products that other customers have bought together with the products in this page."
      ></CarrouselProducts>
    </div>
  );
}
