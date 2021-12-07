import React, {useState} from 'react'
import recipeService from '../../services/recipes-service'

const RecipeRow = (recipe) => {
    console.log(JSON.stringify(recipe))
    console.log(recipe)

    return (
        <tr>
            <td>
                {recipe.recipe.strMeal}
            </td>
            <td className="d-none d-md-table-cell">{recipe.recipe.username}</td>
            <td>
                <i onClick={() => {
                    recipeService.deleteRecipe(recipe.recipe.strMeal)
                }}
                    className="btn fas fa-times float-right"/>
            </td>
        </tr>

    )
}

export default RecipeRow