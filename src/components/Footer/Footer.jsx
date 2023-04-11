import React from "react";
import './Footer.css'
import Github from '../../assets/github.png'
import Intagram from '../../assets/instagram.png'
import Linkedin from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'


function Footer () {
    return(
        <div className="Footer-container">
            <hr/>
            <div className="footer">
                <div className="social-links">
                    <img src={Github}  alt="" />
                    <img src={Linkedin} alt="" />
                    <img src={Intagram} alt="" />
                </div>
                <div className="log-f">
                    <img src={Logo} alt="" />
                </div>
            </div>

            <div className="blur blur-f-1"></div>
            <div className="blur blur-f-2"></div>
        </div>
    )
}

export {Footer}