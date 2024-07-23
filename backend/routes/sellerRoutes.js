const sellerController=require('../controllers/SellerController');

const express=require('express');
const router=express.Router();
router.post('/Register',sellerController.sellerRegister);
router.post('/login',sellerController.sellerLogin);
router.get('/All-Sellers',sellerController.getAllSellers);
router.get('/single-seller/:id',sellerController.getSellersById);

module.exports=router;