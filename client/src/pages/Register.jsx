import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Check, ArrowLeft } from 'lucide-react';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({ fullName: '', email: '', password: '', confirmPassword: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const res = await axios.post('http://localhost:5000/api/auth/register', {
                fullName: formData.fullName,
                email: formData.email,
                password: formData.password
            });
            console.log(res.data);
            alert('Registration Successful! Please login.');
            navigate('/login');
        } catch (err) {
            console.error(err);
            setError(err.response?.data?.message || 'Registration failed');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl border-t-4 border-vastra-pink">

                <div className="text-center">
                    <h2 className="text-4xl font-serif font-bold text-gray-900 mb-2">Join Vastra Kuteer</h2>
                    <p className="text-gray-500">Create an account to start your ethnic journey</p>
                </div>

                {error && (
                    <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm text-center border border-red-100">
                        {error}
                    </div>
                )}

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <User className="h-5 w-5 text-gray-400 group-focus-within:text-vastra-pink transition-colors" />
                            </div>
                            <input
                                id="fullName"
                                name="fullName"
                                type="text"
                                required
                                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-vastra-pink focus:border-vastra-pink transition-colors bg-gray-50 focus:bg-white"
                                placeholder="Full Name"
                                value={formData.fullName}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-vastra-pink transition-colors" />
                            </div>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-vastra-pink focus:border-vastra-pink transition-colors bg-gray-50 focus:bg-white"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-vastra-pink transition-colors" />
                            </div>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-vastra-pink focus:border-vastra-pink transition-colors bg-gray-50 focus:bg-white"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-vastra-pink transition-colors" />
                            </div>
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                required
                                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-vastra-pink focus:border-vastra-pink transition-colors bg-gray-50 focus:bg-white"
                                placeholder="Confirm Password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="flex items-start space-x-2 text-sm text-gray-600 mt-2">
                        <input type="checkbox" required className="mt-1 h-4 w-4 text-vastra-pink rounded" />
                        <span>I agree to the <a href="#" className="text-vastra-pink hover:underline">Terms of Service</a> and <a href="#" className="text-vastra-pink hover:underline">Privacy Policy</a></span>
                    </div>

                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-vastra-pink hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vastra-pink transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        Create Account
                    </button>
                </form>

                <div className="text-center mt-6">
                    <Link to="/login" className="flex items-center justify-center text-sm font-medium text-gray-600 hover:text-vastra-blue transition-colors">
                        <ArrowLeft className="h-4 w-4 mr-1" /> Back to Login
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Register;
