const mongoose=require('mongoose');
const companySchema=new mongoose.Schema({
    companyName:{
        type:String,
        required:true,
        unique:true
    },
    companyAddress:{
        type:String,
        required:true,
    },
    category:{
        type:[
            {
                type:String,
                enum:['Flowers','Fruits','Chocolates','Bakery','Sweets','Vegetables','Dairy','Meat','HairCare','SkinCare','FaceCare','PetSupplies','Perfumes','KitchenWare','Bedding','BoardGames','cameras','pendrives','Smartphones','Stationary','Magazines','OfficeSupplies','']
            }
        ],
    },
    FilterByStore:{
        type:[
            {
                type:String,
                enum:['Grocery Store','Beauty Store','Departmental Store','Pooja Store','Pet Store','Home Store','Clothing Store','Electronics Store','Book Store','Furniture Store','Toy Store']
            }
        ],
    },
    Deals:{
        type:String
    },
    Image:{
        type:String
    },
    seller:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Seller'
        }
    ]
    
})

const company=mongoose.model("company",companySchema);

module.exports=company;