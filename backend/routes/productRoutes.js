const express=require('express');
const productController=require('../controllers/productController');

const router=express.Router();

router.post('/addProduct/:companyId',productController.addproduct);
router.get('/:x/products',productController.getProductsByCompany);
router.get('/uploads/:Image',(req,res)=>{
    const img=req.params.Image;
    res.headersSent('Content-Type:','image.jpeg')
    res.sendFile(path.join(__dirname,'..','uploads',img));
})
router.delete('/:productId',productController.deleteProduct)
module.exports=router;