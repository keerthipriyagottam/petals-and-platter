const company=require('../models/Company');
const Seller = require('../models/Seller');
const seller=require('../models/Seller');
const multer=require('multer')


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

const addCompany=async(req,res)=>{
    try {
        
        const{companyName,companyAddress,category,FilterByStore,Deals}=req.body;

        const Image=req.file?req.file.filename:undefined;
    
      
        const seller=await Seller.findById(req.sellerId)
        if(!seller){
            res.status(404).json({message:"Seller not found"})
        }
    
        const Company=new company({
            companyName,companyAddress,category,FilterByStore,Deals,Image,seller:seller._id
        })
    
        const saveCompany=await Company.save();

        seller.company.push(saveCompany);
        await seller.save();
        res.status(202).json({message:"Company Added Successfully..."})

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}


module.exports={addCompany:[upload.single('Image'),addCompany]}
