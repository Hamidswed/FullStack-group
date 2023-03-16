import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { Box } from "@mui/system";
import axios from "axios";

function GoogleLogIn() {
  return (
    <Box>
      <Box style={{ width: "400px", marginInline: "auto" }}>
        <GoogleLogin
          onSuccess={async (credentialResponse) => {
            console.log(credentialResponse, "credentialResponse");
            const url = "http://localhost:8000/users/googleLogIn";
            //send credential
            const credential = credentialResponse.credential;
            let res = await axios.post(url, { id_token: credential });
            if (res.status === 200) {
              console.log(res, "response from backend");
            } else {
              alert("Log in failed");
            }
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </Box>
    </Box>
  );
}

export default GoogleLogIn;
