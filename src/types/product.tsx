interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    reviews: number;
    rating: number;
    description: string;
    colors: string[];
    images: string[];
    delivery: {
        time: string;
        cost: number;
    };
    brand?: string;
}

interface Offer {
    id: string;
    name: string;
    description: string;
    discount: number;
    image: string;
}

interface Wishlist {
    id: string;
    name: string;
    description: string;
    image: string;
}

export type { Product, Offer, Wishlist };