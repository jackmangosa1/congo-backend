import FoodAndDrinks from "../models/FoodAndDrinks.js"

export const createFoodAndDrinks = async (req, res, next) =>{

    const newFoodAndDrinks = new FoodAndDrinks(req.body)
    try{
        const createdFoodAndDrinks = await newFoodAndDrinks.save()
        res.status(200).json(createdFoodAndDrinks)
    } catch(err){
        next(err)
    }
}

export const updateFoodAndDrinks = async (req, res, next) =>{
    try{
        const updatedFoodAndDrinks = await  FoodAndDrinks.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )
        res.status(200).json(updatedFoodAndDrinks)
    } catch(err) {
        next(err)
    }   
}

export const deleteFoodAndDrinks = async (req, res, next) =>{
    try{
        await FoodAndDrinks.findByIdAndDelete(req.params.id)
        res.status(200).json("The item has been deleted!")
    } catch(err){
        next(err)
    }
}

export const getFoodAndDrinks = async (req, res, next) =>{
    try{
        const foodAndDrinks = await FoodAndDrinks.findById(req.params.id)
        res.status(200).json(foodAndDrinks)
    } catch(err){
        next(err)
    }
}

export const getAllFoodAndDrinks= async (req, res, next) =>{
    try{
        const foodAndDrinks = await FoodAndDrinks.find()
        res.status(200).json(foodAndDrinks)
    } catch(err){
        next(err)
    }
}