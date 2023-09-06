import mongoose from "mongoose";

const foodAndDrinksCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  city: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'City',
    required: true,
  },
});

export default mongoose.model('FoodAndDrinksCategory', foodAndDrinksCategorySchema);
