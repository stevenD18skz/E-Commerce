interface Room {
    id: string;
    title: string;
    description: string;
    cardDescription: string;
    cardImage: string;
    heroImage: string;
}

interface PrebuiltDesign {
    id: string;
    roomId: string;
    name: string;
    description: string;
    image: string;
    price: number;
}

interface Tip {
    id: string;
    roomId: string;
    title: string;
    description: string;
    image: string;
}

interface Category {
    id: string;
    roomId: string;
    name: string;
    description: string;
    image: string;
}

export type { Room, PrebuiltDesign, Tip, Category };