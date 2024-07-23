const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const sellerRoutes = require('./routes/sellerRoutes');

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connection successful"))
    .catch(err => console.error("MongoDB connection error:", err));

app.use(express.json()); // Parse JSON bodies automatically

app.use('/Seller', sellerRoutes);

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});

// Example route
app.get('/Home', (req, res) => {
    res.send("<h1>Welcome to the Home page</h1>");
});
