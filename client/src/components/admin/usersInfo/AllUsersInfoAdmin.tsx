import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import UserInfoAdmin from "./UserInfoAdmin";

function AllUsersInfoAdmin() {
  return (
    <div>
      <Typography>AllUsersInfoAdmin</Typography>
      <Box style={{ width: "90%", marginInline: "auto" }}>
        <UserInfoAdmin />
      </Box>
    </div>
  );
}

export default AllUsersInfoAdmin;
