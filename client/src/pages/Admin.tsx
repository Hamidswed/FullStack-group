import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import fetchUsers from "../redux/thunk/usersList";
import { fetchUser } from "../redux/thunk/user";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button } from "@mui/material";
import { usersActions } from "../redux/slice/usersList";

function Admin() {
  const [click, setClick] = useState(false);
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

  const users = useSelector((state: RootState) => state.userList.usersData);
  console.log(users, "users");
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleToggleBan =
    (userId: string): React.MouseEventHandler<HTMLButtonElement> =>
    (e) => {
      e.preventDefault();
      dispatch(usersActions.toggleBanStatus(userId));
    };

  return (
    <Box style={{ width: "90%", marginInline: "auto" }}>
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
            {users.map((user) => (
              <TableRow
                key={user._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.firstName}
                </TableCell>
                <TableCell align="right">{user.lastName}</TableCell>
                <TableCell align="right">{user.email}</TableCell>
                <TableCell align="right">
                  {user.isAdmin ? "Admin" : "User"}
                </TableCell>
                <TableCell align="right">
                  <Button onClick={handleToggleBan(user._id)}>
                    {user.isBanned ? "not banned" : "Ban user"}
                  </Button>
                </TableCell>

                <TableCell align="right">user{user.isBanned}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Admin;
