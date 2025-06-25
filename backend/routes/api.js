import { Router } from "express";

import {} from "../controller.js";

const router = Router();

router.get("/randomlyPick", randomlyPick);

router.post("/addItem", addItem);

//router.delete("/removeItem, removeItem);

router.get("/getMeals", getMeals);

export default router;