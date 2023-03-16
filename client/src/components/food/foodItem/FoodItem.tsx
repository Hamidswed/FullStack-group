import { FoodType } from "../../../types/foodType";
import './foodItem.css'

type PropType = {
  food: FoodType;
};
const FoodItem = ({ food }: PropType) => {
  return (
    <div className="food-item-container">
      <h3>{food.title}</h3>
      <div className="food-item-image-fram">
        <img src={food.image} alt={food.title} />
      </div>
    </div>
  );
};
export default FoodItem;
