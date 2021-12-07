import React, {useState, useEffect} from 'react'
import {useParams, Link} from "react-router-dom"
import mealsService from '../../services/meals-service';

const FavoritesForUser = ({favorite}) => {
  const {username} = useParams()
  const[detail, setDetail] = useState()
  useEffect(() => {
      mealsService.findMealById(favorite.recipeId)
      .then(detail => {
          setDetail(detail.meals[0])
      })
  }, [])

  return (
      <div className="card" style={{width: "19.3rem"}}>
          {detail&&
            <>
              <img src={detail.strMealThumb} class="card-img-top" alt="..."/>
                <div className="card-body">
                    <Link to={`/${username}/details/${detail.idMeal}`}>{detail.strMeal}</Link>
                </div>
            </>
          }
            
      </div>
  )
}

export default FavoritesForUser