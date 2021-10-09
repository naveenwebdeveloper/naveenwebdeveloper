import React, { useState } from 'react';
import './Sin.css';
import { Link} from 'react-router-dom';
import { ReactComponent as Exp } from './wesnap/exp.svg';
import { useHistory } from 'react-router-dom';




export default function Singup() {
    const History = useHistory();

    const [iVal, setival] = useState({
        Fname: "",
        Lname: "",
        UserName: "",
        Email: "",
        Pass: "",
        Cpassword: ""
    });
    let Val, Name;
    const inputValue = (e) => {
        e.preventDefault();
        Val = e.target.value;
        Name = e.target.name;
        setival({ ...iVal, [Name]: Val })
        // console.log(iVal);
    }

    console.log(iVal);

    const postData = async (e) => {
        // try {
        e.preventDefault();
        const { Fname, Lname, UserName, Email, Pass, Cpassword } = iVal;

        setival({
            Fname : "",
            Lname: "",
            UserName: "",
            Email:"",
            Pass:"",
            Cpassword:""
        });
        
        if(!Fname){
            console.log('this Fname is empity')
        }

        if (!Fname || !Lname || !UserName || !Email || !Pass || !Cpassword) {

            console.log('please fill the all filed in this form !')

            

        }else{
            History.push("/singin");
            const res = await fetch("/router", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ 
                    Fname,
                    Lname,
                    UserName,
                    Email,
                    Pass,
                    Cpassword
                })
            })
            const Data = await res.json();

            // console.log(Data);
            // History.push("/singin");

            
            
            
            // }
            // catch (err) {
            //     console.log(err)
            // }
        }
        
    }

    return (
        <div className="form_D">
            <div id="left_">
                <img src="" alt="" />
            </div>
            <div id="right_">
                <h1>Register Now</h1>
                <form method="POST">
                    <div>
                        <input type="text" value={iVal.Fname} placeholder="First Name" name="Fname" onChange={inputValue} required autoComplete="off" />
                        <Exp className="Exp" />
                    </div>
                    <div>
                        <input type="text" value={iVal.Lname} placeholder="Last Name" name="Lname" onChange={inputValue} required autoComplete="off" />
                        <Exp className="Exp" className="Exp" />
                    </div>
                    <div>
                        <input type="text" value={iVal.UserName} placeholder="username" name="UserName" onChange={inputValue} required autoComplete="off" />
                        <Exp className="Exp" />
                    </div>
                    <div>
                        <input type="Email" value={iVal.Email} placeholder="Email" name="Email" onChange={inputValue} required autoComplete="off" />
                        <Exp className="Exp" />
                    </div>
                    <div>
                        <input type="Password" value={iVal.pass} placeholder="password" name="Pass" onChange={inputValue} required autoComplete="off" />
                        <Exp className="Exp" />
                    </div>
                    <div>
                        <input type="password" value={iVal.Cpassword} placeholder="Conform password" name="Cpassword" onChange={inputValue} required autoComplete="off" />
                        <Exp className="Exp" />
                    </div>
                    <div id="Condition">
                        <input type="checkbox" name="Condition" required />
                        <a href="">Term and Condition</a>
                    </div>
                    <div>
                        <input type="submit" onClick={postData} />
                    </div>
                </form>
                <p> Already Registerd <Link to="/Singin">Log In</Link></p>
            </div>
        </div>
    )
}
