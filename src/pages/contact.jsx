import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

// css
import '../pages/contact.css'

//img
import PrevIcon from '../assets/img/left-arrow.png'

export default function Contant () {
    const {postId} = useParams()
    const navigate = useNavigate()

    const [comment, setComment] = useState([])

            useEffect(() => {
                fetch(`https://jsonplaceholder.typicode.com/comments/${postId}`)
                .then((res) => res.json())
                .then((data) => setComment(data))
                .catch((err) => console.log(err))
            }, [])

            if (isNaN(Number(postId))) {
                navigate(-1)
            }

            function clickBtn() {
                navigate(-1)
            }

    return (
        <>
        <button className="prev-btn" onClick={clickBtn}>
            назад
            <img className="prev-img" src={PrevIcon} alt="prev img" width='15px' height='15px' />
        </button>
        <div className="wrappers">
        <h3 className="title">
            {comment.name}
        </h3>

        <p className="text">
            {comment.body}
        </p>
        </div>
        </>
    )
}