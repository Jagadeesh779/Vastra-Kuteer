import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    {/* Brand Info */}
                    <div className="space-y-4">
                        <h2 className="font-serif text-3xl text-vastra-gold font-bold">Vastra Kuteer</h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Celebrating the elegance of Indian ethnic wear. Handcrafted sarees, kurtas, and more for the modern soul with a traditional heart.
                        </p>
                        <div className="flex space-x-4 pt-4">
                            <a href="#" className="text-gray-400 hover:text-vastra-pink transition-colors"><Instagram className="h-5 w-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-vastra-blue transition-colors"><Facebook className="h-5 w-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-vastra-teal transition-colors"><Twitter className="h-5 w-5" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-serif font-semibold mb-6 text-white border-b-2 border-vastra-teal inline-block pb-1">Quick Links</h3>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-vastra-gold transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-vastra-gold transition-colors">Our Collections</a></li>
                            <li><a href="#" className="hover:text-vastra-gold transition-colors">Terms & Conditions</a></li>
                            <li><a href="#" className="hover:text-vastra-gold transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-vastra-gold transition-colors">Blog</a></li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h3 className="text-lg font-serif font-semibold mb-6 text-white border-b-2 border-vastra-pink inline-block pb-1">Customer Care</h3>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-vastra-gold transition-colors">Track Order</a></li>
                            <li><a href="#" className="hover:text-vastra-gold transition-colors">Shipping Policy</a></li>
                            <li><a href="#" className="hover:text-vastra-gold transition-colors">Returns & Refunds</a></li>
                            <li><a href="#" className="hover:text-vastra-gold transition-colors">FAQs</a></li>
                            <li><a href="#" className="hover:text-vastra-gold transition-colors">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-serif font-semibold mb-6 text-white border-b-2 border-vastra-gold inline-block pb-1">Contact Us</h3>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="flex items-start space-x-3">
                                <MapPin className="h-6 w-6 text-vastra-teal mt-0.5 flex-shrink-0" />
                                <span>Rudhra Hasthina,D Block 401,NRI Colony,Pragathi Nagar,Hyderabad.
                                    pincode : 500090</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-vastra-teal" />
                                <span>+91 63016 55436</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-vastra-teal" />
                                <span>vastrakuteer9@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Vastra Kuteer. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
