import React from 'react';
import { ArrowRight, Star, TrendingUp, Truck, ShieldCheck, RefreshCw } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const dummyTrending = [
    { id: 1, brand: "Vastra Kuteer", name: "Royal Banarasi Silk", price: 5999, originalPrice: 9999, rating: 4.8, reviews: 42, image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=2574&auto=format&fit=crop" },
    { id: 2, brand: "Saree World", name: "Embroidered Party Wear", price: 3599, originalPrice: 5999, rating: 4.5, reviews: 28, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=2583&auto=format&fit=crop" },
    { id: 3, brand: "Desi Thread", name: "Handloom Cotton", price: 1899, originalPrice: 2499, rating: 4.2, reviews: 15, image: "https://images.unsplash.com/photo-1583391733958-e026f39a4823?q=80&w=2574&auto=format&fit=crop" },
    { id: 4, brand: "Vastra Kuteer", name: "Festival Special", price: 4499, originalPrice: 6000, rating: 4.9, reviews: 89, image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=2670&auto=format&fit=crop" },
    { id: 5, brand: "Heritage", name: "Pochampally Ikat", price: 5899, originalPrice: 8499, rating: 4.7, reviews: 110, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=2583&auto=format&fit=crop" },
    { id: 6, brand: "Weaver's Nest", name: "Gadwal Silk", price: 6299, originalPrice: 8999, rating: 4.8, reviews: 90, image: "https://images.unsplash.com/photo-1583391733975-40b615d18d8e?q=80&w=1974&auto=format&fit=crop" },
    { id: 7, brand: "Vastra Kuteer", name: "Paithani Silk", price: 8999, originalPrice: 14999, rating: 5.0, reviews: 32, image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop" },
    { id: 8, brand: "Ethnic Charm", name: "Tussar Silk", price: 3899, originalPrice: 5699, rating: 4.6, reviews: 40, image: "https://images.unsplash.com/photo-1621640786029-22ad3168d660?q=80&w=2070&auto=format&fit=crop" }
];

const Home = () => {
    return (
        <div className="min-h-screen">

            {/* Hero Section */}
            <div className="relative bg-vastra-bg">
                <div className="absolute inset-0 bg-gradient-to-r from-vastra-teal/10 to-vastra-pink/5 z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8 animate-fade-in-up">
                            <span className="text-vastra-pink font-semibold tracking-wider text-sm uppercase">Welcome to Vastra Kuteer</span>
                            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-gray-900 leading-tight">
                                Weave Your <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-vastra-teal to-vastra-blue">Tradition</span> With<br />
                                <span className="text-vastra-gold">Elegance</span>
                            </h1>
                            <p className="text-xl text-gray-600 max-w-lg">
                                Discover the finest collection of handcrafted sarees and ethnic wear that tells a story of heritage and grace.
                            </p>
                            <div className="flex space-x-4">
                                <button className="btn-primary flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
                                    Shop Collection <ArrowRight className="ml-2 h-5 w-5" />
                                </button>
                                <button className="btn-secondary">
                                    View Lookbook
                                </button>
                            </div>
                            <div className="flex items-center space-x-8 pt-8">
                                <div className="flex flex-col">
                                    <span className="text-3xl font-bold text-gray-900">5k+</span>
                                    <span className="text-gray-500 text-sm">Premium Products</span>
                                </div>
                                <div className="h-10 w-px bg-gray-300"></div>
                                <div className="flex flex-col">
                                    <span className="text-3xl font-bold text-gray-900">20k+</span>
                                    <span className="text-gray-500 text-sm">Happy Customers</span>
                                </div>
                            </div>
                        </div>

                        {/* Hero Image Placeholder - Ideally use the generated peacock image here */}
                        <div className="relative">
                            <div className="absolute top-0 right-0 -mr-4 -mt-4 w-72 h-72 bg-vastra-gold/20 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 -ml-4 -mb-4 w-72 h-72 bg-vastra-pink/20 rounded-full blur-3xl"></div>
                            <img
                                src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=2574&auto=format&fit=crop"
                                alt="Elegant Indian Model in Saree"
                                className="rounded-t-[10rem] rounded-b-[2rem] shadow-2xl relative z-10 object-cover w-full h-[600px] border-4 border-white"
                            />

                            {/* Floating Card */}
                            <div className="absolute bottom-12 -left-8 bg-white p-4 rounded-xl shadow-lg z-20 max-w-xs animate-bounce-slow">
                                <div className="flex items-center space-x-3 mb-2">
                                    <div className="p-2 bg-green-100 rounded-full text-green-600">
                                        <Star className="h-4 w-4 fill-current" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-800">Top Rated</p>
                                        <p className="text-xs text-gray-500">Banarasi Silk Saree</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { icon: Truck, title: "Free Shipping", desc: "On all orders above ₹1999" },
                            { icon: ShieldCheck, title: "Secure Payment", desc: "100% secure payment gateways" },
                            { icon: RefreshCw, title: "Easy Returns", desc: "7-day hassle-free return policy" },
                            { icon: TrendingUp, title: "Authentic Brands", desc: "100% original products guaranteed" },
                        ].map((feature, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center p-6 border rounded-xl hover:shadow-lg transition-shadow bg-gray-50 group hover:bg-white hover:border-vastra-teal/30">
                                <feature.icon className="h-10 w-10 text-vastra-teal mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-sm text-gray-500">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Trending Products Section */}
            <div className="py-16 bg-gray-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="text-vastra-pink font-semibold tracking-wider text-sm uppercase">Hot This Season</span>
                        <h2 className="text-4xl font-serif font-bold text-gray-900 mt-2">Trending Now</h2>
                        <div className="h-1 w-20 bg-vastra-gold mx-auto mt-4"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {dummyTrending.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <a href="/shop" className="inline-block px-8 py-3 bg-vastra-teal text-white font-semibold rounded-full hover:bg-teal-700 transition-colors shadow-lg hover:shadow-xl">View All Products</a>
                    </div>
                </div>
            </div>

            {/* Categories Preview */}
            <div className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-vastra-pink font-semibold tracking-wider text-sm uppercase">Shop By Category</span>
                        <h2 className="text-4xl font-serif font-bold text-gray-900 mt-2">Curated Collections</h2>
                        <div className="h-1 w-20 bg-vastra-gold mx-auto mt-4"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Festive Sarees", img: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=2670&auto=format&fit=crop" },
                            { title: "Designer Kurtas", img: "https://images.unsplash.com/photo-1583391733958-e026f39a4823?q=80&w=2574&auto=format&fit=crop" },
                            { title: "Bridal Lehengas", img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=2583&auto=format&fit=crop" },
                        ].map((cat, idx) => (
                            <div key={idx} className="relative group overflow-hidden rounded-2xl h-96 cursor-pointer">
                                <img src={cat.img} alt={cat.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end justify-center pb-8">
                                    <div className="text-center transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
                                        <h3 className="text-2xl font-serif text-white mb-2">{cat.title}</h3>
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <span className="text-vastra-gold text-sm font-medium tracking-wide uppercase border-b border-vastra-gold pb-1">Explore Now</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;
