// app/p/[product]/page.tsx

import { products } from "@/app/lib/data";
import ProductDetails from "./product-details";
import CarrouselProducts from "@/app/ui/CarrouselProducts";

// Genera static params usando el campo `name` como parte dinámica de la URL
export function generateStaticParams() {
  return products.map((product) => ({
    product: product.name,
  }));
}

// Componente de página (sin async, para que coincida con el PageProps que Next espera)
export default function ProductPage({
  params,
}: {
  params: { product: string };
}) {
  const productName = params.product;
  const product = products.find((p) => p.name === productName);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-sky-200">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h1>
          <p className="text-gray-600">
            The product you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 w-full">
      <ProductDetails product={product} />
      <CarrouselProducts
        recommendations={products}
        title="You may also like"
        description="These are some of the products that other customers have bought together with the products on this page."
      />
    </div>
  );
}
