import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import Aos from 'aos';


import '../pages/home.css'

export default function Home() {
    Aos.init()

    const [user, SetUser] = useState([])
    const [loading, SetLoading] = useState(true)
    const [err, SetErr] = useState(false)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => {
            SetUser(data)
            SetLoading(false)
        })
        .catch((err) => {
            SetErr(err)
            SetLoading(false)
        })            

    }, [])


    useEffect(() => {
        return () => {
            document.body.style.backgroundColor = '#fff'
        }
    }, [])

    return(
        <>
        <br />
        {err && <strong>Error!</strong>}

        {user.length > 0 && (
            <ul className="list">
            {user.map((user) => (
                <li key={user.id} className='items'>
                    <Link className="items-link" to={`/post/${user.id}`}>{user.name}</Link>
                    <Link className="email-link" to='/'>{user.email}</Link>
                    <Link className="phone-link" to='/'>{user.phone}</Link>
                    <p className="text">
                        {user.company.catchPhrase}
                    </p>
                    <Link className="website-link" to='/'>{user.website}</Link>
                </li>
            ))}
            </ul>
        )}
        </>
    )
}