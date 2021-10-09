import React from 'react';
import Profile from './wesnap/profile_pic/pic2.jpg';
import Svg1 from './wesnap/icon/News-icon.svg';
import Svg2 from './wesnap/icon/Messages-icon.svg';
import Svg3 from './wesnap/icon/Notification-icon.svg';
import Svg4 from './wesnap/icon/Location-icon.svg';
import Svg5 from './wesnap/icon/privecy-icon.svg';
import Svg6 from './wesnap/icon/Setting-icon.svg';
import { Link } from 'react-router-dom';

export default function LeftSide() {
    return (
        <div>
            <section id="left_side-bar" className="togg" >
            <div className="user_profile left_div">
              <img src={Profile} alt="" />
              <h4>Naveen Sharma</h4>
              <h5><span>25k</span>folowers</h5>
              <div className="edit">
                <img src="/icon/edit-icon.svg" alt="" />
                <Link to="index.html" >Edit Profile</Link>
              </div>
            </div>
            <div className="manu left_div">
              <h4 className="hed_titel">MENUS</h4>
              <ul>
                <li>
                  <Link to="/" ><img src={Svg1} alt="" />Home</Link>
                </li>
                <li><img src={Svg2} alt="" />
                  <Link to="/Messages" >Messages</Link>
                </li>
                <li><img src={Svg3} alt="" />
                  <Link to="/Notification" >Notification</Link>
                </li>
                <li><img src={Svg4} alt="" />
                  <Link to="/Location" >Location</Link>
                </li>
                <li><img src={Svg5} alt="" />
                  <Link to="/Privecy" >Privecy</Link>
                </li>
                <li><img src={Svg6} alt="" />
                  <Link to="/Setting" >Setting</Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
    )
}
