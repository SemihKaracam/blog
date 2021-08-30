import "./topbar.css" 
import {Link} from "react-router-dom"
import { Context } from "../../context/Context"
import { useContext } from "react"
export default function Topbar() {
    const { user, dispatch } = useContext(Context)
    const handleLogout = () => {
        dispatch({type:"LOGOUT"})
    }
    return (
        <div className = "top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="toplistItem">
                        <Link className="link" to="/">HOME</Link>
                    </li>
                    <li className="toplistItem"><Link className="link" to="/">ABOUT</Link></li>
                    <li className="toplistItem"><Link className="link" to="/">CONTACT</Link></li>
                    <li className="toplistItem"><Link className="link" to="/write">WRITE</Link></li>
                    <li className="toplistItem" onClick={handleLogout}>
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>

            <div className="topRight">
                 
                {user ? (<Link to="/settings">
                        
                            <img className="topImg" src="https://img01.imgsinemalar.com/images/karakter_buyuk/42/Tyler-Durden-18.jpg" alt="" />
                        
                    </Link>):
                    (
                        <ul className="topList">
                        <li className="toplistItem">
                            <Link className="link" to="/login">LOGIN</Link>
                        </li>
                        <li className="toplistItem">
                            <Link className="link" to="/register">REGISTER</Link>
                        </li>
                        </ul>
                    )
                }
                
                <i class="topSearchIcon fas fa-search"></i>
            </div>

        </div>
    )
}

