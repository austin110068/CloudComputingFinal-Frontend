import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import favoritesService from "../../services/favorites-service"

const UsersList = (props) => {
  const [users, setUsers] = useState([]);
  const currUser = { "recipeId": props.mealId, "username": props.currUsername };

  useEffect(() => {
    favoritesService.findAllUsersForAMeal(props.mealId)
    .then((users) => {
      setUsers(users.Items)
    })
  }, [])

  useEffect(() => {
    const filtered = users.filter(e => e.username === currUser.username);
    if (props.isFavorite) {
      if (filtered.length === 0) {
        setUsers([...users, currUser]);
      }
    } else {
      if (filtered.length !== 0) {
        setUsers(users.filter(e => e.username !== currUser.username));
      }
    }
  }, [props.isFavorite])

  return(
      <div>
        <div className="list-group">
          {
            users && users.map((user) => {
              return(
                  <>
                      <Link
                          to={`/profile/${user.username}`}
                          className="list-group-item">
                        {user.username}
                      </Link>
                  </>
              )
            })
          }
        </div>
      </div>
  )
}

export default UsersList;