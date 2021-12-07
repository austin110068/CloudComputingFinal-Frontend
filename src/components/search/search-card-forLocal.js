import React from 'react'
import {Link} from "react-router-dom";

const SearchCardLocal = ({meal, searchTitle}) => {

  return (
      <div className="col-3 ml-n2">
        <div className="card mt-5" >

          <img
              src={meal.strMealThumb}
              className="card-img-top" alt="..."/>
          <div className="card-body">
            {/*<h5 className="card-title">{meal.strMeal}</h5>*/}
            <img src={``}/>

            <Link to={`/${searchTitle}/details/${meal._id}`}>
              <h5 className="card-title">{meal.strMeal}</h5>
            </Link>
          </div>
        </div>
      </div>
  )
}
export default SearchCardLocal