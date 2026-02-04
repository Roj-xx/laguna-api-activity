// server.js
require('dotenv').config();

const express = require('express');
const connectDB = require('./src/config/db');
const app = express();
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// Load Config
const PORT = process.env.PORT || 3000;
const BASE_URI = process.env.BASE_URI || '/api/v1';

// Import Routes (we will create this later)
const apiRoutes = require('./src/routes/apiRoutes');
app.use(process.env.BASE_URI, apiRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Base URI: http://localhost:${PORT}${BASE_URI}`);
    console.log(`API ready at: http://localhost:${PORT}${BASE_URI}/dishes`);
});