interface Product {
    id: string;
    name: string;
    categoryId: string;
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
    discount: number;
    daysLeft: number;
}

interface Wishlist {
    id: string;
    date: string;
}

export type { Product, Offer, Wishlist };