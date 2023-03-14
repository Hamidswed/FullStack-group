import Food, { FoodDocument } from "../models/Food";

const createFood = async (food: FoodDocument): Promise<FoodDocument> => {
  return food.save();
};

const getFoodList = async (): Promise<FoodDocument[]> => {
  return Food.find();
};

export default {
  createFood,
  getFoodList,
};
