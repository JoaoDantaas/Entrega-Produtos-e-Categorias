import { Router } from "express";

import createCategoriesController from "../controllers/categories/createCategories.controller";
import deleteCategoriesController from "../controllers/categories/deleteCategories.controller";
import listCategoriesController from "../controllers/categories/listCategories.controller";
import listCategoriesIdController from "../controllers/categories/listCategoriesId.controller";
import updateCategoriesController from "../controllers/categories/updateCategories.controller";

const router = Router()

router.post("", createCategoriesController)
router.get("", listCategoriesController)
router.get("/:id", listCategoriesIdController)
router.patch("/:id", updateCategoriesController)
router.delete("/:id", deleteCategoriesController)

export default router