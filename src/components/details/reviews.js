import react from 'react'
import ReviewCard from "./review_card"

const reviews = (meal) => {
    return (
      <ul className="list-group">
          <li className="list-group-item">
            <ReviewCard meal={meal}/>
          </li>
          <li className="list-group-item">
            <ReviewCard meal={meal}/>
          </li>
          <li>
            <h3>Add a review</h3>
            <button className="btn btn-primary float-right">Upload image</button>
            <div>
              <input className="form-control" type="text" placeholder="Share your thoughts here..."/>
              <button className="btn btn-primary float-right">Submit</button>
            </div>
          </li>
      </ul>
    )
}

export default reviews