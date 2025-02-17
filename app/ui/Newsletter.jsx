export default function Newsletter() {
  return (
    <section className="mt-24 mb-16 bg-gray-500 rounded-2xl p-12 text-center">
      <h2 className="text-2xl font-medium text-neutral-900">
        Únete a nuestra comunidad
      </h2>
      <p className="mt-2 text-neutral-600 max-w-xl mx-auto">
        Suscríbete para recibir las últimas tendencias en diseño de interiores y
        ofertas exclusivas.
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
  );
}
