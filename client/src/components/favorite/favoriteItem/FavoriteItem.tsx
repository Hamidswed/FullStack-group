import { FoodType } from "../../../types/foodType";

import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton, TableBody, TableCell, TableRow } from "@mui/material";
import { useDispatch } from "react-redux";
import { favoriteActions } from "../../../redux/slice/favorite";


type PropType = {
   favorite: FoodType;
   row: number;
};

const FavoriteItem = ({ favorite, row  }: PropType) => {
  const dispatch = useDispatch();
  return (
    <TableBody className="cart-item">
    <TableRow
      key={favorite._id}
      sx={{
        "&:last-child td, &:last-child th": {
          borderBottom: "1px solid lightgrey",
        },
        bgColor: "none",
      }}
    >
      <TableCell align="center"><img src={favorite.image} alt="Food Image" width={80} /> </TableCell>
      <TableCell align="center">{favorite.title.slice(0, 20)}</TableCell>
      <TableCell align="center">{favorite.description.slice(0, 89)}</TableCell>
      <TableCell align="center">
        <IconButton
          onClick={() =>
            dispatch(favoriteActions.removeFromFavorite(favorite))
          }
        >
          <FavoriteIcon sx={{ color: "red" }} />
        </IconButton>
      </TableCell>
    </TableRow>
  </TableBody>
  )
}

export default FavoriteItem;
