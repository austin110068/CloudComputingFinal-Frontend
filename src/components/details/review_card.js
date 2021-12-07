import React from 'react'

const ReviewCard = ({meal}) => {
  return (
    <div>
      <div>
        <img src={meal.strMealThumb} width="10%"/>
        username1
      </div>
      <p>
        Review1: Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>
    </div>
  )
}

export default ReviewCard