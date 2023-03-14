// product router here

import { Router } from "express";

import {
    getFoodListController,
    createFoodController,
    deleteFoodByIdController,
    updateFoodByIdController,
} from "../controllers/food";

const productRouter = Router();

// Call Express Methods for Product Collection by productRouter
productRouter.get("/", getProductListController);
productRouter.post("/", createProductController);
productRouter.delete("/:id", deleteProductByIdController);
productRouter.put("/:id", updateProductByIdController);

export default productRouter;
