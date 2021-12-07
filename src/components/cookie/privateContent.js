import React, {useEffect, useState} from 'react'
import Header from "../partials/header";
import {Link, useParams} from "react-router-dom";
import userService from "../../services/users-service";

const PrivateContent = ({otherUser}) => {
    console.log(otherUser)
    return(
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
    )
}

export default PrivateContent