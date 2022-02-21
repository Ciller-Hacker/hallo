import React from 'react'
import { Routes, Route } from 'react-router-dom'

//components


//pages
import Home from './pages/home'
import About from './pages/about'
import Contant from './pages/contact'

export default function App() {
    
    return(
        <>
        <Routes>
            <Route path='/' element={ <Home />} />
            <Route path='/post/:userId' element={ <About />} />
            <Route path='/posts/:postId' element={ <Contant />} />
        </Routes>
        </>
    )
}