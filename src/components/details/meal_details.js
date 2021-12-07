import React, {useState, useEffect} from 'react'
import {Link, useParams, useHistory} from "react-router-dom";
import Header from "../partials/header";
import SearchCard from "../search/search_card"
import mealsService from '../../services/meals-service'
import ReviewCard from "./review_card"
import Footer from "../partials/footer";
import "./meal_details.css"
import showBriefInfo from "./showBriefInfo"
import listAllIngredients from "./listAllIngredients"
import showInstructions from "./showInstructions"
import displaySimilarDishes from "./displaySimilarDishes"
import reviews from "./reviews"
import userService from "../../services/users-service"
import Profile from "../cookie/profile"
import favoritesService from "../../services/favorites-service"
import UsersList from "./listAllUsers";

const MealDetails = () => {
  const history = useHistory()
  const [meal, setMeal] = useState({})
  const {idMeal, searchTitle} = useParams();
  const [results, setResults] = useState({meals: []})
  const [isFavorite, setIsFavorite] = useState(false)
  const [similarDishesCount, setSimilarDishesCount] = useState(0)
  const [currentUser, setCurrentUser] = useState([])
  const [postByUser, setPostByUser] = useState([])
  const [liked, setIsLiked] = useState(false)

//  useEffect(() => {
//    mealsService.findCreatedUserForRecipe()
//      .then(user => {
//          setPostByUser(user)
//      })
//  },[])

  // useEffect(() => {
  //   const data = localStorage.getItem('isLiked');
  //   if (data) {
  //     setIsFavorite(JSON.parse(data));
  //   }
  // }, [])
  //
  // useEffect(() => {
  //   localStorage.setItem('isLiked', JSON.stringify(isFavorite))
  // })

  useEffect(() => {
    userService.profile()
    .then(currUser => {
      setCurrentUser(currUser)
    })

  }, [])

  useEffect(() => {
    findMealById()
    findMealByIdFromLocal()
    // likedOrNot()
  }, [])

  useEffect(() => {
    mealsService.findMealByTitle(searchTitle)
    .then(results => setResults(results))
    // .then(results => console.log(results.meals))
  }, [searchTitle])


  const findMealById = () => {
    mealsService.findMealById(idMeal)
    .then((meal) => setMeal(meal.meals[0]))
  }

  const findMealByIdFromLocal = () => {
    mealsService.findMealByIdFromLocal(idMeal)
    .then((meal) => setMeal(meal[0]))
  }

  const likedOrNot = (username, mealId) => {
    favoritesService.findFavoriteForUserAndMealID(username, mealId)
    .then(res => {initial(res)})
  }

  const initial = (like) => {
    if (like) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }


  const setFavorite = (set) => {
    if (set) {
      setIsFavorite(true)
      favoritesService.addFavorite({username: currentUser.username, recipeId: idMeal})
      .then()
      // favoritesService.addFavoriteToUser(currentUser.username, idMeal).then()

    } else {
      // setIsFavorite(false)
      // favoritesService.deleteFavorite({username: currentUser.username, recipeId: idMeal})

    }
  }

  return (
      <>
        <Header/>
        {/*{currentUser.username}*/}
        {likedOrNot(currentUser.username, idMeal)}
        <div className="container mt-5">
          <button className="btn btn-primary" onClick={() => {
            history.goBack()
          }}>Back
          </button>
          <h1>{meal.strMeal}</h1>
          <div>
            Viewed by
            <Link
                to={`/profile/${currentUser.username}`}> {currentUser.username}</Link>
            <br/>
            Posted by
            <Link to={`/profile/${currentUser.username}`}> </Link>
          </div>
          currentUser: {currentUser.username}
          {/*{console.log(currentUser)}*/}

          <br/>

          {!currentUser.username &&
          <Link to={`/login`}>
            <i className="far fa-star"></i>
          </Link>
          }
          {currentUser.username && !isFavorite && <i
              onClick={() => setFavorite(true)} className="far fa-star"/>}
          {currentUser.username && isFavorite && <i
              onClick={() => setFavorite(false)} className="fas fa-star"/>}

          <br/>
          {/*Liked by*/}
          {/*<Link to={`/users/favorite/${idMeal}`}> Users</Link>*/}


          {/*{currentUser.username && !isFavorite && <i onClick={() => setIsFavorite(true)} className="far fa-star"></i>}*/}
          {/*{currentUser.username && isFavorite && <i onClick={() => setIsFavorite(false)} className="fas fa-star"></i>}*/}

          <img className="mealThumb" src={meal.strMealThumb} width={500}/>

          {showBriefInfo(meal)}

          <h2>Ingredients</h2>
          {listAllIngredients(meal)}

          <h2>Instructions</h2>
          {showInstructions(meal)}

          {/*<h2>Reviews</h2>*/}
          {/*{reviews(meal)}*/}

          {/*<h2>Similar Dishes</h2>*/}
          {/*{displaySimilarDishes(similarDishesCount, results, setSimilarDishesCount, searchTitle, meal)}*/}

          <br/>
          <UsersList mealId={idMeal}/>
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