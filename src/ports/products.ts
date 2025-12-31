import { Product, Offer, Wishlist } from "@/types/product";
import {
    MOCK_PRODUCTS,
    MOCK_OFFERS,
    MOCK_WISHLIST,
    MOCK_RECOMMENDATIONS,
} from "@/lib/data";

const SIMULATED_DELAY = 600; // 600ms de latencia simulada para productos

/**
 * Obtiene todo los productos
 */
export const getAllProducts = async (): Promise<Product[]> => {
    await new Promise(resolve => setTimeout(resolve, SIMULATED_DELAY));
    return MOCK_PRODUCTS;
};

/**
 * Obtiene todos los productos de una categoría específica.
 */
export const getProductsByCategory = async (categoryId: string): Promise<Product[]> => {
    await new Promise(resolve => setTimeout(resolve, SIMULATED_DELAY));
    return MOCK_PRODUCTS.filter((product) => product.categoryId === categoryId);
};

/**
 * Obtiene un producto individual por su ID, incluyendo información de ofertas si existe.
 */
export const getProductById = async (productId: string) => {
    await new Promise(resolve => setTimeout(resolve, SIMULATED_DELAY));
    const product = MOCK_PRODUCTS.find((p) => p.id === productId);
    const offer = MOCK_OFFERS.find((o) => o.id === productId);

    if (!product) return null;

    return {
        ...product,
        offer: offer || null
    };
};

/**
 * Obtiene las ofertas activas.
 * Simula un join con los productos para devolver la información completa.
 */
export const getAllOffers = async (): Promise<(Product & Offer)[]> => {
    await new Promise(resolve => setTimeout(resolve, SIMULATED_DELAY));

    // Mapeamos las ofertas para incluir la data del producto (Simulación de Backend)
    return MOCK_OFFERS.map(offer => {
        const product = MOCK_PRODUCTS.find(p => p.id === offer.id);
        return product ? { ...product, ...offer } : null;
    }).filter((item): item is (Product & Offer) => item !== null);
};

/**
 * Obtiene recomendaciones de productos.
 */
export const getRecommendations = async (): Promise<Product[]> => {
    await new Promise(resolve => setTimeout(resolve, SIMULATED_DELAY));
    return MOCK_RECOMMENDATIONS;
};

/**
 * Obtiene la wishlist inicial del usuario.
 */
export const getWishlist = async (): Promise<Product[]> => {
    await new Promise(resolve => setTimeout(resolve, SIMULATED_DELAY));

    // Join wishlist con productos
    return MOCK_WISHLIST.map(item => {
        return MOCK_PRODUCTS.find(p => p.id === item.id);
    }).filter((p): p is Product => p !== undefined);
};
