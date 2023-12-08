import React from "react";
import footer_logo from '../Asset/images/1tan_logo.jpg';
import instagram_icon from '../Asset/images/instagram_icon.png'
import whatsapp_icon from '../Asset/images/whatsapp_icon.png'
import './Footer.css'

const Footer =() =>{
    return(
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
            </div>
            <div>
                <ul className="footer-links">
                    <li>Company</li>
                    <li>Products</li>
                    <li>offices</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className="footer-social-icon">
                    <div className="footer-icons-container">
                        <img src={instagram_icon} alt="" />
                    </div>
                    <div className="footer-icons-container">
                        <img src={whatsapp_icon} alt="" />
                    </div>
                </div>
            </div>
            <div>
                <div className="footer-copright">
                    <hr />
                    <p>Copyright @2023 - All Right Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;