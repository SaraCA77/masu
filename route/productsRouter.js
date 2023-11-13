import { Router } from 'express';
import productsController from '../controller/productsController.js';

const router = Router();

router.get('/products', productsController.getProducts); 
router.get('/product-one/:productId', productsController.getAProduct);
router.get('/products/category', productsController.getProductWihCategory);


export default router;