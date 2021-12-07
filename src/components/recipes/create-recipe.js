import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import Header from "../partials/header";
import recipeService from "../../services/recipes-service"
import userService from "../../services/users-service"

const CreateRecipe = () => {
    const [user, setUser] = useState([])
    const [recipe, setRecipe] = useState({
        strMeal: '',
        strInstructions: '',
        strIngredient1: '',
        strIngredient2: '',
        strIngredient3: '',
        strIngredient4: '',
        strIngredient5: '',
        strMeasure1: '',
        strMeasure2: '',
        strMeasure3: '',
        strMeasure4: '',
        strMeasure5: '',
        strMealThumb: '',
        username: '',
        strArea: '',
        strCategory: ''

    })

    useEffect(() => {
        userService.profile()
            .then(currUser => {
                setUser(currUser)
                recipe.username = currUser.username
                setRecipe(recipe)
                console.log(JSON.stringify(currUser))
                console.log(JSON.stringify(user))
            })
    }, [])
    // const findAllRecipes = () => {
    //     recipeService.findAllRecipes()
    //         .then(response => setRecipes([...recipes, response]))
    // }
    // useEffect(() => {
    //     findAllRecipes()
    // }, [])
    return (
        <>
            <Header/>
            <div className="container">
                <h2>Create Recipe</h2>

            <br/>
                {/*<ul>*/}
                {/*    {*/}
                {/*        recipes.map((recipe) => {*/}
                {/*            console.log(JSON.stringify(recipe))*/}

                {/*                return (*/}
                {/*                    <>*/}
                {/*                        {JSON.stringify(recipe)}*/}
                {/*                        {recipe.area}*/}
                {/*                        <br/>*/}
                {/*                    </>*/}
                {/*                )*/}
                {/*            }*/}

                {/*        )*/}

                {/*    }*/}
                {/*</ul>*/}
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Recipe Name</label>
                <div className="col-sm-10">
                    <input onChange={(e) => {
                        recipe.strMeal = e.target.value
                        setRecipe(recipe)
                    }}
                           // value={""}
                           type="text"
                           className="form-control"
                           placeholder="recipe name"/>
                </div>
            </div>

            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Instructions</label>
                <div className="col-sm-10">
                    <textarea onChange={(e) => {
                        recipe.strInstructions = e.target.value
                        setRecipe(recipe)

                    }}
                           className="form-control"
                           placeholder="Instructions"/>
                </div>
            </div>

            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Ingredient1</label>
                <div className="col-sm-10">
                    <input onChange={(e) => {
                        recipe.strIngredient1 = e.target.value
                        setRecipe(recipe)
                    }}
                        // value={""}
                           type="text"
                           className="form-control"
                           placeholder="Ingredient1"/>
                </div>
            </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Ingredient2</label>
                    <div className="col-sm-10">
                        <input onChange={(e) => {
                            recipe.strIngredient2 = e.target.value
                            setRecipe(recipe)
                        }}
                            // value={""}
                               type="text"
                               className="form-control"
                               placeholder="Ingredient2"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Ingredient3</label>
                    <div className="col-sm-10">
                        <input onChange={(e) => {
                            recipe.strIngredient3 = e.target.value
                            setRecipe(recipe)
                        }}
                            // value={""}
                               type="text"
                               className="form-control"
                               placeholder="Ingredient3"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Ingredient4</label>
                    <div className="col-sm-10">
                        <input onChange={(e) => {
                            recipe.strIngredient4 = e.target.value
                            setRecipe(recipe)
                        }}
                            // value={""}
                               type="text"
                               className="form-control"
                               placeholder="Ingredient4"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Ingredient5</label>
                    <div className="col-sm-10">
                        <input onChange={(e) => {
                            recipe.strIngredient5 = e.target.value
                            setRecipe(recipe)
                        }}
                            // value={""}
                               type="text"
                               className="form-control"
                               placeholder="Ingredient5"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Measure1</label>
                    <div className="col-sm-10">
                        <input onChange={(e) => {
                            recipe.strMeasure1 = e.target.value
                            setRecipe(recipe)
                        }}
                            // value={""}
                               type="text"
                               className="form-control"
                               placeholder="Measure1"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Measure2</label>
                    <div className="col-sm-10">
                        <input onChange={(e) => {
                            recipe.strMeasure2 = e.target.value
                            setRecipe(recipe)
                        }}
                            // value={""}
                               type="text"
                               className="form-control"
                               placeholder="Measure2"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Measure3</label>
                    <div className="col-sm-10">
                        <input onChange={(e) => {
                            recipe.strMeasure3 = e.target.value
                            setRecipe(recipe)
                        }}
                            // value={""}
                               type="text"
                               className="form-control"
                               placeholder="Measure3"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Measure4</label>
                    <div className="col-sm-10">
                        <input onChange={(e) => {
                            recipe.strMeasure4 = e.target.value
                            setRecipe(recipe)
                        }}
                            // value={""}
                               type="text"
                               className="form-control"
                               placeholder="Measure4"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Measure5</label>
                    <div className="col-sm-10">
                        <input onChange={(e) => {
                            recipe.strMeasure5 = e.target.value
                            setRecipe(recipe)
                        }}
                            // value={""}
                               type="text"
                               className="form-control"
                               placeholder="Measure5"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">MealThumb</label>
                    <div className="col-sm-10">
                        <input onChange={(e) => {
                            recipe.strMealThumb = e.target.value
                            setRecipe(recipe)
                        }}
                            // value={""}
                               type="text"
                               className="form-control"
                               placeholder="MealThumb"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">User ID</label>
                    <div className="col-sm-10">
                        <input onChange={(e) => {
                            console.log(user.username)
                            recipe.username = user.username
                            setRecipe(recipe)
                        }}
                               readOnly
                               type="text"
                               className="form-control"
                               placeholder={user.username}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Area</label>
                    <div className="col-sm-10">
                        <input onChange={(e) => {
                            recipe.strArea = e.target.value
                            setRecipe(recipe)
                        }}
                            // value={""}
                               type="text"
                               className="form-control"
                               placeholder="Area"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Category</label>
                    <div className="col-sm-10">
                        <input onChange={(e) => {
                            recipe.strCategory = e.target.value
                            setRecipe(recipe)
                        }}
                            // value={""}
                               type="text"
                               className="form-control"
                               placeholder="Category"/>
                    </div>
                </div>

            <div className="form-group row">
                <label className="col-sm-2 col-form-label"/>
                <div className="col-sm-12">
                    <button className="btn btn-success form-control"
                    onClick={() => {
                        recipeService.createRecipe(recipe.strMeal, recipe)
                            .then(response => response.json)
                        //console.log(this.state.user.username)
                        //this.props.history.push(`/profile/${this.state.user.username}`)
                        alert("Create successfully!")
                    }}>
                        Create
                    </button>
                </div>
            </div>

            <div className="form-group row">
                <label className="col-sm-2 col-form-label"/>
                <div className="col-sm-12">
                    <Link to="/profile">
                        <button className="btn btn-danger form-control">
                            Cancel
                        </button>
                    </Link>

                </div>
            </div>


            </div>
        </>
    )
}

export default CreateRecipe