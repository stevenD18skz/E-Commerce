import { MOCK_WISHLIST, offers } from "@/lib/data";
import { Product } from "@/types/product";

const inOffer = (product: Product) => {
    const offer = offers.find((offer) => {
        if (offer.id == product.id) {
            return offer;
        }
    });
    console.log(offer);
    return offer;
};

const inWishlist = (product: Product) => {
    const wishlist = MOCK_WISHLIST.find((wishlist) => {
        if (wishlist.id == product.id) {
            return wishlist;
        }
    });
    console.log(wishlist);
    return wishlist;
};

export {inOffer, inWishlist};

