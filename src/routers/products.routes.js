import { Router } from "express";

import createProductsController from "../controllers/products/createProducts.controller";
import deleteProductsController from "../controllers/products/deleteProducts.controller";
import listProductsController from "../controllers/products/listProducts.controller";
import listProductsCategoryController from "../controllers/products/listProductsCategory.controller";
import listProductsIdController from "../controllers/products/listProductsId.controller";
import updateProductsController from "../controllers/products/updateProducts.controller";


const router = Router()

router.post("", createProductsController )
router.get("", listProductsController)
router.get("/:id",listProductsIdController)
router.patch("/:id", updateProductsController)
router.delete("/:id", deleteProductsController)
router.get("/category/:id", listProductsCategoryController)

export default router