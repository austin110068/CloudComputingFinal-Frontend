import react from 'react'

const showBriefInfo = (meal) => {
    return (
      <ul className="briefInfo">
        {meal.strArea && <li>Area: {meal.strArea}</li>}
        {meal.strCategory && <li>Category: {meal.strCategory}</li>}
        {meal.strYoutube &&
          <li>
            <a href={`${meal.strYoutube}`}>YouTube Tutorial</a>
          </li>
        }
      </ul>
    )
}

export default showBriefInfo