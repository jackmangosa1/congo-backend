import express from "express"
import { createCity, updatedCity, deleteCity, getCity, getAllCities} from "../controllers/city.js"
import { verifyAdmin } from "../utils/verifyToken.js"

const router  = express.Router()
router.post('/', verifyAdmin, createCity)
router.put('/:id', verifyAdmin, updatedCity)
router.delete('/:id', verifyAdmin, deleteCity)
router.get('/:id', getCity)
router.get('/', getAllCities)

export default router