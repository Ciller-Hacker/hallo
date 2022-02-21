import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

import { Link } from "react-router-dom"

import '../pages/About.css'

// loading
import Loading from '../assets/img/VAyR.gif' 

//img
import PrevIcon from '../assets/img/left-arrow.png'

export default function About() {
    const {userId} = useParams()
    const [loading, SetLoading] = useState(true)
    const [posts, setPost] = useState([])
    const navigate = useNavigate()

            useEffect(() => {
                fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
                .then((res) => res.json())
                .then((data) => 
                setPost(data),
                SetLoading(false))
                .catch((err) => console.log(err))
            }, [])


            if (isNaN(Number(userId))) {
                navigate(-1)
            }

            function clickBtn() {
                navigate(-1)
            }

    return(
        <>
         {loading && <img className="loading-img" src={Loading} alt='loading gif' width='45px' height='45px' />}
        <button className="prev-btn" onClick={clickBtn}>назад
        <img className="prev-img" src={PrevIcon} alt="prev img" width='15px' height='15px' /></button>
        <div className="wrapper">
        <h1 className="post-title">
            {posts.title}
        </h1>

        <Link className="link" to={`/posts/${posts.id}`}>{posts.body}</Link>
        </div>
        </>
    )
}