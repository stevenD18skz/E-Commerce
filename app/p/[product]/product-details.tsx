"use client";

import { Heart, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";

type Product = {
  id: string;
  name: string;
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
};

export default function ProductDetails({ product }: { product: Product }) {
  const sizes = ["s", "m", "x", "xl"];
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left column - Images */}
      <div className="space-y-4">
        <div className="relative aspect-square rounded-lg overflow-hidden">
          <img
            src={product.images[selectedImage]}
            alt={product.name}
            //fill
            className="object-cover"
            //priority
          />
        </div>
        <div className="grid grid-cols-4 gap-2">
          {product.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={clsx(
                "relative aspect-square rounded-md overflow-hidden",
                selectedImage === index && "ring-2 ring-primary"
              )}
            >
              <img
                src={image}
                alt={`${product.name} ${index + 1}`}
                //fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Right column - Product details */}
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>

            <div className="space-y-2">
              <p className="text-3xl font-bold">$ {product.price}</p>
              <p className="text-xl text-emerald-300 font-semibold">
                {"in stock"}
              </p>
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={clsx(
                        "text-lg",
                        i < Math.floor(product.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      )}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-muted-foreground">
                  {product.reviews} reviews
                </span>
              </div>
            </div>
            <p className="text-muted-foreground mt-2">{product.description}</p>
          </div>
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="p-2 hover:bg-secondary rounded-full transition-colors"
          >
            <Heart
              className={clsx(
                "w-6 h-6",
                isFavorite && "fill-destructive text-destructive"
              )}
            />
          </button>
        </div>

        <div className="flex space-x-16">
          <div>
            <h3 className="font-semibold">Color</h3>
            <div className="flex space-x-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={clsx(
                    "w-8 h-8 rounded-full",
                    selectedColor === color &&
                      "ring-2 ring-primary ring-offset-2"
                  )}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Size</h3>
            <div className="flex space-x-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={clsx(
                    "w-8 h-8 rounded-full bg-gray-200",
                    selectedSize === size && "ring-2 ring-primary ring-offset-2"
                  )}
                >
                  <strong className="text-sm text-base">{size}</strong>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between py-4 border-t">
            <div>
              <p className="font-semibold">
                Dispatched in {product.delivery.time}
              </p>
              <button className="text-sm text-muted-foreground hover:underline">
                Why the longer lead time?
              </button>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </div>

          <div className="flex justify-between py-4 border-t">
            <div>
              <p className="font-semibold">Home Delivery</p>
              <p className="text-muted-foreground">$ {product.delivery.cost}</p>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="w-full px-6 py-3 text-center border border-primary rounded-md hover:bg-secondary transition-colors">
            Buy Now
          </button>
          <button className="w-full px-6 py-3 text-center bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
            Add to basket
          </button>
        </div>
      </div>
    </div>
  );
}
