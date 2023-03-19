import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { fetchComments } from "../../../redux/thunk/comment";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, Typography } from "@mui/material";

const CmtManagement = () => {
  const dispatch = useDispatch<AppDispatch>();
  const comments = useSelector((state: RootState) => state.comment.comments);

  console.log(comments, "comments");
  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  return (
    <Box style={{ width: "90%", marginInline: "auto" }}>
      <Typography variant="h5" style={{ paddingBottom: "50px" }}></Typography>
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
            {comments.map((comment) => (
              <TableRow
                key={comment._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {comment.message}
                </TableCell>
                <TableCell align="right">{comment.title}</TableCell>
                <TableCell align="right">{comment.rate}</TableCell>

                <TableCell align="right"></TableCell>

                <TableCell align="right"></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
export default CmtManagement;
