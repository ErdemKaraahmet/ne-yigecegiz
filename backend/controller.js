import { Router } from "express";
import Meal from "./mealModal.js";

export const randomlyPick = async (req,res) => {
    try {
        const meals = await Meal.find();
        const rand = Math.floor(Math.random()*meals.length);
        const randMeal = meals[rand];
        return res.status(201).json({ message: "Meal randomly picked", meal: randMeal});
    } catch (error) {
        console.error("Error randomly picking: ", error);
        return res.status(500).json({ message: "Server error"})
    }
};


export const addItem = async (req,res) => {
    try {
        const { name } = req.body;
        if(!name){
            return res.status(400).json({message: "Meal name is required"})
        }
        const meal = new Meal({ name });
        await meal.save();
        return res.status(201).json({ message: "Meal added successfully", meal });
    } catch (error) {
        console.error("Error adding meal:", error);
        return res.status(500).json({ message: "Server error" });
    }
};


export const getMeals = async (req,res) => {
    try {
        const meals = await Meal.find(); // get every meal as an array
        return res.status(200).json({ meals }); // programs is an array
    } catch (error) {
        console.error("Error listing diet programs:", error);
        return res.status(500).json({ message: "Server error" });
    }
};


export const removeItem = async (req, res) => {
    try {
        const { id } = req.params;
        await Meal.findByIdAndDelete(id);
        return res.status(200).json({ message: "Meal removed" });
    } catch (error) {
        console.error("Error removing meal:", error);
        return res.status(500).json({ message: "Server error" });
    }
};