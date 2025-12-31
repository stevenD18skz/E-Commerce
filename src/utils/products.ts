import { MOCK_WISHLIST, MOCK_OFFERS } from "@/lib/data";
import { Offer, Product, Wishlist } from "@/types/product";

const inOffer = (product: Product): Offer | null => {
    const offer = MOCK_OFFERS.find((offer) => {
        if (offer.id == product.id) {
            return offer;
        }
    });
    return offer || null;
};

const inWishlist = (product: Product): Wishlist | null => {
    const wishlist = MOCK_WISHLIST.find((wishlist) => {
        if (wishlist.id == product.id) {
            return wishlist;
        }
    });
    return wishlist || null;
};

export {inOffer, inWishlist};

