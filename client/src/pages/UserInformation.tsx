import { Box } from "@mui/material";
import React from "react";
import AllUsersInfoAdmin from "../components/admin/usersInfo/AllUsersInfoAdmin";
import UserBio from "../components/users/userInformation/UserInformation";

const UserInformation = () => {
  return (
    <Box>
      <Box>
        <UserBio />
      </Box>
      <Box style={{ marginBlock: "50px" }}>
        <AllUsersInfoAdmin />
      </Box>
    </Box>
  );
};

export default UserInformation;
