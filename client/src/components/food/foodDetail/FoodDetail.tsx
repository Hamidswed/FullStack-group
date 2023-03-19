import "./foodDetail.css";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Form, Formik } from "formik";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SnackbarContent from "@mui/material/SnackbarContent";
import { FoodType } from "../../../types/foodType";
import { TextField } from "@mui/material";
import foodDetailSchema from "./foodDetailSchema";
import { url } from "../../../App";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const action1 = (
  <Button color="secondary" size="small">
    Hamid
  </Button>
);

const action2 = (
  <Button color="secondary" size="small">
    Alina
  </Button>
);

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

// type for values
// type Comments = {
//   userId: string,
//   foodId: string,
//   description: string,
// }

const FoodDetail = ({ food }: PropType) => {
  const user = useSelector((state: RootState) => state.user.user);

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
            {
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.All the description about the recipe is mention here"
            }
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

        <div className="food-comments">
          <Stack spacing={2} sx={{ maxWidth: 600, ml: 30 }}>
            <SnackbarContent
              message={
                "User Comment dispaly here. We can display multi lines comments. \
          When different users do comments on recipes."
              }
              action={action1}
            />
            <SnackbarContent
              message={
                "I love Crispy Baked Chicken. I love Crispy Baked Chicken \
         Crispy Baked Chicken is my favourite food."
              }
              action={action2}
            />
          </Stack>
        </div>
      </div>
    </>
  );
};

export default FoodDetail;

/* <div className="food-detail">
      <div>
      <h1>Crispy Baked Chicken Thighs</h1>
      <Card sx={{ maxWidth: 800, ml: 50 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="600"
            image={food.image}
            alt={food.title}
          />
        </CardActionArea>
      </Card>
      </div>
    
      <div>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ maxWidth: 800, ml: 50, textAlign: "left" }}
      >
        {food.description}
      </Typography>

      <Stack spacing={2} sx={{ maxWidth: 600, ml: 60 }}>
        <SnackbarContent
          message={
            "User Comment dispaly here. We can display multi lines comments. \
          When different users do comments on recipes."
          }
          action={action1}
        />
        <SnackbarContent
          message={
            "I love Crispy Baked Chicken. I love Crispy Baked Chicken \
         Crispy Baked Chicken is my favourite food."
          }
          action={action2}
        />
      </Stack>
      </div>
      </div> */
