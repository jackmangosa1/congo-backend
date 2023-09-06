import express from "express"
import { createThingToDo, updateThingToDo, deleteThingToDo, getThingToDo, getAllThingsToDo} from "../controllers/thingsToDo.js"
import { verifyAdmin } from "../utils/verifyToken.js"

const router  = express.Router()
router.post('/', verifyAdmin, createThingToDo)
router.put('/:id', verifyAdmin, updateThingToDo)
router.delete('/:id', verifyAdmin, deleteThingToDo)
router.get('/:id', getThingToDo)
router.get('/', getAllThingsToDo)

export default router