
// food router here


import { Router } from "express";

import {
    getFoodListController,
    createFoodController,
    deleteFoodByIdController,
    updateFoodByIdController,
} from "../controllers/food";

const foodRouter = Router();

// Call Express Methods for food Collection by foodRouter
foodRouter.get("/", getFoodListController);
foodRouter.post("/", createFoodController);
foodRouter.delete("/:id", deleteFoodByIdController);
foodRouter.put("/:id", updateFoodByIdController);

export default foodRouter;

