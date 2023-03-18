import React from "react";
import updateFoodSchema from "./updateFoodSchema";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { Form, Formik } from "formik";
import "./updateFood.css";
import { FoodType } from "../../../types/foodType";
import { url } from "../../../App";
import axios from "axios";

// Type Declaration
type InitialValues = {
  title: string;
  image: string;
  description: string;
};

type PropType = {
  foodToUpdate: FoodType | undefined;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const UpdateFood = ({ foodToUpdate, setOpen }: PropType) => {
  // Initial Values
  const initialValues: InitialValues = {
    title: "",
    image: "",
    description: "",
  };

  // Function Call on Submit
  const token = localStorage.getItem("token");
  const submitHandler = (values: InitialValues) => {
    axios
      .put(`${url}/food/${foodToUpdate?._id}`, values, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (res.status === 200) setOpen(false);
      });
  };

  return (
    <div className="update-food-form-container">
      <h2>Update recipe</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={updateFoodSchema}
        onSubmit={submitHandler}
      >
        {({ errors, touched, handleChange }) => {
          return (
            <Form className="update-food-form">
              <div>
                <TextField
                  className="update-food-text"
                  label="Title"
                  name="title"
                  onChange={handleChange}
                  defaultValue={foodToUpdate?.title}
                />
                {errors.title && touched.title ? (
                  <div className="error-message">{errors.title}</div>
                ) : null}
              </div>
              <div>
                <TextField
                  className="update-food-text"
                  label="Image's Link"
                  name="image"
                  onChange={handleChange}
                  defaultValue={foodToUpdate?.image}
                />
                {errors.image && touched.image ? (
                  <div className="error-message">{errors.image}</div>
                ) : null}
              </div>
              <div>
                <TextField
                  className="update-food-text"
                  label="Description"
                  name="description"
                  multiline
                  rows={10}
                  onChange={handleChange}
                  defaultValue={foodToUpdate?.description}
                />
                {errors.description && touched.description ? (
                  <div className="error-message">{errors.description}</div>
                ) : null}
              </div>

              <div>
                <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
                  Update Recipe
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default UpdateFood;
