import "./sidebar.css"
import { useEffect, useState } from "react"
import { useLocation } from "react-router"
import axios from "axios"
import { Link } from "react-router-dom"
export default function Sidebar() {
    const [cats,setCats] = useState([])

    useEffect(() => {
        const getCats = async() => {
            const res = await axios.get("/categories")
            setCats(res.data)
        }
        getCats() 
    },[])
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="data:image/png;base64,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" alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi nihil, dignissimos repellat eaque cum dolores perspiciatis ratione rem temporibus sunt voluptate! Tempore culpa itaque deserunt mollitia. Accusamus itaque nulla voluptatem!</p>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {
                        cats.map((cat)=>(
                        <Link className="link" to={`/?cat=${cat.name}`}> <li className="sidebarListItem">{cat.name}</li>  </Link> 
                        ))
                    }                
                </ul>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}
