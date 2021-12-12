const findMealByTitle = async (title) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${title}`);
  
  return response.json();
}

const findMealById = async (idMeal) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
  return response.json();
}

const findMealByIdFromLocal = async (idMeal) => {
  const response = await fetch(`http://localhost:4000/api/recipes/id/${idMeal}`);
  
  return response.json();
}

const findMealByCategory = async (category) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);

  return response.json();
}

const findAllCategories = async () => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`);
  
  return response.json();
}

const find10RandomRecipes = async () => {
  const response = await fetch(`https://www.themealdb.com/api/json/v2/9973533/randomselection.php/`);
  
  return response.json();
}

const findLastedRecipes = async () => {
  const response = await fetch(`https://www.themealdb.com/api/json/v2/9973533/latest.php/`)
  
  return response.json();
}

const findRecipesFromMongoDB = async (title) => {
  const response = await fetch(`http://localhost:4000/api/recipes/${title}`);

  return response.json();
}

const exportDefaultObjects = {
  findMealByTitle,
  findMealById,
  findMealByIdFromLocal,
  findMealByCategory,
  findAllCategories,
  find10RandomRecipes,
  findLastedRecipes,
  findRecipesFromMongoDB
}

export default exportDefaultObjects;