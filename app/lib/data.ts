// Mock room data - in a real app this would come from an API/database
const rooms = {
  kitchen: {
    title: "Kitchen",
    description: "Transform your kitchen into a modern culinary haven",
    heroImage:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=2000&auto=format&fit=crop",
    categories: [
      {
        id: "refrigerators",
        name: "Refrigerators",
        image:
          "https://media.admagazine.com/photos/642db593ae3961853cd3fc56/master/w_1600%2Cc_limit/KitchenAid-3.jpg",
        count: 24,
      },
      {
        id: "stoves",
        name: "Stoves & Ovens",
        image:
          "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=500&auto=format&fit=crop",
        count: 18,
      },
      {
        id: "islands",
        name: "Kitchen Islands",
        image:
          "https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?w=500&auto=format&fit=crop",
        count: 12,
      },
      {
        id: "cabinets",
        name: "Cabinets",
        image:
          "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&auto=format&fit=crop",
        count: 32,
      },
      {
        id: "sinks",
        name: "Sinks & Faucets",
        image:
          "https://www.ikea.com/es/es/images/products/langudden-fregadero-1-seno-ac-inox__0865504_pe585234_s5.jpg?f=g",
        count: 15,
      },
      {
        id: "lighting",
        name: "Lighting",
        image:
          "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=500&auto=format&fit=crop",
        count: 28,
      },
    ],
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
  "living-room": {
    title: "Living Room",
    description:
      "Create a cozy and inviting living room for relaxation and entertainment",
    heroImage:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=2000&auto=format&fit=crop",
    categories: [
      {
        id: "sofas",
        name: "Sofas",
        image:
          "https://images.unsplash.com/photo-1495435229349-e86db7bfa013?w=500&auto=format&fit=crop",
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
          "https://images.unsplash.com/photo-1505691723518-36a67adb38d7?w=500&auto=format&fit=crop",
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
  bedroom: {
    title: "Bedroom",
    description: "Design a peaceful retreat to relax and recharge",
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
  "dining-room": {
    title: "Dining Room",
    description: "Craft a space for delightful meals and meaningful gatherings",
    heroImage:
      "https://images.unsplash.com/photo-1616594713370-30ae8e5c7a3a?w=2000&auto=format&fit=crop",
    categories: [
      {
        id: "dining-tables",
        name: "Dining Tables",
        image:
          "https://images.unsplash.com/photo-1602872023380-1be192700272?w=500&auto=format&fit=crop",
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
};

export { rooms };
