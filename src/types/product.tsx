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
}

export type {Product};