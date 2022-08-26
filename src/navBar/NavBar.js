

import React from 'react';
import { NavLink } from "react-router-dom";

import { useNavigate } from 'react-router-dom'
import "../navBar/NavBar.css"

function NavBar() {
    const navLinkStyle = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : "normal",

        }
    }

    const navigate = useNavigate()

    const auth = localStorage.getItem("user");




    const LogOut = () => {
        alert("LOGOUT SUCCESSFUL")
        localStorage.clear();
        navigate("/login")

    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-white shadow-sm  ">
                <div className="container-fluid  tex-danger  ">
                    <NavLink className="navbar-brand" to="#" style={{ color: 'white' }}>
                        <img src='https://static.wixstatic.com/media/3af375_461c53c8b3f547d4bd01262f67fb4e3a.png/v1/fill/w_300,h_324,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3af375_461c53c8b3f547d4bd01262f67fb4e3a.png' id="styleLogo" alt="logo" height={40} width={80} />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav ms-auto">
                            {

                                !(auth) ?
                                    <>
                                        <li className="nav-item">
                                            <NavLink style={navLinkStyle} className="nav-link active hove" aria-current="page" to="/login">Login</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink style={navLinkStyle} className="nav-link active hove " aria-current="page" to="/register">Register</NavLink>
                                        </li>
                                    </>

                                    :
                                    <>

                                        <li className="nav-item" >
                                            <NavLink style={navLinkStyle} className="nav-link active hove  fw-bold  styleText" aria-current="page" to="/">Home</NavLink>
                                        </li>

                                        <li className="nav-item" >
                                            <NavLink style={navLinkStyle} className="nav-link active hove fw-bold  styleText" aria-current="page" to="/Service">Service</NavLink>
                                        </li>

                                        <li className="nav-item" >
                                            <NavLink style={navLinkStyle} className="nav-link active hove fw-bold styleText" aria-current="page" to="/About">About</NavLink>
                                        </li>

                                        <li className="nav-item" >
                                            <NavLink style={navLinkStyle} className="nav-link active hove fw-bold styleText" aria-current="page" to="/Contact">Contact</NavLink>
                                        </li>
                                        <li className="nav-item" >
                                            <NavLink style={navLinkStyle} className="nav-link active hove fw-bold styleText" aria-current="page" to="/addCart">Add Cart</NavLink>
                                        </li>










                                        <li className="nav-item">
                                            <NavLink style={navLinkStyle} className="nav-link active hove   fw-bold   styleText" onClick={() => LogOut()} aria-current="page" to="/LogOut">LogOut</NavLink>
                                        </li>
                                    </>




                            }




                        </ul>
                        <form className="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-danger" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav >










        </div >













    );
}

export default NavBar;