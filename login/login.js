// Import token
let token = require('../token/token');

// Import modules
const express = require('express');
const mongoose = require('mongoose');

// Import url
const url = require('../urls');
 const User=require("../model/User")

// Create router instance
let router = express.Router();

// Connect to MongoDB using Mongoose
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('Error in connection', err));

// Create GET API for /login
router.get("/", (req, res) => {
    res.send('GET method is not supported for login. Please use POST.');
});

// Create POST API for /login
router.post("/", async (req, res) => {
    try {
        // Get the request body
        let obj = req.body;

        // Find user in the database
        let users = await User.find(obj).exec();

        if (users.length > 0) {
            console.log('Auth Success');
            let myToken = token(obj, new Date().toString());
            res.json({ 'auth': 'success', token: myToken });
        } else {
            console.log('Auth Failed');
            res.json({ 'auth': 'failed' });
        }
    } catch (err) {
        console.log('Error:', err);
        res.status(500).json({ 'error': 'Internal Server Error' });
    }
});

// Export router
module.exports = router;


