import { Link } from "react-router-dom"
import "./register.css"
import { useState } from "react"
import axios from "axios"

export default function Register() {
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [err,setErr] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErr(false)
        try {
            
            const res = await axios.post("/auth/register",{
                username:username,
                email:email,
                password:password,
            })
            res.data && window.location.replace("/login")
        } catch(err) {
            setErr(true)
        }
        
    }
    return (
        <div className="register">
            
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input onChange={e=>{setUsername(e.target.value)}} type="text" placeholder="Enter your username..."/>
                <label>Email</label>
                <input onChange={e=>{setEmail(e.target.value)}} type="text" placeholder="Enter your email..."/>
                <label>Password</label>
                <input onChange={e=>{setPassword(e.target.value)}} type="password" placeholder="Enter your password..."/>
                <button type="submit" className="registerSubmit">Register</button>
            </form>
            <button className="registerLoginButton">
                <Link className="link" to="/login">Login</Link>
            </button>
            {err && <span>Something went wrong!</span>}
        </div>
    )
}