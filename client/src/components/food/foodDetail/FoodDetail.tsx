import "./foodDetail.css";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Snackbar from "@mui/material/Snackbar";
import { Alert, Button, IconButton } from "@mui/material";

import { Form, Formik } from "formik";

import { FoodType } from "../../../types/foodType";
import { TextField } from "@mui/material";
import foodDetailSchema from "./foodDetailSchema";
import { url } from "../../../App";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { useEffect, useState } from "react";
import { fetchCommentByFoodId } from "./../../../redux/thunk/comment";
import CommentItem from "../../comment/commentItem/CommentItem";
import { Link } from "react-router-dom";
import { favoriteActions } from "../../../redux/slice/favorite";

type PropType = {
  food: FoodType;
};

// Initial Type
type InitialType = {
  description: string;
};

// Initial Values
const initialValues: InitialType = {
  description: "",
};

const FoodDetail = ({ food }: PropType) => {
  const [open, setOpen] = useState(false);
  const user = useSelector((state: RootState) => state.user.user);
  const comments = useSelector((state: RootState) => state.comment.comments);
  const dispatch = useDispatch<AppDispatch>();
  const dispatchFav = useDispatch();
  const alert = useSelector((state: RootState) => state.favorite.alert);
  const favState = useSelector((state: RootState) => state.favorite.favorites);
  let isFav = favState.some((item) => item.title === food.title);

  useEffect(() => {
    dispatch(fetchCommentByFoodId(food._id));
  }, [dispatch, comments, food._id]);

  console.log(comments, "comments");

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const addToFavorite = () => {
    dispatchFav(favoriteActions.addToFavorite(food));
    dispatchFav(favoriteActions.showAlert("Recipe added to favorite!"));
    handleClick();
  };
  const removeFromFavorite = () => {
    dispatch(favoriteActions.removeFromFavorite(food));
    dispatch(favoriteActions.showAlert("Recipe removed from favorite!"));
    handleClick();
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
  // Function Call on Submit
  const token = localStorage.getItem("token");

  // rome-ignore lint/suspicious/noExplicitAny: <explanation>
  const submitHandler = (values: InitialType, { resetForm }: any) => {
    const userComment = {
      userId: user._id,
      message: values.description,
    };
    console.log(userComment, "user comment");
    axios
      .post(`${url}/comments/${food._id}`, userComment, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (res.status === 200) {
          resetForm({ values: initialValues });
        }
      });
  };

  return (
    <>
      <div className="food-detail">
        <div className="food-recipe">
          <Card sx={{ maxWidth: 530 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="cover"
                image={food.image}
                alt={food.title}
              />
            </CardActionArea>
          </Card>
        </div>
        <div className="food-title">
          <h1>{food.title}</h1>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ maxWidth: 800, lineHeight: 2 }}
          >
            {food.description}
          </Typography>
          <Link to="/all-recipes">
            <IconButton sx={{ mt: 2 }}>
              <ArrowBackIcon />
            </IconButton>
          </Link>
          <IconButton onClick={favHandler} sx={{ mt: 2 }}>
            <FavoriteBorderIcon sx={{ color: isFav ? "red" : "gray" }} />
          </IconButton>
          <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity={isFav ? "success" : "error"}
              sx={{ width: "100%" }}
            >
              {alert}
            </Alert>
          </Snackbar>
        </div>

        <div className="food-txtfields">
          <h4>Your Comments</h4>
          <Formik
            initialValues={initialValues}
            validationSchema={foodDetailSchema}
            onSubmit={submitHandler}
          >
            {({ values, errors, touched, handleChange }) => {
              return (
                <Form>
                  <TextField
                    className="textBox"
                    label="Description"
                    name="description"
                    multiline
                    rows={10}
                    onChange={handleChange}
                    value={values.description}
                  />
                  {errors.description && touched.description ? (
                    <div className="error-message">{errors.description}</div>
                  ) : null}
                  <div>
                    <Button
                      sx={{ width: 300, mt: 1 }}
                      type="submit"
                      variant="outlined"
                    >
                      Post Your Comment
                    </Button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
        {comments.map((comment) => {
          return <CommentItem key={comment._id} comment={comment} />;
        })}
      </div>
    </>
  );
};

export default FoodDetail;
