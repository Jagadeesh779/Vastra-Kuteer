import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Filter, ChevronDown, SlidersHorizontal } from 'lucide-react';

// Product Data Generation
const baseProducts = [
    { name: "Kanjivaram Silk Saree", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=2574&auto=format&fit=crop" },
    { name: "Banarasi Georgette", image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=2670&auto=format&fit=crop" },
    { name: "Handloom Cotton", image: "https://images.unsplash.com/photo-1583391733958-e026f39a4823?q=80&w=2574&auto=format&fit=crop" },
    { name: "Embroidered Net", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=2583&auto=format&fit=crop" },
    { name: "Mysore Silk", image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=2524&auto=format&fit=crop" },
    { name: "Floral Chiffon", image: "https://images.unsplash.com/photo-1605293266391-1c8a6fdf924b?q=80&w=2574&auto=format&fit=crop" },
    { name: "Patola Silk", image: "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?q=80&w=2548&auto=format&fit=crop" },
    { name: "Satin Crepe", image: "https://images.unsplash.com/photo-1601366533287-59b97d513794?q=80&w=2487&auto=format&fit=crop" },
    { name: "Paithani Silk", image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop" },
    { name: "Organza Silk", image: "https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?q=80&w=1974&auto=format&fit=crop" }
];

const brands = ["Vastra Kuteer", "Ethnic Charm", "Royal Weaves", "Saree World", "Desi Thread", "Weaver's Nest", "Heritage"];

const dummyProducts = Array.from({ length: 50 }, (_, i) => {
    const base = baseProducts[i % baseProducts.length];
    const brand = brands[i % brands.length];
    const price = Math.floor(Math.random() * (15000 - 1500) + 1500);

    return {
        id: i + 1,
        brand: brand,
        name: `${base.name} ${Math.floor(i / 10) + 1}`, // Add variation to name
        price: price,
        originalPrice: price + Math.floor(Math.random() * 2000 + 500),
        rating: (Math.random() * (5.0 - 3.5) + 3.5).toFixed(1),
        reviews: Math.floor(Math.random() * 300 + 10),
        image: base.image
    };
});

const Shop = () => {
    const [selectedFilters, setSelectedFilters] = useState([]);

    return (
        <div className="bg-vastra-bg min-h-screen pt-8 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-gray-200 pb-6">
                    <div>
                        <span className="text-gray-500 text-sm">Home / Clothing / Sarees</span>
                        <h1 className="text-3xl font-serif font-bold text-gray-900 mt-2">
                            Sarees & Ethnic Wear <span className="text-gray-500 text-lg font-sans font-normal">({dummyProducts.length} items)</span>
                        </h1>
                    </div>
                    <div className="flex items-center space-x-4 mt-4 md:mt-0">
                        <div className="relative group">
                            <button className="flex items-center space-x-2 text-gray-700 border border-gray-300 px-4 py-2 rounded-md hover:border-gray-800 transition-colors bg-white">
                                <span>Sort by: Recommended</span>
                                <ChevronDown className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Filters Sidebar */}
                    <div className="w-full md:w-64 flex-shrink-0 bg-white p-6 rounded-lg shadow-sm border border-gray-100 h-fit sticky top-24">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-gray-900 uppercase tracking-wider text-sm">Filters</h3>
                            <SlidersHorizontal className="h-4 w-4 text-gray-500" />
                        </div>

                        {/* Filter Group: Categories */}
                        <div className="mb-6">
                            <h4 className="font-semibold text-gray-800 mb-3 text-sm">Categories</h4>
                            <div className="space-y-2">
                                {['Sarees', 'Kurtas', 'Lehengas', 'Dress Material'].map((item) => (
                                    <label key={item} className="flex items-center space-x-3 cursor-pointer group">
                                        <input type="checkbox" className="form-checkbox h-4 w-4 text-vastra-pink border-gray-300 rounded focus:ring-vastra-pink" />
                                        <span className="text-gray-600 group-hover:text-vastra-blue transition-colors text-sm">{item}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Filter Group: Price */}
                        <div className="mb-6">
                            <h4 className="font-semibold text-gray-800 mb-3 text-sm">Price</h4>
                            <div className="space-y-2">
                                {['Rs. 500 to Rs. 1000', 'Rs. 1000 to Rs. 2500', 'Rs. 2500 to Rs. 5000', 'Rs. 5000+'].map((item) => (
                                    <label key={item} className="flex items-center space-x-3 cursor-pointer group">
                                        <input type="checkbox" className="form-checkbox h-4 w-4 text-vastra-pink border-gray-300 rounded focus:ring-vastra-pink" />
                                        <span className="text-gray-600 group-hover:text-vastra-blue transition-colors text-sm">{item}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Filter Group: Color */}
                        <div>
                            <h4 className="font-semibold text-gray-800 mb-3 text-sm">Colors</h4>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    { name: 'Teal', bg: 'bg-vastra-teal' },
                                    { name: 'Pink', bg: 'bg-vastra-pink' },
                                    { name: 'Blue', bg: 'bg-vastra-blue' },
                                    { name: 'Gold', bg: 'bg-vastra-gold' },
                                    { name: 'Red', bg: 'bg-red-600' },
                                    { name: 'Black', bg: 'bg-gray-900' },
                                ].map((c) => (
                                    <button key={c.name} className={`h-6 w-6 rounded-full ${c.bg} border border-gray-200 shadow-sm hover:scale-110 transition-transform`} title={c.name} />
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Product Grid */}
                    <div className="flex-1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {dummyProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>

                        {/* Load More */}
                        <div className="mt-12 text-center">
                            <button className="px-8 py-3 bg-white border border-vastra-blue text-vastra-blue font-semibold rounded-full hover:bg-vastra-blue hover:text-white transition-all shadow-sm hover:shadow-md">
                                Show More Products
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
