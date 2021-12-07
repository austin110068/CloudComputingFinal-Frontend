import React, {useEffect, useState} from 'react'
import Header from "../partials/header";
import {Link, useParams} from "react-router-dom";
import userService from "../../services/users-service";
import CurrUserContent from "./publicContent"
import PrivateContent from './privateContent';
import favoritesService from '../../services/favorites-service';
import mealsService from '../../services/meals-service';
import FavoritesForUser from '../favorites/favoritesForUser';

const Profile = () => {
    const {username} = useParams()
    // console.log(username)
    const [currentUser, setCurrentUser] = useState([])
    const [otherUser, setOtherUser] = useState([])
    const [favorates, setFavorates] = useState([])
    const [isFavo, setIsFavo] = useState(true)
    // const[detail, setDetail] = useState()
    // const [portrait, setPortrait] = useState("https://www.cyphercoders.com/sites/default/files/default_images/default-user-icon-4.jpg")
    useEffect(() => {
        userService.profile()
            .then(currUser => {
                // console.log(currUser)
                setCurrentUser(currUser)
            })
    },[])
    useEffect(() => {
        userService.findUserByName(username)
            .then(otherUser => {
                setOtherUser(otherUser[0])
            })
    },[])
    useEffect(() => {
        // console.log(username)
        favoritesService.findAllFavoritesForAUser(username)
            .then(favoratesItem => {
                setFavorates(favoratesItem)
            }
            )
    }, [])

    return (
        <>
            <Header/>
            <div className="container profile">
                <div className="top">
                    {
                        currentUser.username === username &&
                        <CurrUserContent currentUser = {otherUser} />
                    }
                    {
                        currentUser.username !== username &&
                        // <PrivateContent otherUser = {otherUser[0]}/>
                        <div style={{display: 'flex', justifyContent: "space-around", margin: '18px 0px'}}>
                            <div>
                                <img className="image"
                                    src={otherUser.portrait}/>
                            </div>
                            <div>
                                <div style={{display: 'flex', justifyContent: "space-between", width: "150%"}}>
                                    <h2>{otherUser.username}</h2>

                                </div>
                                <div>
                                    <p style={{fontSize: 20, marginTop: 10}}>{otherUser.bio}</p>
                                </div>
                            </div>
                        </div>
        
                    }

                    <div className="cell-box">
                        <div className="form-group row cell">
                            {
                                otherUser.role === "Chef" &&
                                <>
                                    <div className="col-6 each-cell">
                                        <Link className={`bth ${!isFavo? 'select': 'not-select'}`} onClick={() => setIsFavo(false)}>
                                            Your posts
                                        </Link>
                                    </div>
                                    <div className="col-6 each-cell">
                                        <Link className={`bth ${isFavo? 'select': 'not-select'}`} onClick={() => setIsFavo(true)}>
                                            Your Favorites                            
                                        </Link>
                                    </div>
                                </>
                            }
                            {
                                otherUser.role !== "Chef" &&
                                <>
                                    <div className="col-12 each-cell">
                                    <Link className={`bth ${isFavo? 'select': 'not-select'}`} onClick={() => setIsFavo(true)}>
                                            Your Favorites                            
                                        </Link>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                    <div className="lower">
                        <div className="row card-area">
                        {/* {console.log(favorates)} */}
                        {
                            favorates && isFavo &&      
                            favorates.map(favorate =>     
                                <FavoritesForUser favorite={favorate}/>
                            )   

                        }
                    </div>
                    </div>
                    
                </div>
            </div>
        </>

    )
}

export default Profile