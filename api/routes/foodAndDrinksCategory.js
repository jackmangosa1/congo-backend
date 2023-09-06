import express from "express"
import { createFoodAndDrinksCategory, updateFoodAndDrinksCategory, deleteFoodAndDrinksCategory, getFoodAndDrinksCategory, getAllFoodAndDrinksCategories} from "../controllers/foodAndDrinksCategory.js"
import { verifyAdmin } from "../utils/verifyToken.js"

const router  = express.Router()
router.post('/', verifyAdmin, createFoodAndDrinksCategory)
router.put('/:id', verifyAdmin, updateFoodAndDrinksCategory)
router.delete('/:id', verifyAdmin, deleteFoodAndDrinksCategory)
router.get('/:id', getFoodAndDrinksCategory)
router.get('/', getAllFoodAndDrinksCategories)

export default router