import mongoose from "mongoose";

const tripPlanningSchema = new mongoose.Schema({
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
  city: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'City',
    required: true,
  },
});

export default mongoose.model('TripPlanningTool', tripPlanningSchema);
