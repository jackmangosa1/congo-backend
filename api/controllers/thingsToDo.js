import ThingToDo from "../models/ThingToDo.js"

export const createThingToDo = async (req, res, next) =>{

    const newThingToDo = new ThingToDo (req.body)
    try{
        const createdThingToDo = await newThingToDo.save()
        res.status(200).json(createdThingToDo)
    } catch(err){
        next(err)
    }
}

export const updateThingToDo = async (req, res, next) =>{
    try{
        const updatedThingToDo = await  ThingToDo.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )
        res.status(200).json(updatedThingToDo)
    } catch(err) {
        next(err)
    }   
}

export const deleteThingToDo = async (req, res, next) =>{
    try{
        await ThingToDo.findByIdAndDelete(req.params.id)
        res.status(200).json("The activity has been deleted!")
    } catch(err){
        next(err)
    }
}

export const getThingToDo = async (req, res, next) =>{
    try{
        const thingToDo = await ThingToDo.findById(req.params.id)
        res.status(200).json(thingToDo)
    } catch(err){
        next(err)
    }
}

export const getAllThingsToDo = async (req, res, next) =>{
    try{
        const  ThingsToDo = await ThingToDo.find()
        res.status(200).json(ThingsToDo)
    } catch(err){
        next(err)
    }
}