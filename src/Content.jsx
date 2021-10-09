import React from 'react'
import Post from './Post'
import Profile from './wesnap/profile_pic/pic2.jpg'
import Fp1 from './wesnap/profile_pic/pic1.jfif'
import Fp2 from './wesnap/profile_pic/pic4.jfif'
import grouppic from './wesnap/post_img/post3.jpg';
import { useState } from 'react'

export default function Content() {

  const pic = "./wesnap/profile_pic/pic1.jfif"

  const fname = [
    {
      Name: "Naveen Sharma",
      Date: Date(2021, 5, 15),
      Mess: "hii my name is naveen sharma",
      Like: 35,
      Comment: 9,
      Share: 3,
      Data: grouppic,
      Dis: "Hi this is random picture by picsum",
      pic: pic,
      Fp : Fp1
    },
    {
      Name: "Kapil Sharma",
      Date: Date(2021, 2, 13),
      Mess: "hii my name is naveen sharma",
      Like: 355,
      Comment: 193,
      Share: 33,
      Data: "https://source.unsplash.com/user/c_v_n",
      Dis: "This is the second one picture",
      pic: "./wesnap/profile_pic/pic4.jfif",
      Fp : Fp2
    }
  ];

  // const [like, setLike] = useState(fname[0].Like);
  // console.log(like);
  return (
    <div>
      <section id="Content">

        {/* <!-- <<<<<<<<<< Write a post >>>>>>>>>>> --> */}

        <div className="inner_content">
          <h5>Post Something</h5>
          <div className="post">
            <img src={Profile} alt="" />

            <input type="text" placeholder="What's on your mind?" />
            <svg aria-hidden="true" className="post_img" focusable="false" data-prefix="far"
              data-icon="images" classNameName="svg-inline--fa fa-images fa-w-18" role="img"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path
                d="M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v48H54a6 6 0 0 0-6 6v244a6 6 0 0 0 6 6h372a6 6 0 0 0 6-6v-10h48zm42-336H150a6 6 0 0 0-6 6v244a6 6 0 0 0 6 6h372a6 6 0 0 0 6-6V86a6 6 0 0 0-6-6zm6-48c26.51 0 48 21.49 48 48v256c0 26.51-21.49 48-48 48H144c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h384zM264 144c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40zm-72 96l39.515-39.515c4.686-4.686 12.284-4.686 16.971 0L288 240l103.515-103.515c4.686-4.686 12.284-4.686 16.971 0L480 208v80H192v-48z">
              </path>
            </svg>

          </div>
          <a href="index.html" className="post_now">Post Now</a>
        </div>

        {/* <!-- <<<<<<<<<<<<<<  following posts >>>>>>>>>> --> */}

        {/* <!-- <<<<<<<<<<<<<<<<<<<<    post=== 1   >>>>>>>>>>>>>>>> --> */}

        {fname.map((Pitem, index) => {
          return (<Post Name={Pitem.Name}
            key={index}
            Dat={Pitem.Date}
            Mess={Pitem.Mess}
            Like={Pitem.Like}
            Comment={Pitem.Comment}
            Share={Pitem.Share}
            Data={Pitem.Data}
            Dis={Pitem.Dis}
            Pic={Pitem.Pic}
            Fp ={Pitem.Fp}
            // likeButton={likebutton} 
             />)
        })}




      </section>
    </div>
  )
}
