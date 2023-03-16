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

// Type Declaration
export type InitialTypes = {
  email: string;
  password?: string;
};

const LoginForm = () => {
  const isLogin = useSelector((state: RootState) => state.user.isLogin);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  // Initial Values
  const initialValues: InitialTypes = {
    email: "",
    password: "",
  };

  // Function Call on Submit
  const submitHandler = (values: InitialTypes) => {
    dispatch(userLogin(values));
    if (isLogin && token) navigate("/user");
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
        onSubmit={submitHandler}
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
