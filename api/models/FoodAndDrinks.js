import mongoose from "mongoose";

const foodAndDrinksSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  foodAndDrinksCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FoodAndDrinksCategory',
    required: true,
  }
});

export default mongoose.model('FoodAndDrinks', foodAndDrinksSchema);
