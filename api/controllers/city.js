import City from "../models/City.js"

export const createCity = async (req, res, next) =>{

    const newCity = new City(req.body)
    try{
        const createdCity = await newCity.save()
        res.status(200).json(createdCity)
    } catch(err){
        next(err)
    }
}

export const updatedCity = async (req, res, next) =>{
    try{
        const updatedCity = await City.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )
        res.status(200).json(updatedCity)
    } catch(err) {
        next(err)
    }   
}

export const deleteCity = async (req, res, next) =>{
    try{
        await City.findByIdAndDelete(req.params.id)
        res.status(200).json("City has been deleted!")
    } catch(err){
        next(err)
    }
}

export const getCity = async (req, res, next) =>{
    try{
        const hotel = await City.findById(req.params.id)
        res.status(200).json(hotel)
    } catch(err){
        next(err)
    }
}

export const getAllCities = async (req, res, next) =>{
    try{
        const hotels = await City.find()
        res.status(200).json(hotels)
    } catch(err){
        next(err)
    }
}