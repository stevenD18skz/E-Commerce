// Mock room data - in a real app this would come from an API/database
const rooms = [
  {
    id: "kitchen",
    title: "Kitchen",
    description: "Transform your kitchen into a modern culinary haven",
    cardDescription: "Espacios para compartir",
    cardImage:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=2000&auto=format&fit=crop",

    heroImage:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=2000&auto=format&fit=crop",
    prebuiltDesigns: [
      {
        id: "modern-minimal",
        name: "Modern Minimal",
        description:
          "Clean lines and minimalist approach for a contemporary look",
        image:
          "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&auto=format&fit=crop",
        price: 15000,
      },
      {
        id: "scandinavian",
        name: "Scandinavian Style",
        description: "Light woods and bright spaces with functional design",
        image:
          "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&auto=format&fit=crop",
        price: 12000,
      },
      {
        id: "industrial",
        name: "Industrial Chic",
        description: "Raw materials and exposed elements for an urban feel",
        image:
          "https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?w=800&auto=format&fit=crop",
        price: 18000,
      },
    ],
    tips: [
      {
        id: "lighting-tip",
        title: "Perfect Kitchen Lighting",
        description:
          "Layer your lighting with ambient, task, and accent lights for optimal functionality and atmosphere.",
        image:
          "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&auto=format&fit=crop",
      },
      {
        id: "storage-tip",
        title: "Smart Storage Solutions",
        description:
          "Maximize your space with pull-out organizers, vertical storage, and corner solutions.",
        image:
          "https://fthmb.tqn.com/qYAYrneY2m0TfEQ5pb5a4RcE2Aw%3D/960x0/filters%3Ano_upscale%28%29%3Amax_bytes%28150000%29%3Astrip_icc%28%29/storage-galore-pod-185-via-smallspaces.about.com-56a888ac3df78cf7729e9acf.jpg",
      },
      {
        id: "workflow-tip",
        title: "Efficient Workflow",
        description:
          "Design your kitchen with the classic work triangle between sink, stove, and refrigerator.",
        image:
          "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "living-room",
    title: "Living Room",
    description:
      "Create a cozy and inviting living room for relaxation and entertainment",
    cardDescription: "Momentos memorables",

    cardImage:
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=800",
    heroImage:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=2000&auto=format&fit=crop",
    categories: [
      {
        id: "sofas",
        name: "Sofas",
        image:
          "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800",
        count: 20,
      },
      {
        id: "coffee-tables",
        name: "Coffee Tables",
        image:
          "https://images.unsplash.com/photo-1519961647502-7ff7c305d56e?w=500&auto=format&fit=crop",
        count: 15,
      },
      {
        id: "tv-stands",
        name: "TV Stands",
        image:
          "https://images.unsplash.com/photo-1576557100938-4d7c6559fb70?w=500&auto=format&fit=crop",
        count: 10,
      },
      {
        id: "bookshelves",
        name: "Bookshelves",
        image:
          "https://images.unsplash.com/photo-1581459312468-7034c9fa4a7b?w=500&auto=format&fit=crop",
        count: 12,
      },
      {
        id: "rugs",
        name: "Rugs",
        image:
          "https://images.unsplash.com/photo-1601939386356-c8da3c6b1fef?w=500&auto=format&fit=crop",
        count: 18,
      },
      {
        id: "lighting",
        name: "Lighting",
        image:
          "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800",
        count: 25,
      },
    ],
    prebuiltDesigns: [
      {
        id: "cozy-rustic",
        name: "Cozy Rustic",
        description: "Warm tones and natural materials for a homey feel",
        image:
          "https://images.unsplash.com/photo-1495435229349-e86db7bfa013?w=800&auto=format&fit=crop",
        price: 13000,
      },
      {
        id: "modern-elegant",
        name: "Modern Elegant",
        description: "Sleek furniture and elegant accents for a refined look",
        image:
          "https://images.unsplash.com/photo-1495435229349-e86db7bfa013?w=800&auto=format&fit=crop",
        price: 16000,
      },
      {
        id: "bohemian",
        name: "Bohemian Style",
        description:
          "Vibrant colors and eclectic decor for a free-spirited vibe",
        image:
          "https://images.unsplash.com/photo-1495435229349-e86db7bfa013?w=800&auto=format&fit=crop",
        price: 14000,
      },
    ],
    tips: [
      {
        id: "seating-tip",
        title: "Comfortable Seating",
        description:
          "Mix and match seating options like sofas, armchairs, and poufs to create a versatile and comfy living area.",
        image:
          "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800&auto=format&fit=crop",
      },
      {
        id: "decor-tip",
        title: "Personalized Decor",
        description:
          "Add personality with artwork, throw pillows, and decorative objects that reflect your style.",
        image:
          "https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?w=800&auto=format&fit=crop",
      },
      {
        id: "layout-tip",
        title: "Optimal Layout",
        description:
          "Arrange furniture to create cozy conversation areas and ensure good traffic flow.",
        image:
          "https://images.unsplash.com/photo-1495435229349-e86db7bfa013?w=800&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "dining-room",
    title: "Dining Room",
    description: "Craft a space for delightful meals and meaningful gatherings",
    cardDescription: "lugar familiar",
    cardImage:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800",
    heroImage:
      "https://images.unsplash.com/photo-1616594713370-30ae8e5c7a3a?w=2000&auto=format&fit=crop",

    categories: [
      {
        id: "dining-tables",
        name: "Dining Tables",
        image:
          "https://images.unsplash.com/photo-1617104551722-3b2d51366400?q=80&w=800",
        count: 12,
      },
      {
        id: "chairs",
        name: "Chairs",
        image:
          "https://images.unsplash.com/photo-1585955658349-0e9eb03b7e8c?w=500&auto=format&fit=crop",
        count: 30,
      },
      {
        id: "buffets",
        name: "Buffets & Sideboards",
        image:
          "https://images.unsplash.com/photo-1558211583-d26a91f3cc9e?w=500&auto=format&fit=crop",
        count: 10,
      },
    ],
    prebuiltDesigns: [
      {
        id: "modern-dining",
        name: "Modern Dining",
        description:
          "Streamlined furniture with chic finishes for a sleek look",
        image:
          "https://images.unsplash.com/photo-1595005393241-d7f832d14a68?w=800&auto=format&fit=crop",
        price: 14000,
      },
      {
        id: "rustic-charm",
        name: "Rustic Charm",
        description: "Warm wood tones and farmhouse details for inviting meals",
        image:
          "https://images.unsplash.com/photo-1558211583-d26a91f3cc9e?w=800&auto=format&fit=crop",
        price: 12000,
      },
      {
        id: "elegant-dining",
        name: "Elegant Dining",
        description: "Sophisticated furniture with luxurious accents",
        image:
          "https://images.unsplash.com/photo-1602872023380-1be192700272?w=800&auto=format&fit=crop",
        price: 18000,
      },
    ],
    tips: [
      {
        id: "centerpiece-tip",
        title: "Eye-Catching Centerpiece",
        description:
          "Add fresh flowers or a decorative bowl for a stylish focal point.",
        image:
          "https://images.unsplash.com/photo-1585955658349-0e9eb03b7e8c?w=800&auto=format&fit=crop",
      },
      {
        id: "space-tip",
        title: "Space Planning",
        description:
          "Ensure ample space for chairs and easy movement around the table.",
        image:
          "https://images.unsplash.com/photo-1616594713370-30ae8e5c7a3a?w=800&auto=format&fit=crop",
      },
      {
        id: "lighting-tip",
        title: "Chandelier Magic",
        description:
          "Install a statement chandelier for a touch of elegance and proper lighting.",
        image:
          "https://images.unsplash.com/photo-1602872023380-1be192700272?w=800&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "bedroom",
    title: "Bedroom",
    description: "Design a peaceful retreat to relax and recharge",
    cardImage:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800",
    cardDescription: "Tu espacio personal",
    heroImage:
      "https://images.unsplash.com/photo-1602516316313-f89fd82b6c31?w=2000&auto=format&fit=crop",
    categories: [
      {
        id: "beds",
        name: "Beds & Frames",
        image:
          "https://images.unsplash.com/photo-1574680096145-d081c15678b5?w=500&auto=format&fit=crop",
        count: 20,
      },
      {
        id: "wardrobes",
        name: "Wardrobes",
        image:
          "https://images.unsplash.com/photo-1617191512608-b9ae2f7f8dd2?w=500&auto=format&fit=crop",
        count: 15,
      },
      {
        id: "nightstands",
        name: "Nightstands",
        image:
          "https://images.unsplash.com/photo-1550935112-4c645f38d4c2?w=500&auto=format&fit=crop",
        count: 18,
      },
    ],
    prebuiltDesigns: [
      {
        id: "modern-comfort",
        name: "Modern Comfort",
        description: "Simple lines and plush bedding for a cozy modern vibe",
        image:
          "https://images.unsplash.com/photo-1616627982436-5cd2cb90e1da?w=800&auto=format&fit=crop",
        price: 12000,
      },
      {
        id: "classic-elegance",
        name: "Classic Elegance",
        description:
          "Timeless furniture with soft textures for ultimate luxury",
        image:
          "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800&auto=format&fit=crop",
        price: 14000,
      },
      {
        id: "boho-chic",
        name: "Boho Chic",
        description: "Earthy tones and layered textiles for a relaxed ambiance",
        image:
          "https://images.unsplash.com/photo-1601923472373-1a824a7a24e6?w=800&auto=format&fit=crop",
        price: 11000,
      },
    ],
    tips: [
      {
        id: "color-scheme-tip",
        title: "Harmonious Color Scheme",
        description:
          "Choose calming colors like soft blues and neutral tones for a serene atmosphere.",
        image:
          "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800&auto=format&fit=crop",
      },
      {
        id: "storage-tip",
        title: "Smart Storage",
        description:
          "Use under-bed drawers and multi-functional furniture to maximize storage.",
        image:
          "https://images.unsplash.com/photo-1617191512608-b9ae2f7f8dd2?w=800&auto=format&fit=crop",
      },
      {
        id: "lighting-tip",
        title: "Layered Lighting",
        description:
          "Incorporate task lighting, bedside lamps, and dimmers for adaptable illumination.",
        image:
          "https://images.unsplash.com/photo-1585308306896-8b8c3cd3eece?w=800&auto=format&fit=crop",
      },
    ],
  },
];

const categories = [
  {
    id: "refrigerators",
    name: "Refrigerators",
    image:
      "https://media.admagazine.com/photos/642db593ae3961853cd3fc56/master/w_1600%2Cc_limit/KitchenAid-3.jpg",
    productsAvailable: 24,
    space: "kitchen", // kitchen
  },
  {
    id: "stoves",
    name: "Stoves & Ovens",
    image:
      "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=500&auto=format&fit=crop",
    productsAvailable: 18,
    space: "kitchen", // kitchen
  },
  {
    id: "islands",
    name: "Kitchen Islands",
    image:
      "https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?w=500&auto=format&fit=crop",
    productsAvailable: 12,
    space: "kitchen", // kitchen
  },
  {
    id: "cabinets",
    name: "Cabinets",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&auto=format&fit=crop",
    productsAvailable: 32,
    space: "kitchen", // kitchen
  },
  {
    id: "sinks",
    name: "Sinks & Faucets",
    image:
      "https://www.ikea.com/es/es/images/products/langudden-fregadero-1-seno-ac-inox__0865504_pe585234_s5.jpg?f=g",
    productsAvailable: 15,
    space: "kitchen", // kitchen
  },
  {
    id: "lighting",
    name: "Lighting",
    image:
      "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=500&auto=format&fit=crop",
    productsAvailable: 28,
    space: "kitchen", // kitchen
  },
  {
    id: "chairs",
    name: "Sillas",
    description:
      "Sillas ergonómicas, modernas y clásicas para cualquier espacio.",
    image:
      "https://images.unsplash.com/photo-1562887085-a9fba531cc74?q=80&w=800",
    productsAvailable: 45,
    space: "dining-room", // Comedor
  },
  {
    id: "tables",
    name: "Mesas",
    description:
      "Mesas de comedor, centro y escritorio para todos los estilos.",
    image:
      "https://images.unsplash.com/photo-1596612106884-fbc2d87fe26b?q=80&w=800",
    productsAvailable: 50,
    space: "dining-room", // Comedor
  },
  {
    id: "sofas",
    name: "Sofás",
    description: "Sofás cómodos y elegantes para tu sala de estar.",
    image:
      "https://images.unsplash.com/photo-1615874952026-dde40105a395?q=80&w=800",
    productsAvailable: 30,
    space: "living-room", // Sala de estar
  },

  {
    id: "beds",
    name: "Camas",
    description: "Camas modernas y cómodas para un descanso perfecto.",
    image:
      "https://images.unsplash.com/photo-1616627454624-6366e416b6ff?q=80&w=800",
    productsAvailable: 20,
    space: "bedroom", // Dormitorio
  },
  {
    id: "closets",
    name: "Closets",
    description: "Closets funcionales y de diseño para optimizar tu espacio.",
    image:
      "https://images.unsplash.com/photo-1620030485830-9d9a3d5ba7e5?q=80&w=800",
    productsAvailable: 18,
    space: "bedroom", // Dormitorio
  },
  {
    id: "lighting",
    name: "Iluminación",
    description: "Lámparas y sistemas de iluminación modernos y funcionales.",
    image:
      "https://images.unsplash.com/photo-1558211583-d26e7b07a4ec?q=80&w=800",
    productsAvailable: 25,
    space: "all", // Aplica para todos los espacios
  },
];

const products = [
  {
    id: "ilana-sofa",
    name: "Ilana",
    category: "sofa",
    price: 430.99,
    reviews: 441,
    rating: 4.5,
    description:
      "A sectional sofa or an L-shaped sofa can make a great addition to your living room based on your needs.",
    colors: ["#E5B168", "#9CA3AF", "#4A5B7D", "#606C38", "#1B263B"],
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550226891-ef816aed4a98?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop",
    ],
    delivery: {
      time: "5 - 7 weeks",
      cost: 50,
    },
  },
  {
    id: "modern-fridge",
    name: "Modern Refrigerator",
    category: "refrigerators",
    price: 899.99,
    reviews: 170,
    rating: 4.7,
    description:
      "A spacious, energy-efficient refrigerator that keeps your food fresh for longer.",
    colors: ["#D1D5DB", "#1F2937", "#F5F5F5"],
    images: [
      "https://images.unsplash.com/photo-1630459065645-549fe5a56db4?q=80&w=987&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1561043433-aaf687c4cf04?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576511452025-dcfdd7e4e032?q=80&w=2070&auto=format&fit=crop",
    ],
    delivery: {
      time: "3 - 5 weeks",
      cost: 75,
    },
  },
  {
    id: "classic-stove",
    name: "Classic Stove",
    category: "stoves",
    price: 599.99,
    reviews: 140,
    rating: 4.3,
    description:
      "A durable, classic stove with advanced temperature control for perfect cooking.",
    colors: ["#6B7280", "#374151", "#F3F4F6"],
    images: [
      "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1570463869233-a0e1b2a8fbbe?q=80&w=2070&auto=format&fit=crop",
    ],
    delivery: {
      time: "4 - 6 weeks",
      cost: 65,
    },
  },
  {
    id: "island-dream",
    name: "Island Dream",
    category: "islands",
    price: 1200.49,
    reviews: 85,
    rating: 4.8,
    description:
      "A luxurious kitchen island that brings elegance and functionality to your space.",
    colors: ["#F6E7D8", "#D9CAB3", "#8A7967"],
    images: [
      "https://images.unsplash.com/photo-1600585154350-27f49c6f9ba2?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576618148401-0b2e0f5e7fc8?q=80&w=2070&auto=format&fit=crop",
    ],
    delivery: {
      time: "6 - 8 weeks",
      cost: 100,
    },
  },
  {
    id: "oak-cabinets",
    name: "Oak Cabinets",
    category: "cabinets",
    price: 750.0,
    reviews: 105,
    rating: 4.6,
    description:
      "Elegant and durable oak cabinets, perfect for modern and traditional kitchens alike.",
    colors: ["#A77F53", "#D4B89A", "#8B5A2B"],
    images: [
      "https://images.unsplash.com/photo-1598550436625-cbc4d7b2ff96?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600591130028-8b4383ce3ffb?q=80&w=2070&auto=format&fit=crop",
    ],
    delivery: {
      time: "6 - 8 weeks",
      cost: 120,
    },
  },
  {
    id: "stainless-sink",
    name: "Stainless Steel Sink",
    category: "sinks",
    price: 320.0,
    reviews: 80,
    rating: 4.2,
    description:
      "A sleek stainless steel sink that combines style and functionality for any kitchen.",
    colors: ["#B8B8B8", "#E0E0E0"],
    images: [
      "https://images.unsplash.com/photo-1560185007-b033107d5735?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606312610251-c8e9b620eb4f?q=80&w=2070&auto=format&fit=crop",
    ],
    delivery: {
      time: "2 - 3 weeks",
      cost: 40,
    },
  },
  {
    id: "bright-lighting",
    name: "Bright Ceiling Lighting",
    category: "lighting",
    price: 180.5,
    reviews: 145,
    rating: 4.4,
    description:
      "Modern ceiling lighting to brighten up your home with adjustable intensity options.",
    colors: ["#FFFFE0", "#EAEAEA"],
    images: [
      "https://images.unsplash.com/photo-1578898888486-d8690e56173e?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1543486958-d783bfbfcd77?q=80&w=2070&auto=format&fit=crop",
    ],
    delivery: {
      time: "3 - 5 weeks",
      cost: 30,
    },
  },
  {
    id: "minimalist-sofa",
    name: "Minimalist Sofa",
    category: "sofa",
    price: 499.99,
    reviews: 95,
    rating: 4.6,
    description:
      "A comfortable minimalist sofa, blending simplicity and elegance for your living space.",
    colors: ["#B3B3B3", "#767676", "#404040"],
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800",
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=2070&auto=format&fit=crop",
    ],
    delivery: {
      time: "5 - 7 weeks",
      cost: 70,
    },
  },
  {
    id: "frosty-refrigerator",
    name: "Frosty Refrigerator",
    category: "refrigerators",
    price: 950.0,
    reviews: 160,
    rating: 4.7,
    description:
      "An energy-efficient refrigerator with frost-free technology and a spacious interior.",
    colors: ["#E6E6E6", "#BFC1C2"],
    images: [
      "https://images.unsplash.com/photo-1643356472833-5b1f2cd4ca3c?q=80&w=987&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616627797744-f67e4c55bc3b?q=80&w=2070&auto=format&fit=crop",
    ],
    delivery: {
      time: "4 - 6 weeks",
      cost: 80,
    },
  },
  {
    id: "gas-stove",
    name: "Gas Stove",
    category: "stoves",
    price: 670.0,
    reviews: 120,
    rating: 4.5,
    description:
      "A reliable and efficient gas stove, perfect for precise cooking and fast heat adjustments.",
    colors: ["#2C2F33", "#D1D5DB"],
    images: [
      "https://images.unsplash.com/photo-1583511655782-99b86b30b241?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1597532056271-b5c2b6be76cc?q=80&w=2070&auto=format&fit=crop",
    ],
    delivery: {
      time: "4 - 6 weeks",
      cost: 65,
    },
  },
  {
    id: "sleek-island",
    name: "Sleek Kitchen Island",
    category: "islands",
    price: 1350.0,
    reviews: 75,
    rating: 4.8,
    description:
      "A modern and stylish kitchen island that brings both beauty and functionality to your cooking space.",
    colors: ["#E1D5C4", "#A9A9A9", "#8B7D6D"],
    images: [
      "https://images.unsplash.com/photo-1598300051348-0c8e350d8cd3?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600408588502-fbcae52b9c62?q=80&w=2070&auto=format&fit=crop",
    ],
    delivery: {
      time: "5 - 7 weeks",
      cost: 90,
    },
  },
  {
    id: "walnut-cabinets",
    name: "Walnut Cabinets",
    category: "cabinets",
    price: 825.0,
    reviews: 105,
    rating: 4.6,
    description:
      "Luxurious walnut cabinets that offer timeless elegance and plenty of storage space for your kitchen.",
    colors: ["#6A4E23", "#3E2C1C", "#9A7B3F"],
    images: [
      "https://images.unsplash.com/photo-1596079890736-4aa18f4d34f0?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603529476402-e5d09d8a5b2b?q=80&w=2070&auto=format&fit=crop",
    ],
    delivery: {
      time: "6 - 8 weeks",
      cost: 120,
    },
  },
  {
    id: "dual-sink",
    name: "Dual Basin Sink",
    category: "sinks",
    price: 450.0,
    reviews: 85,
    rating: 4.5,
    description:
      "A spacious dual basin sink, designed for efficient washing and separation of tasks.",
    colors: ["#A5A5A5", "#E4E4E4"],
    images: [
      "https://images.unsplash.com/photo-1556912996-1d40e0e18c30?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584611378405-00d46e2d7452?q=80&w=2070&auto=format&fit=crop",
    ],
    delivery: {
      time: "3 - 5 weeks",
      cost: 50,
    },
  },
  {
    id: "chandelier-lighting",
    name: "Elegant Chandelier",
    category: "lighting",
    price: 350.0,
    reviews: 130,
    rating: 4.7,
    description:
      "A stunning chandelier that adds a touch of elegance and luxury to any room.",
    colors: ["#F1F1F1", "#D4AF37", "#8C7A4D"],
    images: [
      "https://images.unsplash.com/photo-1571045459467-e751bf3e47c1?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593055385599-08601757c3c1?q=80&w=2070&auto=format&fit=crop",
    ],
    delivery: {
      time: "3 - 4 weeks",
      cost: 40,
    },
  },
  {
    id: "retro-sofa",
    name: "Retro Sofa",
    category: "sofa",
    price: 470.0,
    reviews: 85,
    rating: 4.3,
    description:
      "A vintage-inspired sofa that adds a touch of nostalgia and comfort to your living room.",
    colors: ["#F2B6A0", "#C1C1C1", "#9B6D43"],
    images: [
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544046507-bfc5b1152cf0?q=80&w=2070&auto=format&fit=crop",
    ],
    delivery: {
      time: "4 - 6 weeks",
      cost: 60,
    },
  },
  {
    id: "compact-refrigerator",
    name: "Compact Refrigerator",
    category: "refrigerators",
    price: 800.0,
    reviews: 120,
    rating: 4.4,
    description:
      "A space-saving compact refrigerator perfect for small apartments or office spaces.",
    colors: ["#F5F5F5", "#4D4D4D"],
    images: [
      "https://images.unsplash.com/photo-1600421979243-0cf3e24ab642?q=80&w=986&auto=format&fit=crop",
    ],
    delivery: {
      time: "3 - 5 weeks",
      cost: 40,
    },
  },
  {
    id: "electric-stove",
    name: "Electric Stove",
    category: "stoves",
    price: 620.0,
    reviews: 85,
    rating: 4.3,
    description:
      "An electric stove with multiple settings to provide you with consistent and reliable cooking performance.",
    colors: ["#B0B0B0", "#D1D1D1"],
    images: [
      "https://images.unsplash.com/photo-1600407663094-d28db0e6d5d3?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588017609440-2a45077f264b?q=80&w=2070&auto=format&fit=crop",
    ],
    delivery: {
      time: "4 - 6 weeks",
      cost: 55,
    },
  },
  {
    id: "modern-island",
    name: "Modern Kitchen Island",
    category: "islands",
    price: 1450.0,
    reviews: 68,
    rating: 4.9,
    description:
      "A sleek and functional kitchen island with ample counter space and modern design elements.",
    colors: ["#FFFFFF", "#C5A88D", "#D8D8D8"],
    images: [
      "https://images.unsplash.com/photo-1614384537393-66b2c18e7e79?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614560344859-8716f08e3254?q=80&w=2070&auto=format&fit=crop",
    ],
    delivery: {
      time: "5 - 7 weeks",
      cost: 100,
    },
  },
  {
    id: "maple-cabinets",
    name: "Maple Cabinets",
    category: "cabinets",
    price: 780.0,
    reviews: 100,
    rating: 4.4,
    description:
      "Elegant maple wood cabinets that add warmth and charm to any kitchen space.",
    colors: ["#F1D1A5", "#8E735B", "#A28F76"],
    images: [
      "https://images.unsplash.com/photo-1616627978690-e08e4d3d4d50?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616082498358-c46e1b25d375?q=80&w=2070&auto=format&fit=crop",
    ],
    delivery: {
      time: "6 - 8 weeks",
      cost: 120,
    },
  },
  {
    id: "porcelain-sink",
    name: "Porcelain Sink",
    category: "sinks",
    price: 350.0,
    reviews: 70,
    rating: 4.3,
    description:
      "A sleek and durable porcelain sink, perfect for modern bathrooms and kitchens.",
    colors: ["#F0F0F0", "#B0B0B0", "#9C9C9C"],
    images: [
      "https://images.unsplash.com/photo-1572297575692-306d6cbbd1d1?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1562255984-1c59e3e8c3e7?q=80&w=2070&auto=format&fit=crop",
    ],
    delivery: {
      time: "3 - 5 weeks",
      cost: 40,
    },
  },
  {
    id: "led-lighting",
    name: "LED Lighting",
    category: "lighting",
    price: 200.0,
    reviews: 140,
    rating: 4.5,
    description:
      "Energy-efficient LED lighting that provides bright and even illumination for any space.",
    colors: ["#FFFFFF", "#F0F0F0", "#E0E0E0"],
    images: [
      "https://images.unsplash.com/photo-1600490354601-43996c4bc15a?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618473645430-8712c3b1b83e?q=80&w=2070&auto=format&fit=crop",
    ],
    delivery: {
      time: "2 - 4 weeks",
      cost: 30,
    },
  },
];

const recommendations = [products[3], products[12], products[2], products[7]];

const offers = [
  {
    ...products[3],
    discountedPrice: "1,899",
    discount: "24%",
    timeLeft: "2 días",
  },
  {
    ...products[9],
    discountedPrice: "2,499",
    discount: "32%",
    timeLeft: "3 días",
  },
];

export { rooms, categories, products, recommendations, offers };
