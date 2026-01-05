const express = require('express');
const router = express.Router();
const User = require('../models/User');
// Note: In a real app, you should hash passwords using bcrypt
// const bcrypt = require('bcrypt');

// @route   POST /api/auth/register
// @desc    Register a new user
// @access  Public
router.post('/register', async (req, res) => {
    const { fullName, email, password } = req.body;

    try {
        // Check if user already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create new user
        // For now, storing plain text password as per simplicity request, 
        // but HIGHLY recommended to hash in production.
        user = new User({
            fullName,
            email,
            password,
        });

        await user.save();

        res.status(201).json({ message: 'User registered successfully', userId: user._id });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST /api/auth/login
// @desc    Authenticate user & get token (Mock for now)
// @access  Public
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid Credentials' });
        }

        if (user.password !== password) {
            return res.status(400).json({ message: 'Invalid Credentials' });
        }

        // Return user info (excluding password)
        res.json({
            message: 'Login successful',
            user: {
                id: user._id,
                fullName: user.fullName,
                email: user.email,
                role: user.role
            }
        });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
