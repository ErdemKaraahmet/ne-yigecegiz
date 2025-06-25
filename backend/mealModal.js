import { Schema, model } from "mongoose";

const mealSchema = new Schema (
    {
        name: { type: String, required: true }
    }
);

export default model("Meal",mealSchema);