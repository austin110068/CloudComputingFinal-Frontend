
const USER_URL = "https://mealfortoday.herokuapp.com/api/users"
const FAVORITE_URL = "https://mealfortoday.herokuapp.com/api/favorites"
// const USER_URL = "http://localhost:4000/api/users"
// const FAVORITE_URL = "http://localhost:4000/api/favorites"

const register = (user) =>
    // console.log(user)
    fetch(`${USER_URL}/register`, {
      method: 'POST',
      body: JSON.stringify(user),
      credentials: "include",
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())

const profile = () =>
    fetch(`${USER_URL}/profile`, {
      method: 'POST',
      credentials: "include"
    }).then(response => response.json())

const logout = () =>
    fetch(`${USER_URL}/logout`, {
      method: 'GET',
      credentials: "include"
    })

const login = (user) =>
    fetch(`${USER_URL}/login`, {
      method: 'POST',
      body: JSON.stringify(user),
      credentials: "include",
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())

const updateProfile = (profile) =>
    fetch(`${USER_URL}/editprofile`, {
      method: 'POST',
      body: JSON.stringify(profile),
      credentials: "include",
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())

const findAllUsers = () => {
  return fetch(USER_URL)
  .then(response => response.json())
}

const findUserByName = (username) => 
    fetch(`${USER_URL}/${username}`)
    .then(response => response.json())


  export default {
    register,
    profile,
    logout,
    login,
    updateProfile,
    findAllUsers,
    findUserByName
  }
