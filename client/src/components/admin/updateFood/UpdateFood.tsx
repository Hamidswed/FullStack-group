import React from "react";
import updateFoodSchema from "./updateFoodSchema";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { Form, Formik } from "formik";

// Type Declaration
type InitialValues = {
  title: string;
  image: string;
  description: string;
};

const UpdateFood = () => {
  // Initial Values
  const initialValues: InitialValues = {
    title: "",
    image: "",
    description: "",
  };

  // Function Call on Submit
  const getUpdatedFoodData = (values: InitialValues) => {
    console.log(values);
  };

  return (
    <>
      <div>
        <h1>Update previous recipe detail</h1>
        <span>It's free and always will be.</span>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={updateFoodSchema}
        onSubmit={getUpdatedFoodData}
      >
        {({ errors, touched, handleChange }) => {
          return (
            <Form>
              <div className="form-field">
                <TextField label="Title" name="title" onChange={handleChange} />
                {errors.title && touched.title ? (
                  <div className="error-message">{errors.title}</div>
                ) : null}
                <TextField
                  label="Image's Link"
                  name="image"
                  onChange={handleChange}
                />
                {errors.image && touched.image ? (
                  <div className="error-message">{errors.image}</div>
                ) : null}
              </div>

              <div className="form-field">
                <TextField
                  className="textBox"
                  label="Description"
                  name="description"
                  multiline
                  rows={10}
                  onChange={handleChange}
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
    </>
  );
};

export default UpdateFood;
