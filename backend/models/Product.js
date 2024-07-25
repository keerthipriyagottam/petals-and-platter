// productname,price,category,Image,des,Bestseller

const mongoose=require('mongoose');
const ProductSchema=new mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    category:{
        type:[
            {
                type:String,
                enum:['Flowers','Fruits','Chocolates','Bakery','Sweets','Vegetables','Dairy','Meat','HairCare','SkinCare','FaceCare','PetSupplies','Perfumes','KitchenWare','Bedding','BoardGames','cameras','pendrives','Smartphones','Stationary','Magazines','OfficeSupplies','']
            }
        ],
    },
    Image:{
        type:String
    },
    BestSeller:{
        type:String
    },
    Description:{
        type:String
    },
    Company:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'company'
    }]
})

const Product=mongoose.model("Product",ProductSchema);
module.exports=Product;