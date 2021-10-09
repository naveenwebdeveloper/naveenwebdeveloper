import React from 'react';

export default function Frinds(props){
    return (
        <div className="friend">
            <img src={props.profile_pic} alt="" />
            <div>
                <a href="index" >{props.Name}</a>
                <a href="index" className="follower">{props.Follower} followers</a>
            </div>
        </div>
    )
}