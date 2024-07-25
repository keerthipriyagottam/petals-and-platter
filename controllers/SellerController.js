const Seller = require('../models/Seller');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const dotenv=require('dotenv');

dotenv.config();
const secretKey=process.env.secretKey;



const sellerRegister = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        console.log(email);

        // Check if the email already exists
        const existingSeller = await Seller.findOne({ email });
        if (existingSeller) {
            return res.status(400).json({ error: "Email Already Taken..." });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new seller instance
        const newSeller = new Seller({
            username,
            email,
            password: hashedPassword
        });

        // Save the new seller to the database
        await newSeller.save();

        // Respond with success message
        res.status(201).json({ message: "Registered Successfully!!" });
        console.log("User Added..");
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
}

const sellerLogin=async(req,res)=>{
    const{email,password}=req.body;
    try{
        const sellerAvailable=await Seller.findOne({email});
        if(!sellerAvailable ||!await(bcrypt.compare(password,sellerAvailable.password)) ){
            res.status(400).json({message:"invalid credentials"})
        }
        const token=jwt.sign({sellerId:sellerAvailable._id},secretKey,{expiresIn:"1h"})
        res.status(200).json({succes:"Login Successful",token});
        console.log("Token Generated",token);
    }
    
    catch(err){
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
}

const getAllSellers=async(req,res)=>{
    try {
        const sellers=await Seller.find().populate('company')
        res.json({sellers})
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const getSellersById=async(req,res)=>{
    const sellerID= req.params.id;
    console.log(sellerID);
    try {
        const sellerById=await Seller.findById(sellerID);
        if(!sellerById){
            res.status(400).json({message:"seller not found by id"})
        }
        res.status(200).json({sellerById});
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = { sellerRegister ,sellerLogin,getAllSellers,getSellersById};
