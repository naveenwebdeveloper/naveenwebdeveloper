
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import Header from './Header'
import LeftSide from './LeftSide'
import Content from './Content'
import RightSide from './RightSide'
import Notification from './Notification';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';

export default function App() {
  // const History = useHistory();

  // const callHomePage = async () =>{
  //   try{
  //    const res = fetch('/home',{
  //      method : 'GET',
  //      headers : {
         
  //      }
  //    }) 
  //   }
  // }



  // useEffect(() => {
  //   callHomePage();

  // },[])
  return (
    <>
      {/* <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<   HEADER PART  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> --> */}

      <Router>
        <Header />
        <Switch>


          {/* <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< MAIN PART   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> --> */}

          <div className="main-div">
            <LeftSide />

            <Switch>

              <Route path="/" exact>
                <Content />
                <RightSide />
              </Route>

              <Route path="/Notification">
                <Notification />
              </Route>
            </Switch>

          </div>
        </Switch>
      </Router>
    </>
  )
}