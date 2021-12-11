// const USER_URL = "https://mealfortoday.herokuapp.com/api/users"
const USER_URL = "http://localhost:4000/api/users"

const register = async (user) => {
  const response = await fetch(`${USER_URL}/register`, {
    method: 'POST',
    body: JSON.stringify(user),
    credentials: "include",
    headers: {
      'content-type': 'application/json'
    }
  })
  
  return response.json();
};
  
const profile = async () => {
  const response = await fetch(`${USER_URL}/profile`, {
    method: 'POST',
    credentials: "include",
  })
  
  return response.json();
};
  
const logout = () => {
  fetch(`${USER_URL}/logout`, {
    method: 'GET',
    credentials: "include"
  })
};

const login = async (user) => {
  const response = await fetch(`${USER_URL}/login`, {
    method: 'POST',
    body: JSON.stringify(user),
    credentials: "include",
    headers: {
      'content-type': 'application/json'
    }
  })

  return response.json();
};
  
const updateProfile = async (profile) => {
  const response = await fetch(`${USER_URL}/editprofile`, {
    method: 'POST',
    body: JSON.stringify(profile),
    credentials: "include",
    headers: {
      'content-type': 'application/json'
    }
  })

  return response.json();
};
  
const findAllUsers = async () => {
  const response = await fetch(USER_URL)
  
  return response.json()
}

const findUserByName = async (username) => {
  const response = await fetch(`${USER_URL}/${username}`);
  
  return response.json();
};

const exportDefaultObjects = {
  register,
  profile,
  logout,
  login,
  updateProfile,
  findAllUsers,
  findUserByName
}

export default exportDefaultObjects;
