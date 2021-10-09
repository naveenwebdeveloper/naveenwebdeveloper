import React,{useState} from 'react'
import { Link,useHistory } from 'react-router-dom';
import {ReactComponent as Exp} from './wesnap/exp.svg';


export default function Singin() {
    const history = useHistory();

    const [iVal, setival] = useState({
        Email: "",
        Pass: "",
    });
    let Val, Name, Set;
    const inputValue = (e) => {
        e.preventDefault();
        Val = e.target.value;
        Name = e.target.name;
        setival({ ...iVal, [Name]: Val })
        // console.log(iVal);
    }

    console.log(iVal);
    // const postData = (e) =>{
    //     e.preventDefault();
    // }
    const postData = async (e) => {
        try {
        e.preventDefault();

        const {Email ,Pass} = iVal;

        const res = await fetch("/singin", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body:JSON.stringify({
                Email,
                Pass
            })
        })

        const Data = await res.json();
        console.log(Data);
        if(res.status === 400){
            console.log("invalid data")
        }
        else{
            console.log("loged in")
            history.push("/")
        }


        }
        catch (err) {
            console.log(err)
        }

    }

    return (
        <div className="form_D">
            <div id="left_">
                <img src="" alt="" />
            </div>
            <div id="right_">
                <h1>Log In</h1>
                <form method="POST">
                    <div>
                        <input type="Email" value={iVal.Email} placeholder="Email" name="Email" onChange={inputValue} required autoComplete="off" />
                        <Exp className="Exp"/>
                    </div>
                    <div>
                        <input type="Password" value={iVal.password} placeholder="password" name="Pass" onChange={inputValue} required autoComplete="off" />
                        <Exp className="Exp"/>
                    </div>
                    <div>
                        <input type="submit" onClick={postData} />
                    </div>
                </form>
                <p>You are New ? <Link to="/Singup">Register Now</Link></p>
            </div>
        </div>
    )
}
