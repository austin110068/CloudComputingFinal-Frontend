import React, {useEffect, useState} from 'react'
import {findAllRecipes} from "../../services/recipes-service";
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom"
import RecipeRow from "./recipe-row";
import recipeService from '../../services/recipes-service'
import Header from "../partials/header";

const RecipeTable = () => {
    // constructor(props) {
    //     super(props)
    //     console.log(props)
    // }
    const {username} = useParams()
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
            recipeService.findAllRecipes()
                .then((res) => {
                    //console.log(res)
                    setRecipes(res)
                    console.log(recipes.length)
                })
        },[recipes.length]
    )

    // componentDidMount = () =>
    //      findAllRecipes()
    //         .then(res => {
    //             this.setState({
    //                 recipes: res})
    //             //console.log(JSON.stringify(this.state.recipes))
    //
    //         })




        return(
            <>
                <Header/>
                <div className="container mt-5">
                    <h2>All Recipes Table</h2>
                    <table className="table table-striped">
                        <tbody>
                        <tr>
                            <th>Recipe Name</th>
                            <th className="d-none d-md-table-cell">Created by</th>
                            <th className="float-right">
                                <i className="fas fa-1x fa-trash"/>
                            </th>
                        </tr>
                        {
                            recipes.map((recipe) =>
                                //console.log(JSON.stringify(recipe))
                                <RecipeRow
                                    recipe={recipe}/>
                            )

                        }
                        </tbody>
                    </table>

                </div>
            </>

        )

}
export default RecipeTable