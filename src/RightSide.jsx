import React from 'react'
import Search from './Search'
import Frinds from './Frinds'
import Fp1 from  './wesnap/profile_pic/pic1.jfif';
import Fp2 from  './wesnap/profile_pic/pic2.jpg';
import Fp3 from  './wesnap/profile_pic/pic3.jfif';
import Fp4 from  './wesnap/profile_pic/pic4.jfif';
import Fp5 from  './wesnap/profile_pic/pic5.jpg';

export default function RightSide() {

  const frinds = [{
    profile_pic : Fp1,
    Name : "Kapil Sharma",
    Follower : 72
  },
  {
    profile_pic : Fp2,
    Name : "Rohan Mann",
    Follower : 90
  },{
    profile_pic : Fp3,
    Name : "Parkash sharma",
    Follower : 93
  },{
    profile_pic : Fp4,
    Name : "Jattin Gupta",
    Follower : 83
  },{
    profile_pic : Fp5,
    Name : "Naveen Sharma",
    Follower : 29
  }
]
    return (
        <div>
            <section id="right_side-bar">
            <div className="had_friend">
              <div className="side_dots">
                <h4 className="hed_titel">FRIENDS</h4>
                <div className="dots_inner"></div>
              </div>
              <Search width=".8rem" height=".8rem" RightSide="4px" />
            </div>

            {
              frinds.map((value,index) =>{
                return(
                  <Frinds profile_pic={value.profile_pic} Name={value.Name} Follower={value.Follower} />
                )
              })
            }
            
          </section>
        </div>
    )
}
