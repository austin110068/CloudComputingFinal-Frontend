import react from 'react'
import SearchCard from "../search/search_card"

const displaySimilarDishes = (similarDishesCount, results, setSimilarDishesCount, searchTitle, meal) => {
    return (
      <ul className="row">
        {
          similarDishesCount <= 4 && results && results.meals && results.meals.map(singleMeal =>
            {
              <SearchCard singleMeal={singleMeal} searchTitle={searchTitle}/>
              setSimilarDishesCount(similarDishesCount+1)
              console.log(similarDishesCount)
              console.log(searchTitle)
            }
          )
        }
        {/*{similarDishesCount}*/}
        <SearchCard meal={meal} searchTitle={searchTitle}/>
      </ul>
    )
}

export default displaySimilarDishes