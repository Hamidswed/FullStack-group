import { useSelector, useDispatch } from "react-redux";

import "./foodItem.css";
import { favoriteActions } from "../../../redux/slice/favorite";
import { FoodType } from "../../../types/foodType";
import { RootState } from "../../../redux/store";


import Rating from "@mui/material/Rating";
import { Button, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";


type PropType = {
  food: FoodType;
};
const FoodItem = ({ food }: PropType) => {
  
  const dispatch = useDispatch();
  const favState = useSelector((state: RootState) => state.favorite.favorites);

  // Check Favorite
  let isFav = favState.some(
    (item) => item.title === food.title
  );
  
  // Add Favorite
  const addToFavorite = () => {
    dispatch(favoriteActions.addToFavorite(food));
  };

  // Remove Favorite
  const removeFromFavorite = () => {
    dispatch(favoriteActions.removeFromFavorite(food));
  };

  // Favorite Handler
  const favHandler = () => {
    if (isFav) {
      removeFromFavorite();
      isFav = !isFav;
    } else {
      addToFavorite();
      isFav = !isFav;
    }
  };

  return (
    <div className="food-item-container">
      <h3>{food.title}</h3>
      <Link to={`/food/${food._id}`}>
        <div className="food-item-image-fram">
          <img src={food.image} alt={food.title} />
        </div>
      </Link>
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
          <IconButton onClick={favHandler} >
            <FavoriteBorderIcon sx={{ color: isFav ? "red" : "gray" }} />
          </IconButton>
        </div>
      </div>
      <p>{food.description.slice(0, 100)}...</p>
      <Button>Read more</Button>
    </div>
  );
};
export default FoodItem;
