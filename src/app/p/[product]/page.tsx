// app/p/[product]/page.tsx

import { MOCK_PRODUCTS, MOCK_RECOMMENDATIONS } from "@/lib/data";
import ProductDetails from "@/app/p/[product]/components/product-details";
import ProductReviews from "@/app/p/[product]/components/reviews";
import CarrouselProducts from "@/components/CarrouselProducts";

interface PageProps {
  params: Promise<{ product: string }>;
}

export default async function Page({ params }: PageProps) {
  // Espera a que se resuelvan los parámetros
  const resolvedParams = await params;
  const productName = decodeURIComponent(resolvedParams.product);
  const product = MOCK_PRODUCTS.find((p) => p.id === productName);

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
    <div className="max-w-7xl mx-auto py-[var(--spacing-lg)] w-full">
      <ProductDetails product={product} />

      <ProductReviews />

      <CarrouselProducts
        recommendations={MOCK_RECOMMENDATIONS}
        title="You may also like"
        description="These are some of the products that other customers have bought together"
      />
    </div>
  );
}
