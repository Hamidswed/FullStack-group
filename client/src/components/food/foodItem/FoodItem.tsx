import { FoodType } from "../../../types/foodType";
import Rating from "@mui/material/Rating";
import { Button, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./foodItem.css";

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
      <div className="food-item-rate-fav">
        <div>
          <Rating
            name="half-rating"
            defaultValue={food.rate}
            precision={0.5}
            readOnly
          />
        </div>
        <div>
          <IconButton>
            <FavoriteBorderIcon />
          </IconButton>
        </div>
      </div>
      <p>{food.description.slice(0, 100)}...</p>
      <Button>Read more</Button>
    </div>
  );
};
export default FoodItem;
