import React, {useState, useEffect} from 'react'
import mealsService from '../../services/meals-service'
import {Link, useParams, useHistory} from "react-router-dom";
import Header from "../partials/header";
import SearchCard from "./search_card";
import SearchCardLocal from "./search-card-forLocal"
import Footer from "../partials/footer";
import "./search.css"

const SearchMeals = () => {
  const {title} = useParams()
  const [searchTitle, setSearchTitle] = useState("")
  const [results, setResults] = useState({meals: []})
  const [resultsDB, setResultsDB] = useState()
  const [cardId, setCardId] = useState("")

  const history = useHistory()

  useEffect(() => {
    setSearchTitle(title)
    if (!title || title === "undefined") {
      mealsService.find10RandomRecipes()
      .then(results => setResults(results))
    } else {
      mealsService.findRecipesFromMongoDB(title)
       .then(results1 => setResultsDB(results1))

      mealsService.findMealByTitle(title)
      .then(results2 => setResults(results2))

      // const newArray = Object.assign({}, results);
      // newArray['meals'].push(resultsDB);
      // setResults(newArray)

    }

  }, [title])

  return (
      <>
        <Header/>
        <div>
          <div className="container-fluid mt-5">

            <h1>Search Meals</h1>

            <input
                onChange={(event) => {
                  setSearchTitle(event.target.value)
                }}
                className="form-control"
                value={searchTitle}/>
            <br/>
            <button
                onClick={() => {
                  history.push(`/search/${searchTitle}`)
                }}
                className="btn btn-primary btn-block">
              Search
            </button>
            <br/>

            <div className="row">

              {/*{*/}
              {/*  results && results.meals && results.meals.length !== 0 &&*/}
              {/*  <div className="col-2">*/}
              {/*    <br/>*/}
              {/*    <br/>*/}
              {/*    <FilterBar setCategory={setSearchCategory}/>*/}
              {/*    {updateResult}*/}
              {/*  </div>*/}
              {/*}*/}

              <div className="ml-4">
                <ul className="row">
                  {
                    results && results.meals && results.meals.map(meal =>
                        <SearchCard meal={meal} searchTitle={searchTitle}/>
                    )
                  }
                  {
                    !results.meals &&
                    <h3>No recipe found from remote database...</h3>
                  }
                </ul>
                <br/>
                {
                  searchTitle &&
                      <>
                        <h2>Recipe created by our chef:</h2>
                        <ul className="row">

                          {
                            resultsDB && resultsDB.map(meal =>
                                <SearchCardLocal meal={meal} searchTitle={searchTitle}/>
                            )
                          }
                          {
                            (!resultsDB || !resultsDB[0]) &&
                            <h3 className="ml-3">No recipe found in local database...</h3>

                          }
                        </ul>
                      </>
                }
              </div>
            </div>
          </div>
        </div>
        {/*<Footer/>*/}
      </>
  )
}

export default SearchMeals