
// const RECIPES_URL = "https://mealfortoday.herokuapp.com/api/recipes"
const RECIPES_URL = "http://localhost:4000/api/recipes"

const createRecipe = async (strMeal, recipe) => {
    const response = await fetch(`${RECIPES_URL}/${strMeal}`, {
        method: "POST",
        body: JSON.stringify(recipe),
        headers: {
            'content-type': 'application/json'
        }
    })
    .catch((error) => {
        console.log("createRecipe: ", error);
    })

    return response.json();
}

const findAllRecipes = async () => {
    const response = await fetch(RECIPES_URL)
    .catch((error) => {
        console.log("findAllRecipes: ", error);
    })

    return response.json();
};
    

const deleteRecipe = async (name) => {
    const response = await fetch(`${RECIPES_URL}/${name}`, {
        method: "DELETE"
    })
    .catch((error) => {
        console.log("deleteRecipe: ", error);
    })

    return response.json();
};
    
const exportDefaultObjects = {
    createRecipe,
    findAllRecipes,
    deleteRecipe
}
export default exportDefaultObjects;