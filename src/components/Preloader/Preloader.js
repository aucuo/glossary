import React from 'react';
import './preloader.css'
import preloaderIcon from "./Circles-menu-3.gif";

function Preloader() {
    return (
        <div id="preloader">
            <img src={preloaderIcon} alt="Preloader"></img>
        </div>
    )
}

export default Preloader