import { Product, Offer, Wishlist } from "@/types/product";
import { Room, PrebuiltDesign, Tip, Category } from "@/types/room";


/**
 * SIMULACIÓN DE BASE DE DATOS RELACIONAL
 * 
 * En este archivo hemos separado las entidades para simular una base de datos real.
 * Las relaciones se mantienen a través de IDs (Foreign Keys).
 */

// --- TABLA: ROOMS (Espacios) ---
const MOCK_ROOMS: Room[] = [
  {
    id: "kitchen",
    title: "Kitchen",
    description: "Transform your kitchen into a modern culinary haven",
    cardDescription: "Espacios para compartir",
    cardImage: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=2000&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=2000&auto=format&fit=crop",
  },
  {
    id: "living-room",
    title: "Living Room",
    description: "Create a cozy and inviting living room for relaxation and entertainment",
    cardDescription: "Momentos memorables",
    cardImage: "https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=800",
    heroImage: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=2000&auto=format&fit=crop",
  },
  {
    id: "bedroom",
    title: "Bedroom",
    description: "Design a peaceful retreat to relax and recharge",
    cardDescription: "Tu espacio personal",
    cardImage: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800",
    heroImage: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "dining-room",
    title: "Dining Room",
    description: "Craft a space for delightful meals and meaningful gatherings",
    cardDescription: "lugar familiar",
    cardImage: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800",
    heroImage: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "exterior",
    title: "Exterior",
    description: "Diseña espacios exteriores perfectos para disfrutar de la naturaleza",
    cardDescription: "Tu conexión con la naturaleza",
    cardImage: "https://i.pinimg.com/736x/d4/c2/d0/d4c2d0bdce47b9ad233bfe77dfa87e61.jpg",
    heroImage: "https://i.pinimg.com/736x/d4/c2/d0/d4c2d0bdce47b9ad233bfe77dfa87e61.jpg",
  },
  {
    id: "home-office",
    title: "Home Office",
    description: "Crea un espacio de trabajo productivo y inspirador",
    cardDescription: "Productividad y enfoque",
    cardImage: "https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?w=2000&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?w=2000&auto=format&fit=crop",
  },
];

// --- TABLA: PREBUILT_DESIGNS (FK: roomId) ---
const MOCK_PREBUILT_DESIGNS: PrebuiltDesign[] = [
  // Kitchen Designs
  {
    id: "modern-minimal",
    roomId: "kitchen",
    name: "Modern Minimal",
    description: "Clean lines and minimalist approach for a contemporary look",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&auto=format&fit=crop",
    price: 15000,
  },
  {
    id: "scandinavian-kitchen",
    roomId: "kitchen",
    name: "Scandinavian Style",
    description: "Light woods and bright spaces with functional design",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&auto=format&fit=crop",
    price: 12000,
  },
  {
    id: "industrial-kitchen",
    roomId: "kitchen",
    name: "Industrial Chic",
    description: "Raw materials and exposed elements for an urban feel",
    image: "https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?w=800&auto=format&fit=crop",
    price: 18000,
  },
  // Living Room Designs
  {
    id: "cozy-rustic",
    roomId: "living-room",
    name: "Cozy Rustic",
    description: "Warm tones and natural materials for a homey feel",
    image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=2070&auto=format&fit=crop",
    price: 13000,
  },
  {
    id: "modern-elegant",
    roomId: "living-room",
    name: "Modern Elegant",
    description: "Sleek furniture and elegant accents for a refined look",
    image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=2070&auto=format&fit=crop",
    price: 16000,
  },
  // Bedroom Designs
  {
    id: "modern-comfort",
    roomId: "bedroom",
    name: "Modern Comfort",
    description: "Simple lines and plush bedding for a cozy modern vibe",
    image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=2070&auto=format&fit=crop",
    price: 12000,
  },
];

// --- TABLA: TIPS (FK: roomId) ---
const MOCK_TIPS: Tip[] = [
  {
    id: "lighting-tip",
    roomId: "kitchen",
    title: "Perfect Kitchen Lighting",
    description: "Layer your lighting with ambient, task, and accent lights for optimal functionality and atmosphere.",
    image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&auto=format&fit=crop",
  },
  {
    id: "storage-tip",
    roomId: "kitchen",
    title: "Smart Storage Solutions",
    description: "Maximize your space with pull-out organizers, vertical storage, and corner solutions.",
    image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "seating-tip",
    roomId: "living-room",
    title: "Comfortable Seating",
    description: "Mix and match seating options like sofas, armchairs, and poufs to create a versatile and comfy living area.",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800&auto=format&fit=crop",
  },
];

