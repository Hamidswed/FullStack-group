import React from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SnackbarContent from "@mui/material/SnackbarContent";
import { FoodType } from "../../../types/foodType";

const action1 = (
  <Button color="secondary" size="small">
    Hamid
  </Button>
);

const action2 = (
  <Button color="secondary" size="small">
    Alina
  </Button>
);

type PropType = {
  food: FoodType;
};
const FoodDetail = ({ food }: PropType) => {
  return (
    <div>
      <h1>Crispy Baked Chicken Thighs</h1>
      <Card sx={{ maxWidth: 800, ml: 50 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="600"
            image={food.image}
            alt={food.title}
          />
        </CardActionArea>
      </Card>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ maxWidth: 800, ml: 50 }}
      >
        {
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.All the description about the recipe is mention here"
        }
      </Typography>

      <Stack spacing={2} sx={{ maxWidth: 600, ml: 60 }}>
        <SnackbarContent
          message={
            "User Comment dispaly here. We can display multi lines comments. \
          When different users do comments on recipes."
          }
          action={action1}
        />
        <SnackbarContent
          message={
            "I love Crispy Baked Chicken. I love Crispy Baked Chicken \
         Crispy Baked Chicken is my favourite food."
          }
          action={action2}
        />
      </Stack>
    </div>
  );
};

export default FoodDetail;
