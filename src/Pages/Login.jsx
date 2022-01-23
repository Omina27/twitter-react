import './Login.css'
import useToken from "../Hook/UseToken"
import { useState, useEffect } from "react"
import Logo from '../assets/images/twitter.png'

function Login() {
    const [token, setToken] = useToken()
    const [inputValue, setInputValue] = useState("")
    const [inputValue1, setInputValue1] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch("https://reqres.in/api/register", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                email: inputValue, 
                password: inputValue1
            })
        })
        .then(res => {
            if(res.status === 400){
                setToken('Bad request')
            }else{
                return res.json()
            }
        })
        .then(data => setToken(data.token))
    }

    

    return (
        <>
        <div style={{width: "450px", marginLeft: "auto", marginRight: "auto", marginTop: "50px"}}>
            <img src={Logo} style={{width: "100px", height: "100px", marginTop: "15px", display: "block", marginLeft: 'auto', marginRight: "auto"}}/>

            <h1 className='logHeading'>Log in to Twitter</h1>
        
            <form className='form' onSubmit={(e) => handleSubmit(e)}>
                <input className='logInput'
                    type='text'
                    placeholder="Phone, email, or username"
                    onChange={(e) => setInputValue(e.target.value)}
                />

                <input 
                    type='text' className='logInput'
                    placeholder="Password"
                    onChange={(e) => setInputValue1(e.target.value)}
                />

                <button className='logBtn' type="submit">Log in</button>
            </form>
        </div>

        </>
    );
}
export default Login
