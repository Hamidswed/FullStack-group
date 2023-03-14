
// food router here


import { Router } from "express";

import {
    getFoodListController,
    createFoodController,
    deleteFoodByIdController,
    updateFoodByIdController,
    getFoodByIdController,
} from "../controllers/food";

const foodRouter = Router();

// Call Express Methods for food Collection by foodRouter
foodRouter.get("/", getFoodListController);
foodRouter.get("/:id", getFoodByIdController)
foodRouter.post("/", createFoodController);
foodRouter.delete("/:id", deleteFoodByIdController);
foodRouter.put("/:id", updateFoodByIdController);

export default foodRouter;

