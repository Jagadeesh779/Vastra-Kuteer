import React from 'react';
import { Heart, ShoppingBag, Star } from 'lucide-react';

const ProductCard = ({ product }) => {
    return (
        <div className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-vastra-gold/30">
            {/* Image Container */}
            <div className="relative aspect-[3/4] overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Quick Actions */}
                <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    <button className="bg-white p-2 rounded-full shadow-md text-gray-600 hover:text-vastra-pink hover:bg-pink-50 transition-colors">
                        <Heart className="h-5 w-5" />
                    </button>
                    <button className="bg-white p-2 rounded-full shadow-md text-gray-600 hover:text-vastra-blue hover:bg-blue-50 transition-colors">
                        <ShoppingBag className="h-5 w-5" />
                    </button>
                </div>

                {/* Rating */}
                {product.rating && (
                    <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center shadow-sm">
                        <span className="text-xs font-bold text-gray-800">{product.rating}</span>
                        <Star className="h-3 w-3 text-vastra-gold fill-current ml-1" />
                        <span className="text-[10px] text-gray-500 ml-1 border-l border-gray-300 pl-1">{product.reviews}</span>
                    </div>
                )}
            </div>

            {/* Product Info */}
            <div className="p-4">
                <h3 className="font-bold text-gray-900 truncate">{product.brand}</h3>
                <p className="text-gray-500 text-sm truncate mb-2">{product.name}</p>

                <div className="flex items-center space-x-2">
                    <span className="font-bold text-gray-900">₹{product.price}</span>
                    {product.originalPrice && (
                        <>
                            <span className="text-gray-400 text-sm line-through">₹{product.originalPrice}</span>
                            <span className="text-vastra-pink text-xs font-bold">
                                ({Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF)
                            </span>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
