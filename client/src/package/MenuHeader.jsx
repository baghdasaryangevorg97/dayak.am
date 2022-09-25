import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from "react-router-dom";
    
const MenuHeader = function (props) {
    const {setIsAuth} = props;
    // const logout = () => {
	// 	localStorage.removeItem('authUser')
	// 	localStorage.removeItem('auth')
	// 	window.location.href = '/signin'
	// }

    return (
        <div className="menu-header">
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top menu-background" id="mainNav">
                <div className="container">
                    <a className="navbar-brand" href="#page-top"><img src="assets/img/navbar-logo.svg" alt="..." /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars ms-1" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                            <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
                            <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
                            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                            <li className="nav-item"><a className="nav-link" href="#team">Team</a></li>
                            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                            {/* <li className="nav-item"><a className="nav-link" href="#contact"><button type='button' onClick={()=>logout}>Logout</button></a></li> */}
                        </ul>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                            <li className="nav-item"><Link className="nav-link" to="/signin">Login</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/signup">Sign-up</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );

}
export default MenuHeader;