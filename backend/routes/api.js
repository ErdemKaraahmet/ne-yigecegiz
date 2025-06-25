import { Router } from "express";

import { getMeals, randomlyPick, addItem, removeItem } from "../controller.js";

const router = Router();

router.get("/randomlyPick", randomlyPick);

router.post("/addItem", addItem);

router.delete("/removeItem/:id", removeItem);

router.get("/getMeals", getMeals);

export default router;

