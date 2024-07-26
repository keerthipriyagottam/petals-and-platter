const Product=require("../models/Product");
const multer=require('multer');
const Company=require('../models/Company')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/'); // Destination folder for uploaded files
    },
    filename: function(req, file, cb) {
        // Define a unique name for each uploaded file
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload=multer({storage:storage});

const getProductsByCompany = async(req,res)=>{
   
    try {
        const companyId= req.params.x;
        const company=await Company.findById(companyId);
        if(!company){
            res.status(400).json({message:"No product found"})
        }
        const CompanyName= company.companyName
        const products= await Product.find({Company:companyId})
        res.status(200).json({CompanyName,products});
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}






const addproduct=async(req,res)=>{
    try {
        const{productName,price,category,BestSeller,Description}=req.body;
        const Image=req.file?req.file.filename:undefined;

        const companyId=req.params.companyId;
        const company=await Company.findById(companyId)
        if(!company){
            res.status(404).json({message:"No Company found!!!"})
        }
        const product=new Product({
            productName,price,category,BestSeller,Description,Image,Company:company._id
        })

        const savedProduct=await product.save();
        company.products.push(savedProduct)
        await company.save();
        res.status(200).json({savedProduct})
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}


const deleteProduct= async(req,res)=>{
    try {
        const productId=req.params.productId;
        const deletedproduct= await Product.findByIdAndDelete(productId);
        if(!deletedproduct){
            res.status(404).json({message:"Product Not found"})
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}



module.exports={addproduct:[upload.single('Image'),addproduct],getProductsByCompany,deleteProduct}