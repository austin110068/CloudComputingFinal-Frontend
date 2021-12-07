import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import favoritesService from "../../services/favorites-service"

const UsersList = ({mealId}) => {

  const [users, setUsers] = useState([])
  // useEffect(() => {
  //   userService.findAllUsers()
  //   .then((users) => {
  //     setUsers(users)
  //   })
  // }, [])

  useEffect(() => {
    favoritesService.findAllUsersForAMeal(mealId)
    .then((users) => {
      setUsers(users)
    })
  }, [])



  return(
      <div >
        <div className="list-group ">
          <h2>Checkout who also liked this recipe!</h2>
          {/*from {mealId}{JSON.stringify(users)}*/}
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
          {
            !users[0] && <h4>Do you want to be the first one?</h4>
          }
        </div>
      </div>
  )
}

export default UsersList;