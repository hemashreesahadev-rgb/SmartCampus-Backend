const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ Database Connected"))
    .catch(err => console.log("❌ MongoDB Error:", err));

// This part makes the "Not Found" go away
app.get('/', (req, res) => {
    res.send("Smart Campus API is officially LIVE!");
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`🚀 Server is flying on port ${PORT}`);
});

