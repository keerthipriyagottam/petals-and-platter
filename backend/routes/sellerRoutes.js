const sellerController=require('../controllers/SellerController');

const express=require('express');
const router=express.Router();
router.post('/Register',sellerController.sellerRegister);
router.post('/login',sellerController.sellerLogin);
module.exports=router;