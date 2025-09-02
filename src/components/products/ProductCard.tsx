"use client";
import Image from "next/image";
import { ShoppingCart, Heart, Star } from "lucide-react";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image?: string;
  category: string;
  rating: number;
  reviews: number;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);

  const imageSrc =
    product.image && product.image.trim() !== "" ? product.image : "/placeholder.png";

  return (
   <div className="bg-white rounded-lg shadow hover:shadow-lg transition-all
   duration-300 overflow-hidden group border border-gray-100">
   <div className="relative h-48 bg-gray-100">
    <Image
      src={imageSrc}
      alt={product.name || "Product Image"}
      fill
      className="object-cover group-hover:scale-105 transition-transform duration-300"
    />
    <button
      onClick={() => setIsLiked(!isLiked)}
      className="absolute top-2 right-2 p-1.5 rounded-full bg-white/90
       backdrop-blur-sm shadow hover:scale-110 transition-transform"
    >
      <Heart
        className={`w-4 h-4 ${
          isLiked ? "fill-red-500 text-red-500" : "text-gray-500"
        }`}
      />
    </button>
    {product.originalPrice && (
      <div className="absolute top-2 left-2 bg-red-500 text-white
      px-2 py-0.5 rounded-md text-xs font-semibold shadow">
        {Math.round(
          ((product.originalPrice - product.price) / product.originalPrice) * 100
        )}
        % OFF
      </div>
    )}
  </div>
  <div className="p-4">
    <div className="text-xs uppercase tracking-wide text-gray-500 mb-1">
      {product.category}
    </div>
    <h3 className="font-medium text-gray-800 mb-2 line-clamp-2">
      {product.name}
    </h3>
    <div className="flex items-center mb-2">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${
            i < Math.floor(product.rating)
              ? "fill-yellow-400 text-yellow-400"
              : "text-gray-300"
          }`}
        />
      ))}
      <span className="text-xs text-gray-500 ml-2">({product.reviews})</span>
    </div>

    <div className="flex items-center justify-between mb-4">
      <div>
        <span className="text-lg font-bold text-gray-900">
          ${product.price}
        </span>
        {product.originalPrice && (
          <span className="text-sm text-gray-500 line-through ml-1.5">
            ${product.originalPrice}
          </span>
        )}
      </div>
    </div>

    <button className="w-full bg-blue-600 text-white py-2 px-3 rounded-md font-medium
    hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 shadow-sm text-sm">
      <ShoppingCart className="w-4 h-4" />
      <span>Add to Cart</span>
    </button>
  </div>
</div>
 );
}
