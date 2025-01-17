"use-client";

import {
  Menu,
  Search,
  ShoppingBag,
  User,
  Sofa,
  ArrowRight,
  Star,
  Timer,
} from "lucide-react";

export default function Home() {


  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="relative h-[80vh] mt-8 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/70 to-neutral-900/30" />
          <div className="relative h-full flex flex-col justify-center px-8 sm:px-12">
            <h1 className="text-4xl sm:text-6xl font-light text-white max-w-2xl">
              Diseño que <span className="font-medium">transforma</span> tu
              espacio
            </h1>
            <p className="mt-4 text-lg text-neutral-200 max-w-xl">
              Descubre nuestra colección de muebles modernos y funcionales para
              crear el hogar de tus sueños.
            </p>
            <button
              className="mt-8 px-8 py-4 bg-white text-neutral-900 rounded-full 
                           inline-flex items-center space-x-2 w-fit
                           hover:bg-neutral-100 transition-colors group"
            >
              <span>Ver colección</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Sala",
              image:
                "https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=800",
              description: "Espacios para compartir",
            },
            {
              title: "Comedor",
              image:
                "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800",
              description: "Momentos memorables",
            },
            {
              title: "Habitación",
              image:
                "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800",
              description: "Tu espacio personal",
            },
          ].map((category) => (
            <div
              key={category.title}
              className="group relative h-[400px] rounded-xl overflow-hidden cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${category.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-medium text-white">
                  {category.title}
                </h3>
                <p className="mt-2 text-neutral-200">{category.description}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Featured Offers Section */}
        <section className="mt-16">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl font-medium text-neutral-900">
                Ofertas destacadas
              </h2>
              <p className="mt-1 text-neutral-600">
                ¡No te pierdas estas ofertas por tiempo limitado!
              </p>
            </div>
            <button className="text-neutral-900 flex items-center space-x-2 group">
              <span>Ver todas las ofertas</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "Set de Comedor Escandinavo",
                originalPrice: "2,499",
                discountedPrice: "1,899",
                discount: "24%",
                timeLeft: "2 días",
                image:
                  "https://images.unsplash.com/photo-1617104551722-3b2d51366400?q=80&w=800",
                description: "Mesa + 6 sillas en roble natural",
              },
              {
                name: "Conjunto de Sala Premium",
                originalPrice: "3,299",
                discountedPrice: "2,499",
                discount: "32%",
                timeLeft: "3 días",
                image:
                  "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800",
                description: "Sofá 3 plazas + 2 sillones + mesa de centro",
              },
            ].map((offer) => (
              <div
                key={offer.name}
                className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row h-full">
                  <div className="relative w-full md:w-2/5 aspect-square md:aspect-auto">
                    <img
                      src={offer.image}
                      alt={offer.name}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      -{offer.discount}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-between w-full md:w-3/5">
                    <div>
                      <h3 className="text-xl font-medium text-neutral-900">
                        {offer.name}
                      </h3>
                      <p className="mt-2 text-neutral-600">
                        {offer.description}
                      </p>
                      <div className="mt-4 flex items-center space-x-3">
                        <span className="text-2xl font-medium text-neutral-900">
                          ${offer.discountedPrice}
                        </span>
                        <span className="text-lg text-neutral-400 line-through">
                          ${offer.originalPrice}
                        </span>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-neutral-600">
                        <Timer className="h-5 w-5" />
                        <span>Termina en {offer.timeLeft}</span>
                      </div>
                      <button
                        className="px-6 py-2 bg-neutral-900 text-white rounded-full
                                 hover:bg-neutral-800 transition-colors flex items-center space-x-2"
                      >
                        <ShoppingBag className="h-4 w-4" />
                        <span>Comprar</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section className="mt-16">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl font-medium text-neutral-900">
                Productos destacados
              </h2>
              <p className="mt-1 text-neutral-600">
                Diseños exclusivos seleccionados para ti
              </p>
            </div>
            <button className="text-neutral-900 flex items-center space-x-2 group">
              <span>Ver todos</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Sofá Modular Oslo",
                price: "1,299",
                rating: 4.8,
                image:
                  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800",
              },
              {
                name: "Sillón Copenhagen",
                price: "599",
                rating: 4.9,
                image:
                  "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=800",
              },
              {
                name: "Mesa de Centro Aria",
                price: "299",
                rating: 4.7,
                image:
                  "https://images.unsplash.com/photo-1532372320978-9a4cf6648747?q=80&w=800",
              },
              {
                name: "Lámpara Nórdica",
                price: "149",
                rating: 4.9,
                image:
                  "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800",
              },
            ].map((product) => (
              <div key={product.name} className="group">
                <div className="relative aspect-square rounded-xl overflow-hidden bg-neutral-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <button
                    className="absolute bottom-4 right-4 p-3 bg-white rounded-full
                                   shadow-lg opacity-0 group-hover:opacity-100 transition-opacity
                                   hover:bg-neutral-50 active:scale-95"
                  >
                    <ShoppingBag className="h-5 w-5 text-neutral-900" />
                  </button>
                </div>
                <div className="mt-4">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-neutral-600">
                      {product.rating}
                    </span>
                  </div>
                  <h3 className="mt-1 font-medium text-neutral-900">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-neutral-600">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="mt-24 mb-16 bg-neutral-100 rounded-2xl p-12 text-center">
          <h2 className="text-2xl font-medium text-neutral-900">
            Únete a nuestra comunidad
          </h2>
          <p className="mt-2 text-neutral-600 max-w-xl mx-auto">
            Suscríbete para recibir las últimas tendencias en diseño de
            interiores y ofertas exclusivas.
          </p>
          <form className="mt-6 flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-4 py-3 rounded-lg border border-neutral-200
                       focus:outline-none focus:ring-2 focus:ring-neutral-200"
            />
            <button
              className="px-6 py-3 bg-neutral-900 text-white rounded-lg
                           hover:bg-neutral-800 transition-colors"
            >
              Suscribirse
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
