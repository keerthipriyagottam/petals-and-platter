const companyController=require('../controllers/companyController')
const verifyToken=require('../middleware/verifyToken')
const express=require('express');
const router=express.Router();

router.post('/addCompany',verifyToken,companyController.addCompany);
router.get('/uploads/:Image',(req,res)=>{
    const img=req.params.Image;
    res.headersSent('Content-Type:','image.jpeg')
    res.sendFile(path.join(__dirname,'..','uploads',img));
})
router.delete('/:companyId',companyController.deleteCompany)
module.exports=router;