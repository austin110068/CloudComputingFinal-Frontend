import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import favoritesService from "../../services/favorites-service"

const UsersList = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    favoritesService.findAllUsersForAMeal(props.mealId)
    .then((users) => {
      setUsers(users.Items)
    })
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