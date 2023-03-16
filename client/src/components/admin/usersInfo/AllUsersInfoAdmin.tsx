import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import fetchUser from "../../../redux/thunk/user";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function AllUsersInfoAdmin() {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.user.user);
  const userId = user._id;

  useEffect(() => {
    if (userId) {
      dispatch(fetchUser(userId));
    }
    console.log(userId, "userId");
  }, [dispatch, userId]);
  console.log(typeof user, "user");
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>FIRST NAME</TableCell>
              <TableCell align="right">LAST NAME</TableCell>
              <TableCell align="right">EMAIL</TableCell>
              <TableCell align="right">ROLE</TableCell>
              {/* ROLE - USER OD ADMIN */}
              <TableCell align="right">STATUS</TableCell>
              {/* STATUS - BANNED OR NOT*/}
              <TableCell align="right">SPECIAL</TableCell>
              {/* SPECIAL - CREATE ADMIN */}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row"></TableCell>
              <TableCell align="right">
                {user.firstName.charAt(0).toUpperCase()}
              </TableCell>
              <TableCell align="right">{user.lastName}</TableCell>
              <TableCell align="right">{user.email}</TableCell>
              <TableCell align="right">{user.isAdmin}</TableCell>
              <TableCell align="right">{user.isBanned}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default AllUsersInfoAdmin;
