import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, ShieldCheck, ArrowRight } from 'lucide-react';
import axios from 'axios';
import { API_URL } from '../config';

const Login = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const res = await axios.post(`${API_URL}/api/auth/login`, {
                email: formData.email,
                password: formData.password
            });
            console.log('Login Success:', res.data);

            // Store token/user data (Mocking token storage for now as backend returns user)
            // localStorage.setItem('token', res.data.token); 
            localStorage.setItem('user', JSON.stringify(res.data.user));

            alert('Login Successful!');
            navigate('/');
        } catch (err) {
            console.error(err);
            setError(err.response?.data?.message || 'Login failed. Please checks your credentials.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl w-full space-y-8 bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">

                {/* Left Side - Graphical Decoration */}
                <div className="hidden md:block w-1/2 bg-vastra-blue relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-vastra-blue to-vastra-teal opacity-90"></div>
                    <img
                        src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=2574&auto=format&fit=crop"
                        alt="Indian Traditional Wear"
                        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40"
                    />
                    <div className="relative z-10 p-12 text-white flex flex-col justify-center h-full">
                        <h2 className="text-4xl font-serif font-bold mb-6">Welcome Back</h2>
                        <p className="text-lg text-blue-100 mb-8">
                            To keep connected with us please login with your personal info.
                        </p>
                        <div className="w-20 h-1 bg-vastra-gold rounded-full"></div>
                    </div>
                    {/* Decorative Peacock Circle */}
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-vastra-gold/20 rounded-full blur-3xl"></div>
                </div>

                {/* Right Side - Form */}
                <div className="w-full md:w-1/2 p-12">
                    <div className="flex justify-end mb-4">
                        <button
                            onClick={() => setIsAdmin(!isAdmin)}
                            className={`flex items-center space-x-2 text-sm font-medium transition-colors ${isAdmin ? 'text-vastra-pink' : 'text-gray-500 hover:text-vastra-teal'}`}
                        >
                            {isAdmin ? <ShieldCheck className="w-4 h-4" /> : <User className="w-4 h-4" />}
                            <span>{isAdmin ? 'Login as User' : 'Login as Admin'}</span>
                        </button>
                    </div>

                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-serif font-bold text-gray-900">
                            {isAdmin ? 'Admin Portal' : 'User Login'}
                        </h2>
                        <p className="mt-2 text-sm text-gray-600">
                            Enter your credentials to access your account
                        </p>
                    </div>

                    {error && (
                        <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm text-center border border-red-100 mb-6">
                            {error}
                        </div>
                    )}

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-vastra-teal transition-colors" />
                                </div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-vastra-teal focus:border-vastra-teal transition-colors bg-gray-50 focus:bg-white"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-vastra-teal transition-colors" />
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-vastra-teal focus:border-vastra-teal transition-colors bg-gray-50 focus:bg-white"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-vastra-teal focus:ring-vastra-teal border-gray-300 rounded" />
                                <label htmlFor="remember-me" className="ml-2 block text-gray-900">Remember me</label>
                            </div>
                            <div className="text-sm">
                                <a href="#" className="font-medium text-vastra-pink hover:text-pink-700">Forgot password?</a>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white ${isAdmin ? 'bg-gray-900 hover:bg-gray-800' : 'bg-vastra-teal hover:bg-teal-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vastra-teal transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5`}
                        >
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                {isAdmin ? <ShieldCheck className="h-5 w-5 text-gray-500 group-hover:text-white transition-colors" /> : <Lock className="h-5 w-5 text-teal-500 group-hover:text-white transition-colors" />}
                            </span>
                            Sign In {isAdmin ? 'as Admin' : ''}
                        </button>
                    </form>

                    {!isAdmin && (
                        <div className="mt-8 text-center">
                            <p className="text-sm text-gray-600">
                                Don't have an account?{' '}
                                <Link to="/register" className="font-medium text-vastra-blue hover:text-blue-700 flex items-center justify-center mt-2 group">
                                    Create Free Account <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
