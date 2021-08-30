import "./singlepost.css"
import { useEffect, useState, useContext } from "react"
import { useLocation } from "react-router"
import axios from "axios"
import { Link } from "react-router-dom"

import { Context } from "../../context/Context"
export default function SinglePost() {
    const location = useLocation()
    const path = location.pathname.split("/")[2]
    const [post,setPost] = useState({})
    const PF = "http://localhost:5000/images/"
    const { user } = useContext(Context)
    const [title,setTitle] = useState("")
    const [desc,setDesc] = useState("")
    const [updateMode,setUpdatedMode] = useState(false) 

    useEffect(()=>{
        const getPost = async () => {
            const res = await axios.get("/posts/"+path)
            setPost(res.data)
        }
        getPost()
    }, [path])

    const handleDelete = async (e) => {
        e.preventDefault()
        try {
            await axios.delete("/posts/" + path, {data:{
                username:user.username
            }})
            window.location.replace("/")
        } catch(err) {

        }
    }

    const handleUpdate = async (e) => {
        e.preventDefault()
        try {
            await axios.put("/posts/" + path, {
                username:user.username,
                title,
                desc
            })
            setUpdatedMode(false)
        } catch(err) {

        }
    }

    return (
        <div className="singlepost">
            <div className="singlePostWrapper">
                {
                    post.photo && <img className="singlePostImg" src={PF + post.photo} alt="" />
                }
               
                {updateMode ? <input className="singlePostTitleInput" type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>:
                (
                    <h1 className="singlePostTitle">
                        {title}
                        {post.username === user?.username && 
                            <div className="singlePostEdit">
                                <i onClick={() => setUpdatedMode(true)} className="singlePostIcon far fa-edit"></i>
                                <i onClick={handleDelete}  className="singlePostIcon far fa-trash-alt"></i>
                            </div>
                        }                     
                    </h1>
                )}
                
                <div className="singlePostInfo">
                    <Link className="link" to={`/?user=${post.username}`}> <span className="singlePostAuthor">Author: <b>{post.username}</b></span> </Link>
                    <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                {updateMode ? <textarea value={desc} onChange={(e) => setDesc(e.target.value)}/>:(
                    <p className="singlePostDesc">{desc}</p>
                )}

                {
                    updateMode && <button onClick={handleUpdate} className="updateButton">Update</button>
                    

                }
                
            </div>
        </div>
    )
}
