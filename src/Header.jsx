import React from 'react';
import logo from './wesnap/icon/wp.png';
import Search from './Search';
import {AiOutlineUserAdd} from "react-icons/ai";
import { Height } from '@material-ui/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';


// import Seh from '@material-ui/icons/Search';
// import ImageSearchIcon from '@material-ui/icons/ImageSearch';

export default function Header(props) {

    const toggleClass = () =>{
        const togg = document.querySelector('.togg');
        togg.classList.toggle('togg-done');
        const toggham = document.querySelector('.Toggel_menu');
        toggham.classList.toggle('toggham');
    }

    // const [tog,setToggle] = useState({
    //     togClass : false,
    //     display : ''
    // });

    // const toggleClass = () =>{
    //     if (tog.togClass===false){
    //         setToggle({
    //             toggleClass : true,
    //             display : 'none'
    //         });
    //     }else{
    //         setToggle({
    //             toggleClass : false,
    //             display : 'flex'
    //         });
    //     }
    // }
    return (<>
        <div className="Toggel_menu"  onClick={toggleClass}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
        <header>
            <div className="logo">

                
                <Link to="/singup">
                <img src={logo} style={{cursor : 'pointer'}} alt="Logo" />
                </Link>
            </div>
            <Search />
            <div className="add-f">
                <AiOutlineUserAdd cursor="pointer" style={{width:20 ,height:20}}/>
            </div>
        </header>
        </>
    )
}
