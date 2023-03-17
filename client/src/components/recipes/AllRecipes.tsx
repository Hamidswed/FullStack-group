import React from 'react';
import { useNavigate } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Avatar from '@mui/material/Avatar';

import { RecipeData } from '../../pages/Recipes';

type Prop = {
    prop: RecipeData
}

const AllRecipes = ({prop}:Prop) => {

    const navigate = useNavigate();

  return (
    
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="300"
        image={"https://minimalistbaker.com/wp-content/uploads/2023/01/Crispy-mediterranean-baked-chicken-thighs-with-olives-5-680x1020.jpg"}
        alt={"Recipe Image"}
        onClick={()=> navigate(`/recipeDetail`)}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
         {"Chicken Karahi"}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
        Ingredients: {"Ingredients List Here"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {"All the description about the recipe is mention here"}
        </Typography>
        <Avatar 
        alt={"name"}
        src={"image path"}
        sx={{ width: 36, height: 36 }}
        />
      </CardContent>
    </CardActionArea>
  </Card>
  )
}

export default AllRecipes;