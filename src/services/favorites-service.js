// const FAVORITE_URL = "http://localhost:4000/api/favorites"
// const USERS_URL = "http://localhost:4000/api/users"


const FAVORITE_URL = "https://mealfortoday.herokuapp.com/api/favorites"
const USERS_URL = "https://mealfortoday.herokuapp.com/api/users"


const addFavorite = (info) =>
    fetch(FAVORITE_URL, {
        method: 'POST',
        body: JSON.stringify(info),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

// const addFavoriteToUser = (username, mealId) =>
//     fetch(`${FAVORITE_URL}/${username}`, {
//         method: 'POST',
//         body: JSON.stringify(mealId),
//         headers: {
//             'content-type': 'application/json'
//         }
//     }).then(response => response.json())


const findAllUsersForAMeal = (mealId) => {
    return fetch(`${FAVORITE_URL}/id/${mealId}`)
        .then(response => response.json())
}

const findAllFavoritesForAUser = (username) => {
    return fetch(`${FAVORITE_URL}/${username}`)
        .then(response => response.json())
        // .then(res=>console.log(res))

}

const findAllFavorites = () => {
    fetch(FAVORITE_URL)
        .then(response => response.json())
}

const findFavoriteForUserAndMealID = (username, mealId) => {
   return fetch(`${FAVORITE_URL}/${mealId}/${username}`)
        .then(response => response.json())

}
//
// export const deleteCourse = (courseId) =>
//     fetch(`${COURSES_URL}/${courseId}`, {
//       method: 'DELETE'
//     })
//     .then(response => response.json())

const deleteFavorite = (username, mealId) => {
  fetch(`${FAVORITE_URL}/${mealId}/${username}`, {
    method:'DELETE'
  })
  .then(response => response.json())
}


// const addFavoriteToUser = (username, mealId) =>
//     fetch(`${FAVORITE_URL}/${username}`, {
//         method: 'POST',
//         body: JSON.stringify(mealId),
//         headers: {
//             'content-type': 'application/json'
//         }
//     }).then(response => response.json())

export default {
    addFavorite,
    // addFavoriteToUser,
  findAllUsersForAMeal,
    findAllFavoritesForAUser,
    findAllFavorites,
    findFavoriteForUserAndMealID,
  deleteFavorite
}