// Food Item controller

import { Request, Response } from "express";
import Food from "../models/Food";

import FoodServices from "../services/food";

//1: Get Controller
export const getFoodListController = async (req: Request, res: Response) => {
  try {
    const foodList = await FoodServices.getFoodList();
    res.json(foodList);
  } catch (error) {
    console.log(error);
  }
};

//2: Post Controller
export const createFoodController = async (req: Request, res: Response) => {
  try {
    // We'll get food here from FrontEnd | Client
    const newFoodItem = new Food({
      name: req.body.title,
      quantity: req.body.description,
      image: req.body.image
    });

    // New food item save in DB via services
    const foodItem = await FoodServices.createFood(newFoodItem);

    // Response back to Frontend
    res.json(foodItem);
  } catch (error) {
    console.log(error);
  }
};

//3: Delete Controller
export const deleteFoodByIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const deleteFoodItem = await FoodServices.deleteFoodById(
      req.params.id
    );
    res.json(deleteFoodItem);
  } catch (error) {
    console.log(error);
  }
};

//4: Update Controller
export const updateFoodByIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const updateFoodItem = await FoodServices.updateFoodById(
      req.params.id,
      req.body
    );
    res.json(updateFoodItem);
  } catch (error) {
    console.log(error);
  }
};
