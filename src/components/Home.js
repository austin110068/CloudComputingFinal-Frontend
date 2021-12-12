import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import Header from "./partials/header";
import './home.css'
import mealsService from "../services/meals-service";
import userService from '../services/users-service';

const Home = () => {
  const [recipes, setRecipes] = useState({meals:[]});
  const [index, setIndex] = useState(0);
  const [currentUser, setCurrentUser] = useState([]);
  
  console.log("home: ", currentUser);

  useEffect(() => {
    userService.profile()
      .then(currUser => {
        setCurrentUser(currUser.Items[0]);
      })
  }, [])

  useEffect(() => {
    if (currentUser) {
      mealsService.findLatestRecipes()
        .then((recipes) => {
          setRecipes(recipes);
        })
    } else {
      mealsService.find10RandomRecipes()
        .then((recipes) => {
          setRecipes(recipes);
        });
      }
  }, [currentUser]);


  useEffect(() => {
    const lastIndex = 9
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index])

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000)
    return () => clearInterval(slider)
  }, [index])

  return (
      <>
        <Header/>
        <div className="container-fluid mt-5">
          <section className="section">
            <div className="title">
              {
                Object.keys(currentUser).length !== 0 && <h2>
                  <span>/</span> Welcome {currentUser.username}! Here are our latest recipes!
                </h2>
              }
              {
                Object.keys(currentUser).length === 0 && <h2>
                  <span>/</span> Welcome! Want to try something new?
                </h2>
              }

            </div>
            <div className="section-center">
              {
                recipes.meals.slice(0, 10).map((meal, mealIndex) => {
                  const {strMeal, strMealThumb, strInstructions, strArea} = meal;
                  let position = 'nextSlide'
                  if (mealIndex === index) {
                    position = 'activeSlide'
                  }
                  if(mealIndex === index - 1 || (index === 0 &&
                  mealIndex === 10)) {
                    position = 'lastSlide'
                  }

                  return <article className={position}>
                    <Link to={`/${strMeal}/details/${meal.idMeal}`}>
                      <img src={strMealThumb} alt={strMeal} className='recipe-img'/>
                      <h4>{strMeal}</h4>
                    </Link>
                    <p className="title mt-3">{strArea}</p>
                    <p className="text">{strInstructions}</p>

                  </article>
                })
              }
              <button className="prev" onClick={() => setIndex(index - 1)}>
                <i className="fas fa-chevron-circle-left"></i>
              </button>
              <button className="next" onClick={() => setIndex(index + 1)}>
                <i className="fas fa-chevron-circle-right"></i>
              </button>
            </div>
          </section>
        </div>
      </>
  )
}

export default Home