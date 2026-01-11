const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// --- MIDDLEWARE ---
app.use(express.json()); 
app.use(cors());         

// --- MONGODB CONNECTION ---
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI)
    .then(() => {
        console.log("✅ SUCCESS: Connected to Smart Campus Database (MongoDB Atlas)");
    })
    .catch((err) => {
        console.error("❌ DATABASE ERROR: Connection failed!", err);
    });

// --- HOME ROUTE (This fixes the 'Not Found' error) ---
app.get('/', (req, res) => {
    res.status(200).send("Smart Campus API is officially LIVE and Working!");
});

// --- START SERVER ---
// Render uses port 10000 by default, so we use process.env.PORT
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`🚀 Server is flying on port ${PORT}`);
});