// --- TABLA: CATEGORIES (FK: roomId) ---
const MOCK_CATEGORIES: Category[] = [
  {
    id: "refrigerators",
    roomId: "kitchen",
    name: "Refrigerators",
    description: "Refrigerators for your kitchen.",
    image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "stoves",
    roomId: "kitchen",
    name: "Stoves & Ovens",
    description: "Stoves & Ovens for your kitchen.",
    image: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=500&auto=format&fit=crop",
  },
  {
    id: "sofas",
    roomId: "living-room",
    name: "Sofás",
    description: "Sofás cómodos y elegantes para tu sala de estar.",
    image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "beds",
    roomId: "bedroom",
    name: "Camas",
    description: "Camas modernas y cómodas para un descanso perfecto.",
    image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "dining-tables",
    roomId: "dining-room",
    name: "Dining Tables",
    description: "Dining Tables for your dining room.",
    image: "https://images.unsplash.com/photo-1617104551722-3b2d51366400?q=80&w=800",
  },
];

// --- TABLA: PRODUCTS (FK: categoryId) ---
const MOCK_PRODUCTS: Product[] = [
  {
    id: "ilana-sofa",
    name: "Ilana",
    categoryId: "sofas",
    price: 430.99,
    reviews: 441,
    rating: 4.5,
    description: "A sectional sofa or an L-shaped sofa can make a great addition to your living room based on your needs.",
    colors: ["#E5B168", "#9CA3AF", "#4A5B7D", "#606C38", "#1B263B"],
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550226891-ef816aed4a98?q=80&w=2070&auto=format&fit=crop",
    ],
    delivery: { time: "5 - 7 weeks", cost: 50 },
    brand: "IKEA",
  },
  {
    id: "sofia-sofa",
    name: "Sofia",
    categoryId: "sofas",
    price: 389.99,
    reviews: 328,
    rating: 4.3,
    description: "Modern sofa with clean lines and tufted upholstery, perfect for contemporary living spaces.",
    colors: ["#D4A373", "#6B7280", "#3A5A40", "#B5838D", "#2B2D42"],
    images: [
      "https://images.unsplash.com/photo-1582582621959-48d27397dc69?q=80&w=2069&auto=format&fit=crop",
    ],
    delivery: { time: "3-5 weeks", cost: 0 },
    brand: "Ashley Furniture",
  },
  {
    id: "modern-fridge",
    name: "Modern Refrigerator",
    categoryId: "refrigerators",
    price: 899.99,
    reviews: 170,
    rating: 4.7,
    description: "A spacious, energy-efficient refrigerator that keeps your food fresh for longer.",
    colors: ["#D1D5DB", "#1F2937", "#F5F5F5"],
    images: [
      "https://images.unsplash.com/photo-1630459065645-549fe5a56db4?q=80&w=987&auto=format&fit=crop",
    ],
    delivery: { time: "3 - 5 weeks", cost: 75 },
  },
];

// --- TABLA: OFFERS (FK: productId) ---
const MOCK_OFFERS: Offer[] = [
  {
    id: "ilana-sofa",
    discount: 24,
    daysLeft: 2,
  },
  {
    id: "modern-fridge",
    discount: 32,
    daysLeft: 3,
  },
];

// --- TABLA: WISHLIST (FK: productId) ---
const MOCK_WISHLIST: Wishlist[] = [
  {
    id: "ilana-sofa",
    date: new Date().toISOString(),
  },
];

// --- TABLA: RECOMMENDATIONS (Solo una selección de productos) ---
const MOCK_RECOMMENDATIONS: Product[] = [
  MOCK_PRODUCTS[0],
  MOCK_PRODUCTS[1],
  MOCK_PRODUCTS[2],
];



export {
  MOCK_ROOMS,
  MOCK_CATEGORIES,
  MOCK_PRODUCTS,
  MOCK_PREBUILT_DESIGNS,
  MOCK_TIPS,
  MOCK_RECOMMENDATIONS,
  MOCK_OFFERS,
  MOCK_WISHLIST
};
