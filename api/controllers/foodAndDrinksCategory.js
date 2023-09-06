import FoodAndDrinksCategory from "../models/FoodAndDrinksCategory.js"

export const createFoodAndDrinksCategory = async (req, res, next) =>{

    const newFoodAndDrinksCategory = new FoodAndDrinksCategory(req.body)
    try{
        const createdFoodAndDrinksCategory = await newFoodAndDrinksCategory.save()
        res.status(200).json(createdFoodAndDrinksCategory)
    } catch(err){
        next(err)
    }
}

export const updateFoodAndDrinksCategory = async (req, res, next) =>{
    try{
        const updatedFoodAndDrinksCategory = await  FoodAndDrinksCategory.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )
        res.status(200).json(updatedFoodAndDrinksCategory )
    } catch(err) {
        next(err)
    }   
}

export const deleteFoodAndDrinksCategory = async (req, res, next) =>{
    try{
        await FoodAndDrinksCategory.findByIdAndDelete(req.params.id)
        res.status(200).json("The category has been deleted!")
    } catch(err){
        next(err)
    }
}

export const getFoodAndDrinksCategory = async (req, res, next) =>{
    try{
        const foodAndDrinksCategory = await FoodAndDrinksCategory.findById(req.params.id)
        res.status(200).json(foodAndDrinksCategory)
    } catch(err){
        next(err)
    }
}

export const getAllFoodAndDrinksCategories = async (req, res, next) =>{
    try{
        const foodAndDrinksCategories = await FoodAndDrinksCategory.find()
        res.status(200).json(foodAndDrinksCategories)
    } catch(err){
        next(err)
    }
}