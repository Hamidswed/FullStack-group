import { Box } from "@mui/system";
import React from "react";
import GoogleLogIn from "../components/users/GoogleLogIn";
import LoginForm from "../components/users/loginForm/LoginForm";

function Login() {
  return (
    <div>
      <Box style={{ paddingBlock: "50px" }}>
        <LoginForm />
      </Box>
      <Box style={{ paddingBlock: "50px" }}>
        <GoogleLogIn />
      </Box>
    </div>
  );
}

export default Login;
