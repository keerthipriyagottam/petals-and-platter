const seller=require('../models/Seller');
const jwt =require('jsonwebtoken');
const dotenv=require('dotenv');
const Seller = require('../models/Seller');

const secretKey=process.env.secretKey

const verifyToken= async(req,res,next)=>{
    const token=req.headers.token;
    if(!token){
        res.status(400).json({Error:"Token is required"})
    }
    try {
        const decoded=jwt.verify(token,secretKey)
        const seller=await Seller.findById(decoded.sellerId)

        if(!seller){
            return res.status(404).json({Error:"Seller not Found"})
        }

        req.sellerId=seller._id
        next()

    }
    
    catch (error) {
        console.error(error);
        return res.status(500).json({Message:"Token not Found"})
    }
}

module.exports=verifyToken;