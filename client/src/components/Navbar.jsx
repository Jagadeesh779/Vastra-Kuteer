import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, User } from 'lucide-react';

import logo from '../logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">

                    {/* Logo Section */}
                    <Link to="/" className="flex items-center space-x-3">
                        <img src={logo} alt="Vastra Kuteer Logo" className="h-16 w-auto object-contain" />
                        <div className="hidden sm:flex flex-col">
                            <span className="font-serif text-2xl text-vastra-blue font-bold tracking-tight leading-none">Vastra</span>
                            <span className="font-serif text-xs text-vastra-gold tracking-[0.3em] font-semibold leading-none mt-1">KUTEER</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        <Link to="/" className="text-gray-700 hover:text-vastra-pink font-medium transition-colors">Home</Link>
                        <Link to="/shop" className="text-gray-700 hover:text-vastra-pink font-medium transition-colors">Shop</Link>
                        <Link to="/collections" className="text-gray-700 hover:text-vastra-pink font-medium transition-colors">Collections</Link>
                        <Link to="/about" className="text-gray-700 hover:text-vastra-pink font-medium transition-colors">About Us</Link>
                    </div>

                    {/* Icons Section */}
                    <div className="hidden md:flex items-center space-x-6">
                        <div className="relative group">
                            <input type="text" placeholder="Search..." className="pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:border-vastra-teal focus:outline-none text-sm w-48 transition-all focus:w-64" />
                            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                        </div>
                        <Link to="/login" className="text-gray-600 hover:text-vastra-blue transition-colors"><User className="h-6 w-6" /></Link>
                        <Link to="/cart" className="relative text-gray-600 hover:text-vastra-pink transition-colors">
                            <ShoppingBag className="h-6 w-6" />
                            <span className="absolute -top-2 -right-2 bg-vastra-gold text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">0</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-vastra-blue focus:outline-none">
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-vastra-pink hover:bg-gray-50">Home</Link>
                        <Link to="/shop" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-vastra-pink hover:bg-gray-50">Shop</Link>
                        <Link to="/collections" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-vastra-pink hover:bg-gray-50">Collections</Link>
                        <Link to="/cart" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-vastra-pink hover:bg-gray-50">Cart (0)</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
