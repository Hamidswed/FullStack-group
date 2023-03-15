import React from "react";
import FormSchema from "../loginSchema/formSchema";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { Form, Field, Formik } from "formik";

// Type Declaration
type InitialValues = {
  email: string;
  password?: string;
};

const LoginForm = () => {
  // Initial Values
  const initialValues: InitialValues = {
    email: "",
    password: "",
  };

  // Function Call on Submit
  const getUserData = (values: InitialValues) => {
    console.log(values);
  };

  return (
    <>
      <div>
        <h1>Login Your Account</h1>
        <span>We're missing your contribution.</span>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={FormSchema}
        onSubmit={getUserData}
      >
        {({ errors, touched, handleChange }) => {
          return (
            <Form>
              <div className="form-field">
                <TextField
                  className="textBox"
                  label="Email"
                  name="email"
                  onChange={handleChange}
                />
                {errors.email && touched.email ? (
                  <div className="error-message">{errors.email}</div>
                ) : null}
              </div>

              <div className="form-field">
                <TextField
                  className="textBox"
                  label="Password"
                  name="password"
                  type="password"
                  onChange={handleChange}
                />
                {errors.password && touched.password ? (
                  <div className="error-message">{errors.password}</div>
                ) : null}
              </div>

              <div>
                <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
                  Login
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default LoginForm;
