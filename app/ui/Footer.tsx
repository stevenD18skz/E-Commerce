import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
  CreditCard,
  Truck,
  Clock,
  ShieldCheck,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      {/* Trust Badges */}
      <div className="border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: <CreditCard className="h-6 w-6" />,
                title: "Pago Seguro",
                description: "Múltiples métodos de pago",
              },
              {
                icon: <Truck className="h-6 w-6" />,
                title: "Envío Gratis",
                description: "En pedidos superiores a $999",
              },
              {
                icon: <Clock className="h-6 w-6" />,
                title: "Entrega Rápida",
                description: "2-5 días hábiles",
              },
              {
                icon: <ShieldCheck className="h-6 w-6" />,
                title: "Garantía de Calidad",
                description: "2 años de garantía",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-3 text-neutral-100">{item.icon}</div>
                <h4 className="text-sm font-medium text-neutral-100 mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-neutral-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-neutral-100">
              Sobre Nosotros
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Desde 2010, nos dedicamos a transformar espacios con muebles de
              diseño excepcional. Nuestra pasión es crear hogares únicos que
              reflejen tu estilo de vida.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-neutral-400 hover:text-neutral-100 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-neutral-100 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-neutral-100 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium text-neutral-100 mb-4">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              {[
                "Catálogo",
                "Ofertas",
                "Novedades",
                "Diseñadores",
                "Blog",
                "Showrooms",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-neutral-400 hover:text-neutral-100 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="text-lg font-medium text-neutral-100 mb-4">Ayuda</h3>
            <ul className="space-y-2">
              {[
                "Preguntas Frecuentes",
                "Envíos y Entregas",
                "Devoluciones",
                "Garantía",
                "Política de Privacidad",
                "Términos y Condiciones",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-neutral-400 hover:text-neutral-100 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-medium text-neutral-100 mb-4">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-neutral-400 mt-0.5" />
                <span className="text-sm text-neutral-400">
                  Av. Principal 1234,
                  <br />
                  Ciudad de México, 12345
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-neutral-400" />
                <span className="text-sm text-neutral-400">
                  +52 (55) 1234-5678
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-neutral-400" />
                <span className="text-sm text-neutral-400">
                  contacto@muebles.com
                </span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-medium text-neutral-100 mb-2">
                Horario de Atención
              </h4>
              <p className="text-sm text-neutral-400">
                Lunes a Viernes: 9:00 - 20:00
                <br />
                Sábados: 10:00 - 18:00
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-neutral-500">
              © 2024 Muebles Design. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1580508174046-170816f65662?q=80&w=200"
                alt="Payment Methods"
                className="h-6 opacity-75"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
