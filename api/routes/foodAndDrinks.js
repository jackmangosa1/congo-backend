import express from "express"
import { createFoodAndDrinks, updateFoodAndDrinks, deleteFoodAndDrinks, getFoodAndDrinks, getAllFoodAndDrinks} from "../controllers/foodAndDrinks.js"
import { verifyAdmin } from "../utils/verifyToken.js"

const router  = express.Router()
router.post('/', verifyAdmin, createFoodAndDrinks)
router.put('/:id', verifyAdmin, updateFoodAndDrinks)
router.delete('/:id', verifyAdmin, deleteFoodAndDrinks)
router.get('/:id', getFoodAndDrinks)
router.get('/', getAllFoodAndDrinks)

export default router