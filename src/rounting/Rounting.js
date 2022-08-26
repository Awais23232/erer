import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import About from '../pages/about/About';
import Home from '../pages/home/Home';
import Contact from '../pages/contact/Contact';
import Service from '../pages/service/Service';
import NavBar from '../navBar/NavBar';
import PrivateRounting from './PrivateRounting';
import Login from '../auth/login/Login';
import Register from '../auth/register/Register';
import LogOut from '../auth/logOut/LogOut';
import AddToCart from '../pages/addToCart/AddToCart';

function Rounting() {

    return (
        <BrowserRouter>
            <NavBar />


            <Routes>

                <Route element={
                    <PrivateRounting />}>

                    <Route
                        path="/"
                        element={
                            <Home />

                        }
                    />

                    <Route
                        path="/Service"
                        element={
                            <Service />

                        }
                    />
                    <Route
                        path="/About"
                        element={
                            <About />

                        }
                    />
                    <Route
                        path="/Contact"
                        element={
                            <Contact />

                        }
                    />
                    <Route
                        path="/addCart"
                        element={
                            <AddToCart />

                        }
                    />
                    <Route
                  
      path="/logOut"
                        element={
                            <LogOut />

                        }
                    />



                </Route>


                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />





            </Routes>


        </BrowserRouter>
    )
}
export default Rounting