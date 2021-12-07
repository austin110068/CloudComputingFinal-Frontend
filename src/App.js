import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/cookie/register";
import Login from "./components/cookie/login";
import SearchMeals from "./components/search/search_meal";
import MealDetails from "./components/details/meal_details";
import UpdateProfile from "./components/cookie/update-profile";
import Footer from "./components/partials/footer";
import CreateRecipe from "./components/recipes/create-recipe";
import Profile from "./components/cookie/profile";
import "./App.css"
import FavoritesForUser from "./components/favorites/favoritesForUser"
import UsersForFavorite from "./components/favorites/usersForFavorite"
import RecipeTable from "./components/recipes/recipe-table";
import PrivacyPolicy from "./components/privacyPolicy";

function App() {
  return (
      <div className="page-container ">
          <div className="wrapper">
            <BrowserRouter>
              <div className="content">
                <Route
                    exact={true}
                    path={["/"]}
                    component={Home}>
                </Route>
                <Route
                    exact={true}
                    path={["/search", "/search/:title"]}>
                  <SearchMeals/>
                </Route>
                <Route
                    exact={true}
                    path="/register"
                    component={Register}>
                </Route>
                <Route
                    exact={true}
                    path="/login"
                    component={Login}>
                </Route>
                <Route
                    exact={true}
                    path="/update-profile/:username"
                    component={UpdateProfile}>
                </Route>
                <Route path="/:searchTitle/details/:idMeal" exact={true}>
                  <MealDetails/>
                </Route>
                <Route path="/create" exact={true}>
                  <CreateRecipe/>
                </Route>
                <Route path={"/profile/:username"}
                       exact={true}
                       component={Profile}>
                </Route>
                {/*Display all favorites for a specific user*/}
                <Route path={"/favorites/user/:username"}
                       exact={true}
                       component={FavoritesForUser}>
                </Route>
                {/*Display all users that liked a specific recipe*/}
                <Route path={"/users/favorite/:mealId"}
                       exact={true}
                       component={UsersForFavorite}>
                </Route>
                <Route path={"/:username/recipes"}
                       exact={true}>
                  <RecipeTable/>
                </Route>
                <Route path="/policy" exact={true}>
                  <PrivacyPolicy/>
                </Route>
              </div>

            </BrowserRouter>
            {/*<Footer/>*/}
          </div>

      </div>
  );
}

export default App;
