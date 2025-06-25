import mongoose from "mongoose";
import Meal from "./mealModal.js";

const MONGODB_URI = "mongodb+srv://erdemkaraahmet0:ptuJQ4oileku9UCw@cluster0.rxnwyqa.mongodb.net/"; // Update if needed

const meals = [
  { name: "Kebap" },
  { name: "Mantı" },
  { name: "Lahmacun" },
  { name: "Pilav" },
  { name: "Kuru Fasulye" }
];

async function seedMeals() {
  try {
    await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    await Meal.deleteMany({});
    await Meal.insertMany(meals);
    console.log("Meals seeded successfully!");
  } catch (err) {
    console.error("Seeding failed:", err);
  } finally {
    await mongoose.disconnect();
  }
}

seedMeals();