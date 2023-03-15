import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  Name: string,
  Email: number,
  Address: number,
  Gender: number,
  Country: number
) {
  return { Name, Email, Address, Gender, Country };
}

// const rows = [
//   createData("Name", 262, 16.0, 24, 6.0),
//   createData("Email", 262, 16.0, 24, 6.0),
//   createData("Address", 262, 16.0, 24, 6.0),
//   createData("Gender", 305, 3.7, 67, 4.3),
//   createData("Country", 356, 16.0, 49, 3.9),
// ];

const UserInformation = () => {
  return (
    <div>
    <h1>My Account's Information</h1>
    <TableContainer component={Paper} sx={{maxWidth: 700, ml: 60}} >
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell><b>My Account Detail</b></TableCell>
            <TableCell><b>Information</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">{"Full Name"}</TableCell>
              <TableCell>{"Hamid Delshad"}</TableCell>
            </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">{"Gender"}</TableCell>
              <TableCell>{"Male"}</TableCell>
            </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">{"Email"}</TableCell>
              <TableCell>{"hamid@gmail.com"}</TableCell>
            </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">{"Country"}</TableCell>
              <TableCell>{"Sweden"}</TableCell>
            </TableRow>
         
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default UserInformation;
