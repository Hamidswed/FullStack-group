import React from "react";
import FormSchema from "../loginSchema/formSchema";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { userLogin } from "../../../redux/thunk/userLogin";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import './loginForm.css'


// Type Declaration
export type InitialTypes = {
  email: string;
  password?: string;
};

const LoginForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  // Initial Values
  const initialValues: InitialTypes = {
    email: "",
    password: "",
  };

 
  // Function Call on Submit
  const submitHandler = async (values: InitialTypes) => {
    await dispatch(userLogin(values));
    token && navigate("/user");
  };

  return (
    <>
      <div>
        <h2>Login Your Account</h2>
        <span>We're missing your contribution.</span>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={FormSchema}
        onSubmit={submitHandler}
      >
        {({ errors, touched, handleChange }) => {
          return (
            <Form className="form-container">
              <div className="form-field">
                <TextField
                  className="textBox"
                  label="Email"
                  name="email"
                  onChange={handleChange}
                />
                {errors.email && touched.email ? (
                  <p className="error-message">{errors.email}</p>
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
                  <p className="error-message">{errors.password}</p>
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
