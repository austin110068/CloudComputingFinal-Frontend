import React, {useState, useEffect} from 'react'
import {Link, useParams, useHistory} from "react-router-dom";
import Header from "../partials/header";
// import SearchCard from "../search/search_card"
import mealsService from '../../services/meals-service'
// import ReviewCard from "./review_card"
// import Footer from "../partials/footer";
import "./meal_details.css"
import showBriefInfo from "./showBriefInfo"
import listAllIngredients from "./listAllIngredients"
import showInstructions from "./showInstructions"
// import displaySimilarDishes from "./displaySimilarDishes"
// import reviews from "./reviews"
import userService from "../../services/users-service"
// import Profile from "../cookie/profile"
import favoritesService from "../../services/favorites-service"
import UsersList from "./listAllUsers";

const MealDetails = () => {
  const history = useHistory()
  const [meal, setMeal] = useState({})
  const {idMeal, searchTitle} = useParams();
  const [results, setResults] = useState({meals: []})
  const [isFavorite, setIsFavorite] = useState(false)
  const [currentUser, setCurrentUser] = useState([])

//  useEffect(() => {
//    mealsService.findCreatedUserForRecipe()
//      .then(user => {
//          setPostByUser(user)
//      })
//  },[])

  useEffect(() => {
    userService.profile()
    .then(currUser => {
      setCurrentUser(currUser.Items[0])
    })

    findMealById();
  }, [])

  useEffect(() => {
    checkIsFavorite(currentUser.username, idMeal);
  }, [currentUser])

  useEffect(() => {
    mealsService.findMealByTitle(searchTitle)
    .then(results => setResults(results))
  }, [searchTitle])

  const findMealById = () => {
    mealsService.findMealById(idMeal)
    .then((meal) => setMeal(meal.meals[0]))
  }

  const checkIsFavorite = (username, mealId) => {
    favoritesService.findFavoriteForUserAndMealID(username, mealId)
    .then(res => {
      if (Object.keys(res.Items).length === 1) {
        setIsFavorite(true);
      } else {
        setIsFavorite(false);
      }
    })
  }

  const isFavoriteHandler = (set) => {
    if (set) {
      setIsFavorite(true)
      favoritesService.addFavorite({username: currentUser.username, recipeId: idMeal});
      // favoritesService.addFavoriteToUser(currentUser.username, idMeal).then()

    } else {
      setIsFavorite(false)
      favoritesService.deleteFavorite({username: currentUser.username, recipeId: idMeal});
    }
  }

  return (
      <>
        <Header/>
        <div className="container mt-5">
          <button className="btn btn-primary" onClick={() => {
            history.goBack()
          }}>Back
          </button>
          <h1>{meal.strMeal}</h1>
          <div>
            Liked by
            <UsersList mealId={idMeal} isFavorite={isFavorite} currUsername={currentUser.username}/> 
            <br/>

          </div>
          currentUser: {currentUser.username}

          <br/>

          {!currentUser.username &&
          <Link to={`/login`}>
            <i className="far fa-star"></i>
          </Link>
          }
          {currentUser.username && !isFavorite && <i
              onClick={() => isFavoriteHandler(true)} className="far fa-star"/>}
          {currentUser.username && isFavorite && <i
              onClick={() => isFavoriteHandler(false)} className="fas fa-star"/>}

          <br/>
          {/*Liked by*/}
          {/*<Link to={`/users/favorite/${idMeal}`}> Users</Link>*/}

          <img className="mealThumb" src={meal.strMealThumb} width={500} alt=""/>

          {showBriefInfo(meal)}

          <h2>Ingredients</h2>
          {listAllIngredients(meal)}

          <h2>Instructions</h2>
          {showInstructions(meal)}
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>
      </>
  )
}

export default MealDetails