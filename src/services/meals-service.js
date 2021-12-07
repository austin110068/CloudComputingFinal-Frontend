export const findMealByTitle = (title) =>
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${title}`)
    .then(response => response.json())

const findMealById = (idMeal) =>
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    .then(response => response.json())

const findMealByIdFromLocal = (idMeal) =>

    // fetch(`http://localhost:4000/api/recipes/id/${idMeal}`)
  fetch(`https://mealfortoday.herokuapp.com/api/recipes/id/${idMeal}`)

    .then(response => response.json())

const findMealByCategory = (category) =>
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then(response => response.json())

const findAllCategories = () => {
  fetch(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`)
  .then(response => response.json())
}

const find10RandomRecipes = () => {
  return fetch(`https://www.themealdb.com/api/json/v2/9973533/randomselection.php/`)
    .then(response =>
      response.json()
    )
}

const findLastedRecipes = () => {
  return fetch(`https://www.themealdb.com/api/json/v2/9973533/latest.php/`)
  .then(response =>
    response.json()
  )
}

const findRecipesFromMongoDB = (title) => {
  // return fetch(`http://localhost:4000/api/recipes/${title}`)
  return fetch(`https://mealfortoday.herokuapp.com/api/recipes/${title}`)

  .then(response => response.json())

}


export default {
  findMealByTitle,
  findMealById,
  findMealByIdFromLocal,
  findMealByCategory,
  findAllCategories,
  find10RandomRecipes,
  findLastedRecipes,
  findRecipesFromMongoDB
}