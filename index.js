const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// --- MIDDLEWARE ---
app.use(express.json()); // Allows the server to understand JSON data from your Android app
app.use(cors());         // Allows your Android app to talk to this server from a different domain

// --- MONGODB CONNECTION ---
// We use process.env.MONGO_URI so your password stays hidden in Render's "Environment Variables"
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI)
    .then(() => {
        console.log("✅ SUCCESS: Connected to Smart Campus Database (MongoDB Atlas)");
    })
    .catch((err) => {
        console.error("❌ DATABASE ERROR: Connection failed!", err);
    });

// --- TEST ROUTE ---
// You can visit your Render URL in a browser to see this message
app.get('/', (req, res) => {
    res.status(200).send({
        status: "Online",
        message: "Smart Campus Backend API is officially LIVE!",
        timestamp: new Date()
    });
});

// --- START SERVER ---
// Render will automatically assign a PORT, otherwise it uses 3000 locally
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server is flying on port ${PORT}`);

});
app.get('/', (req, res) => {
    res.send("Smart Campus API is officially LIVE!");
});
