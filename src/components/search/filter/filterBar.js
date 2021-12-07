import React, {useEffect, useState} from "react"
import {useHistory, useParams} from "react-router-dom";
import mealsService from "../../../services/meals-service";


const FilterBar = ({
    setCategory,
    setArea,
    setTitle
}) => {
  const {title} = useParams()
  const [searchTitle, setSearchTitle] = useState("")
  const [categoryCache, setCategoryCache] = useState("")
  const history = useHistory()
  useEffect(() => {
    setSearchTitle(title)
  }, [title])

  return (
      <div className="bg-light">
        <br/>
        <div className="row">
          <h3 className="col-6">Filters</h3>

        </div>
        <br/>
        <div className="form-group">
          <div>
            <label for="searchText">Recipe or Keywords:</label>
            <input type="text" className="form-control"
                   id="searchText"
                   onChange={(event) => {
                     setSearchTitle(event.target.value)
                   }}
                   value={searchTitle}/>
          </div>
          <br/>
          <div>
            <label for="category">Category:</label>
            {/*<input type="text" className="form-control" id="category"*/}
            {/*       placeholder="Example input"/>*/}
            <select className="custom-select"
                    id="category"
                    onChange={(e) => {
                      setCategory(e.target.value)
                    }}
            >
              <option selected>Choose...</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Starter">Starter</option>
              <option value="Dessert">Dessert</option>
              <option value="others">Others</option>
            </select>
          </div>
          <br/>
          <div>
            <label htmlFor="area">Area:</label>
            {/*<input type="text" className="form-control" id="category"*/}
            {/*       placeholder="Example input"/>*/}
            <select className="custom-select"
                    id="area">
              <option selected>Choose...</option>
              <option value="Chinese">Chinese</option>
              <option value="American">American</option>
              <option value="British">British</option>
              <option value="Indian">Indian</option>
              <option value="Mexican">Mexican</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <br/>
          <button className="btn-success ">Clear All</button>
          <button
              onClick={() => {history.push(`/search/${searchTitle}`)}}
              className="btn-success float-right">
            Search
          </button>
        </div>
      </div>
  )
}

export default FilterBar;