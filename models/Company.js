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
                enum:['Flowers','Fruits','Vegetables','Milk','Eggs','cheese']
            }
        ],
    },
    FilterByStore:{
        type:[
            {
                type:String,
                enum:['Grocery Store','Flower Store','Dairy Store']
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
    ],
    products:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Product'
        }
    ]
    
})

const company=mongoose.model("company",companySchema);

module.exports=company;