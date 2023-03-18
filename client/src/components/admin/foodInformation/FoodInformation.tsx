import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import "./foodInfo.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { fetchFoodData } from "../../../redux/thunk/food";

const FoodInformation = () => {
  const foodList = useSelector((state: RootState) => state.food.food);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchFoodData());
  }, [dispatch,foodList]);

  return (
    <div className="food-info-container">
      <h2>Food Recipes Information</h2>
      <TableContainer component={Paper} sx={{ maxWidth: "85%" }}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>
                <b>#</b>
              </TableCell>
              <TableCell>
                <b>Food Item</b>
              </TableCell>
              <TableCell>
                <b>Title</b>
              </TableCell>
              <TableCell>
                <b>Description</b>
              </TableCell>
              <TableCell>
                <b>Action</b>
              </TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {foodList.map((food,index) => {
              return (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  key={food._id}
                >
                  <TableCell>{index+1}</TableCell>

                  <TableCell component="th" scope="row">
                    <img src={food.image} height={70} alt={food.title} />
                  </TableCell>
                  <TableCell>{food.title}</TableCell>
                  <TableCell>{food.description.slice(0, 150)} ...</TableCell>
                  <TableCell>
                    <EditIcon onClick={() => navigate("/updateFood")} />
                  </TableCell>
                  <TableCell>
                    <DeleteIcon />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default FoodInformation;
