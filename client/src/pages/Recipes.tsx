import React from 'react';

import "../components/recipes/allRecipes.css";
import AllRecipes from '../components/recipes/AllRecipes';

export type RecipeData = {
    recipe: number
}

const Recipes = () => {

    const recipesData: RecipeData[] = [
        {recipe:1},{recipe:1},{recipe:1},{recipe:1},{recipe:1}
    ];

  return (
    <div className="recipes-list">
        {recipesData.map(recipe => {
            return <AllRecipes key={crypto.randomUUID()} prop={recipe} />
        })}
    </div>
  )
}

export default Recipes;