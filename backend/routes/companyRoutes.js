const companyController=require('../controllers/companyController')
const verifyToken=require('../middleware/verifyToken')
const express=require('express');
const router=express.Router();

router.post('/addCompany',verifyToken,companyController.addCompany);

module.exports=router;