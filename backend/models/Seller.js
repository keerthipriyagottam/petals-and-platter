// define the schema
const mongoose=require('mongoose')
const sellerSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true
    },
    company:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'company'
        }
    ]
})

const Seller=mongoose.model("Seller",sellerSchema);

module.exports=Seller;

