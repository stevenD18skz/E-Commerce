import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { rooms, categories } from "../../lib/data";
// Generar parámetros estáticos basados en los `id` de las habitaciones
interface PageProps {
  params: Promise<{ room: string }>;
}

export default async function Page({ params }: PageProps) {
  // Espera a que se resuelvan los parámetros
  const resolvedParams = await params;
  const roomName = decodeURIComponent(resolvedParams.room);

  console.log("Product Name:", roomName);
  const room = rooms.find((p) => p.id === roomName);

  if (!room) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <div className="relative w-full h-[400px]">
          <Image
            src={room.heroImage}
            alt={room.title}
            className="absolute inset-0 w-full h-full object-cover"
            priority
            width={1920}
            height={400}
          />
        </div>

        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center">
          <h1 className="text-6xl font-bold text-white mb-4">{room.title}</h1>
          <p className="text-2xl text-white/90">{room.description}</p>
        </div>
      </section>

      <main className="max-w-[120rem] mx-auto px-4 sm:px-8 lg:px-16">
        {/* Categories Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories
              .filter((c) => c.space === room?.id)
              .map((category) => (
                <Link
                  key={category.id}
                  href={`/cat/${category.id}`}
                  className="group relative aspect-square rounded-lg overflow-hidden bg-gray-100"
                >
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={500}
                    height={500}
                    className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-medium">{category.name}</h3>
                    <p className="text-white/80 text-sm">
                      {category.productsAvailable} items
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </section>

        {/* Pre-built Designs */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Pre-built Designs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {room.prebuiltDesigns.map((design) => (
              <div
                key={design.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={design.image}
                    alt={design.name}
                    width={500}
                    height={375}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{design.name}</h3>
                  <p className="text-muted-foreground mb-4">
                    {design.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold">
                      ${design.price.toLocaleString()}
                    </span>
                    <button className="flex items-center text-primary hover:underline">
                      View Details
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Design Tips */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Design Tips & Ideas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {room.tips.map((tip) => (
              <div
                key={tip.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <div className="relative aspect-video">
                  <Image
                    src={tip.image}
                    alt={tip.title}
                    width={500}
                    height={300}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{tip.title}</h3>
                  <p className="text-muted-foreground">{tip.description}</p>
                  <button className="flex items-center text-primary hover:underline mt-4">
                    Read More
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
