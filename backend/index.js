const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const sellerRoutes = require('./routes/sellerRoutes');
const companyRoutes=require('./routes/companyRoutes');
const productRoutes=require('./routes/productRoutes');
const path=require('path');
const cors=require('cors')




const app = express();
const port = process.env.PORT || 4000;

dotenv.config();
app.use(cors());


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connection successful"))
    .catch(err => console.error("MongoDB connection error:", err));

app.use(express.json()); // Parse JSON bodies automatically

app.use('/Seller', sellerRoutes);
app.use('/Company',companyRoutes);
app.use('/Product',productRoutes);
app.use('/uploads',express.static('uploads'))


app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});

// Example route
app.get('/', (req, res) => {
    res.send("<h1>Welcome to the Home page</h1>");
});
