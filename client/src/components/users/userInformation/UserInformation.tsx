import React, { useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from '@mui/icons-material/Check';
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import "./userInfo.css";
import { IconButton } from "@mui/material";

// function createData(
//   Name: string,
//   Email: number,
//   Address: number,
//   Gender: number,
//   Country: number
// ) {
//   return { Name, Email, Address, Gender, Country };
// }

// const rows = [
//   createData("Name", 262, 16.0, 24, 6.0),
//   createData("Email", 262, 16.0, 24, 6.0),
//   createData("Address", 262, 16.0, 24, 6.0),
//   createData("Gender", 305, 3.7, 67, 4.3),
//   createData("Country", 356, 16.0, 49, 3.9),
// ];

const UserInformation = () => {
  const [isFnameEdit, setIsFnameEdit] = useState(false);
  const [isLnameEdit, setIsLnameEdit] = useState(false);
  const user = useSelector((state: RootState) => state.user.user);
  return (
    <div className="user-info-container">
      <div>
        <img src={user.image} alt={user.firstName} />
      </div>
      <TableContainer component={Paper} sx={{ maxWidth: 600 }}>
        <Table sx={{ minWidth: 500 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>
                <b>My Account Detail</b>
              </TableCell>
              <TableCell>
                <b>Information</b>
              </TableCell>
              <TableCell>
                <b>Edit</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {"First Name"}
              </TableCell>
              <TableCell>{isFnameEdit ? <input type="text" defaultValue={user.firstName}/> : user.firstName}</TableCell>
              <TableCell>
                {isFnameEdit ? <IconButton onClick={() => setIsFnameEdit(false)}>
                  <CheckIcon fontSize="small" />
                </IconButton>:<IconButton onClick={() => setIsFnameEdit(true)}>
                  <EditIcon fontSize="small" />
                </IconButton>}
              </TableCell>
            </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {"Last Name"}
              </TableCell>
              <TableCell>{isLnameEdit ? <input type="text" defaultValue={user.lastName}/> : user.lastName}</TableCell>
              <TableCell>
              {isLnameEdit ? <IconButton onClick={() => setIsLnameEdit(false)}>
                  <CheckIcon fontSize="small" />
                </IconButton>:<IconButton onClick={() => setIsLnameEdit(true)}>
                  <EditIcon fontSize="small" />
                </IconButton>}
              </TableCell>
            </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {"Email"}
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell />
            </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {"Country"}
              </TableCell>
              <TableCell>{"Sweden"}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UserInformation;
