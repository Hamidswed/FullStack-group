import React from "react";
import { useNavigate } from 'react-router-dom';

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

function createData(
  Name: string,
  Email: number,
  Address: number,
  Gender: number,
  Country: number
) {
  return { Name, Email, Address, Gender, Country };
}

const FoodInformation = () => {

  const navigate = useNavigate();

  return (
    <div>
      <h1>Food Recipes Information</h1>
      <TableContainer component={Paper} sx={{ maxWidth: 700, ml: 50 }}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Food Item</b>
              </TableCell>
              <TableCell>
                <b>Title</b>
              </TableCell>
              <TableCell>
                <b>Description</b>
              </TableCell>
              <TableCell>
                <b>Action</b>
              </TableCell>
              <TableCell>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img
                  src="https://minimalistbaker.com/wp-content/uploads/2023/01/Crispy-mediterranean-baked-chicken-thighs-with-olives-5-680x1020.jpg"
                  width={80}
                />
              </TableCell>
              <TableCell>{"Chicken Karahi"}</TableCell>
              <TableCell>
                {
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                }
              </TableCell>
              <TableCell><EditIcon onClick={()=> navigate(`/updateFood`)} /></TableCell>
              <TableCell><DeleteIcon /></TableCell>
            </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              <img
                  src="https://minimalistbaker.com/wp-content/uploads/2023/01/Mediterranean-cucumber-tomato-chickpea-salad-3-680x1020.jpg"
                  width={80}
                />
              </TableCell>
              <TableCell>{"Chickpea Salad"}</TableCell>
              <TableCell>{"t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution"}</TableCell>
              <TableCell><EditIcon onClick={()=> navigate(`/updateFood`)} /></TableCell>
              <TableCell><DeleteIcon /></TableCell>
            </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img
                  src="https://minimalistbaker.com/wp-content/uploads/2022/10/1-Pan-Beans-and-Greens-7.jpg"
                  width={80}
                />
              </TableCell>
              <TableCell>{"Super Nourishing Beans & Greens"}</TableCell>
              <TableCell>{"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."}</TableCell>
              <TableCell><EditIcon onClick={()=> navigate(`/updateFood`)} /></TableCell>
              <TableCell><DeleteIcon /></TableCell>
            </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
               <img
                  src="https://minimalistbaker.com/wp-content/uploads/2017/07/DELICIOUS-Roasted-Cauliflower-Tacos-with-Adobo-Romesco-30-min-healthy-SO-flavorful-vegan-glutenfree-plantbased-cauliflower-tacos-recipe-8-600x900.jpg"
                  width={80}
                />
              </TableCell>
              <TableCell>{"Roasted Cauliflower Tacos with Chipotle Romesco"}</TableCell>
              <TableCell>{"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum."}</TableCell>
              <TableCell><EditIcon onClick={()=> navigate(`/updateFood`)} /></TableCell>
              <TableCell><DeleteIcon /></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default FoodInformation;
