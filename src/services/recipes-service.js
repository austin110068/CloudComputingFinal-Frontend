
const RECIPES_URL = "https://mealfortoday.herokuapp.com/api/recipes"
// const RECIPES_URL = "http://localhost:4000/api/recipes"
// const RECIPES_URL = "http://localhost:4000/api/recipes"

// const RECIPES_URL = "https://mealfortoday.herokuapp.com/api/recipes"


export const createRecipe = (strMeal, recipe) => {
    console.log("service" + JSON.stringify(recipe))

    return fetch(`${RECIPES_URL}/${strMeal}`, {
        method: "POST",
        body: JSON.stringify(recipe),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

export const findAllRecipes = () =>
    fetch(RECIPES_URL)
        .then(response => response.json())

export const deleteRecipe = (name) =>
    fetch(`${RECIPES_URL}/${name}`, {
        method: "DELETE"
    })
        .then(response => response.json())


export default {
    createRecipe,
    findAllRecipes,
    deleteRecipe
}