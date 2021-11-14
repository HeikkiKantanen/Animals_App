import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <ul className="link-wrapper">
                    <li><NavLink to="/" exact>Home</NavLink></li>
                    <li><NavLink to="/About">About</NavLink></li>
                    <li><NavLink to="/Main">Animals</NavLink></li>
            </ul>
        </>

    );
};

export default Navigation;