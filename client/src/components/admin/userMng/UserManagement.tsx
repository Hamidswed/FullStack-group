import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { AppDispatch, RootState } from "../../../redux/store";
import fetchUsers from "../../../redux/thunk/usersList";
import { fetchUser } from "../../../redux/thunk/user";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, Typography } from "@mui/material";
import { usersActions } from "../../../redux/slice/usersList";
import { SlBan } from "react-icons/sl";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { url } from "../../../App";

function UserManagement() {
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
    async (e) => {
      e.preventDefault();
      const token = localStorage.getItem("token");
      //.get is to retrieve the current state of the user data from the server.
      try {
        const userResponse = await axios.get(`${url}/users/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        //then saves this data to user
        const user = userResponse.data;
        //spreading user.data into a new object and setting the isBanned to the opposite of its current value
        const updatedUser = { ...user, isBanned: !user.isBanned };

        if (updatedUser.isBanned && updatedUser.isAdmin) {
          updatedUser.isAdmin = false;
        }
        //updated user data is sent back to the server
        const response = await axios.put(
          `${url}/users/${userId}`,
          updatedUser,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        console.log(response);
        dispatch(usersActions.toggleBanStatus(userId));
        if (updatedUser.isAdmin) {
          dispatch(usersActions.toggleAdminStatus(userId));
        }
      } catch (error) {
        console.error(error);
      }
    };

  const handleToggleAdmin =
    (userId: string): React.MouseEventHandler<HTMLButtonElement> =>
    async (e) => {
      e.preventDefault();
      const token = localStorage.getItem("token");

      try {
        const userResponse = await axios.get(`${url}/users/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const user = userResponse.data;

        // Check if user is banned
        if (user.isBanned) {
          alert("Cannot change admin status of a banned user.");
          return;
        }

        const updatedUser = { ...user, isAdmin: !user.isAdmin };

        const response = await axios.put(
          `${url}/users/${userId}`,
          updatedUser,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        console.log(response);
        dispatch(usersActions.toggleAdminStatus(userId));
      } catch (error) {
        console.error(error);
      }
    };

  return (
    <Box style={{ width: "90%", marginInline: "auto" }}>
      <Typography variant="h5" style={{ paddingBottom: "50px" }}>
        User information
      </Typography>
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
                    {user.isBanned ? (
                      <SlBan style={{ color: "red" }} />
                    ) : (
                      <SlBan />
                    )}
                  </Button>
                </TableCell>

                <TableCell align="right">
                  <Button onClick={handleToggleAdmin(user._id)}>
                    {user.isAdmin ? (
                      <MdOutlineAdminPanelSettings
                        size={22}
                        style={{ color: "red" }}
                      />
                    ) : (
                      <MdOutlineAdminPanelSettings size={22} />
                    )}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default UserManagement;
