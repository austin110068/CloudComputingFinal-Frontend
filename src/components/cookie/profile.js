import React, {useEffect, useState} from 'react'
import Header from "../partials/header";
import {Link, useParams} from "react-router-dom";
import userService from "../../services/users-service";
import CurrUserContent from "./publicContent"
import favoritesService from '../../services/favorites-service';
import FavoritesForUser from '../favorites/favoritesForUser';

const Profile = () => {
    const { username } = useParams()
    const [currentUser, setCurrentUser] = useState([])
    const [otherUser, setOtherUser] = useState([])
    const [favorites, setfavorites] = useState([])
    const [isFavo, setIsFavo] = useState(true)
    
    console.log("otheruser: ", otherUser);
    console.log("Currentuser: ", currentUser);
    console.log("userparams: ", username);

    useEffect(() => {
        userService.profile()
            .then(currUser => {
                setCurrentUser(currUser.Items[0])
            })
    }, [])

    useEffect(() => {
        userService.findUserByName(username)
            .then(otherUser => {
                console.log("fefe", otherUser);
                setOtherUser(otherUser.Item)
            })
    }, [])

    useEffect(() => {
        favoritesService.findAllFavoritesForAUser(username)
            .then(favoritesItem => {
                setfavorites(favoritesItem)
            })
    }, [])

    return (
        <>
            <Header/>
            <div className="container profile">
                <div className="top">
                    {
                        currentUser.username === username &&
                        <CurrUserContent currentUser={otherUser} />
                    }
                    {
                        currentUser.username !== username &&
                        // <PrivateContent otherUser = {otherUser[0]}/>
                        <div style={{display: 'flex', justifyContent: "space-around", margin: '18px 0px'}}>
                            <div>
                                <img className="image"
                                    src={otherUser.portrait} alt=""/>
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
                        {
                            favorites && isFavo &&      
                            favorites.map(favorite =>     
                                <FavoritesForUser favorite={favorite}/>
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