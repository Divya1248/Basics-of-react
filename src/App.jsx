import React from 'react'
import FoodPage from './Component/FoodDelivery/FoodPage'
import Navbar from './Component/Navbar'
import Signup from './Component/Signup'
import About from './Pages/AboutUs/About'
import Slider from './Pages/Slider/Slider'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
    return (
        <div>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="" element={<Signup/>}/>
                </Routes>
           </Router>
        </div>
    )
}

export default App
