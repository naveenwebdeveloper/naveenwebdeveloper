import React from 'react';
import {FaSearch} from 'react-icons/fa';

export default function Search() {
    let Img = FaSearch;
    return (
        <div className="search">
                <input type="text" placeholder="Search" />
                <Img className="serch_icon" fill='white' />
            </div>
    )
}
