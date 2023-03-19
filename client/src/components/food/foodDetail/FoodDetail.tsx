import "./foodDetail.css";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Form, Formik } from "formik";

import Button from "@mui/material/Button";
import { FoodType } from "../../../types/foodType";
import { TextField } from "@mui/material";
import foodDetailSchema from "./foodDetailSchema";
import { url } from "../../../App";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { useEffect } from "react";
import { fetchCommentByFoodId } from "./../../../redux/thunk/comment";
import CommentItem from "../../comment/commentItem/CommentItem";

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
  const user = useSelector((state: RootState) => state.user.user);
  const comments = useSelector((state: RootState) => state.comment.comments);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCommentByFoodId(food._id));
  }, [dispatch, comments, food._id]);

  console.log(comments, "comments");
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
                height="450"
                image={food.image}
                alt={food.title}
              />
            </CardActionArea>
          </Card>
        </div>
        <div className="food-title">
          <h1>Crispy Baked Chicken Thighs</h1>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ maxWidth: 800, lineHeight: 2 }}
          >
            {food.description}
          </Typography>
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
