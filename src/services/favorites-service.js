// Local Development
const FAVORITE_URL = "http://localhost:4000/api/favorites"

// Production Development
// const FAVORITE_URL = "https://mealfortoday.herokuapp.com/api/favorites"

const addFavorite = async (info) => {
    const response = await fetch(FAVORITE_URL, {
        method: 'POST',
        body: JSON.stringify(info),
        headers: {
            'content-type': 'application/json'
        }
    });

    return response.json();
  }

// const addFavoriteToUser = (username, mealId) =>
//     fetch(`${FAVORITE_URL}/${username}`, {
//         method: 'POST',
//         body: JSON.stringify(mealId),
//         headers: {
//             'content-type': 'application/json'
//         }
//     }).then(response => response.json())

const findAllUsersForAMeal = async (mealId) => {
  const response = await fetch(`${FAVORITE_URL}/id/${mealId}`);
  
  return response.json();
}

const findAllFavoritesForAUser = async (username) => {
  const response = await fetch(`${FAVORITE_URL}/${username}`);
  
  return response.json();
}

const findAllFavorites = async () => {
  const response = await fetch(FAVORITE_URL);

  return response.json();
}

const findFavoriteForUserAndMealID = async (username, mealId) => {
  const response = await fetch(`${FAVORITE_URL}/${mealId}/${username}`);
  
  return response.json();
}

// export const deleteCourse = (courseId) =>
//     fetch(`${COURSES_URL}/${courseId}`, {
//       method: 'DELETE'
//     })
//     .then(response => response.json())

const deleteFavorite = async (username, mealId) => {
  const info = { "username": username, "mealId": mealId };
  const response = await fetch(`${FAVORITE_URL}/${mealId}/${username}`, {
    method:'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(info),
  })
  
  return response.json();
}

// const addFavoriteToUser = (username, mealId) =>
//     fetch(`${FAVORITE_URL}/${username}`, {
//         method: 'POST',
//         body: JSON.stringify(mealId),
//         headers: {
//             'content-type': 'application/json'
//         }
//     }).then(response => response.json())

const exportDefaultObjects = {
  addFavorite,
  // addFavoriteToUser,
  findAllUsersForAMeal,
  findAllFavoritesForAUser,
  findAllFavorites,
  findFavoriteForUserAndMealID,
  deleteFavorite
}

export default exportDefaultObjects;