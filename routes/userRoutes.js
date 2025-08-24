const express = require('express');
const router = express.Router();
const User = require('../models/user');  // Import the User model

// POST route for signup
router.post('/', async (req, res) => {
    const { name, email, password, dob } = req.body;

    // Validate that all fields are provided
    if (!name || !email || !password || !dob) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        // Create a new user
        const newUser = await User.create({ name, email, password, dob });
        res.status(201).json(newUser);  // Return the created user as response
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create user' });
    }
});

module.exports = router;
