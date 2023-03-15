import React from "react";
import "./registrationForm.css";
import RegistrationSchema from "../registrationSchema/registrationSchema";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { Form, Field, Formik } from "formik";

// Type Declaration
type InitialValues = {
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  confirmPassword: string;
};

const RegistrationForm = () => {
  
  // Initial Values
  const initialValues: InitialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  // Function Call on Submit
  const getUserData = (values: InitialValues) => {
    console.log(values);
  };

  return (
    <>
      <div>
        <h1>Create a new account</h1>
        <span>It's free and always will be.</span>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={RegistrationSchema}
        onSubmit={getUserData}
      >
        {({ errors, touched, handleChange }) => {
          return (
            <Form>
              <div className="form-field">
                <TextField
                  label="First Name"
                  name="firstName"
                  onChange={handleChange}
                />
                {errors.firstName && touched.firstName ? (
                  <div className="error-message">{errors.firstName}</div>
                ) : null}
                <TextField
                  label="Last Name"
                  name="lastName"
                  onChange={handleChange}
                />
                {errors.lastName && touched.lastName ? (
                  <div className="error-message">{errors.lastName}</div>
                ) : null}
              </div>

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

              <div className="form-field">
                <TextField
                  className="textBox"
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  onChange={handleChange}
                />
                {errors.confirmPassword && touched.confirmPassword ? (
                  <div className="error-message">{errors.confirmPassword}</div>
                ) : null}
              </div>
              
              <div>
                <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
                  Register
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default RegistrationForm;
