import { useParams,useNavigate} from "react-router-dom"
import "../assets/css/componentes/card.css"
import { useState,useEffect } from "react"
import { Buscar } from "../API/api"


const Post = ({url}) => {
 
    const [post, setPost] = useState({})

    const {id}= useParams()

    const navegar = useNavigate()

    useEffect(()=>{
        Buscar(`/posts/${id}`,setPost).catch(()=>{
            navegar("/not-found")
        })
    }, [id])

    return(
   <main className = "container flex flex--center">
     <article className = "card post">
       <h2 className = "post-card__title">{post.title}</h2>
       <p className = "text__card">{post.body}</p>
     </article>
   </main>
 )
}

export default Post