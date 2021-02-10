import React from 'react';
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
        <div id="footer">
                <div className="footer_text">
                    
                <Link to="" target="blank">About</Link>
                    <Link to="" target="blank">Contact</Link>  
                    <Link to="" target="blank">Privacy</Link> 
                        <Link to="" target="blank">Terms</Link>
                        
                </div>
                <div className="social_icon">
                    <h2 className="">Follow us</h2>
                    <Link to="" target="blank"><i className="fa fa-facebook" aria-hidden="true"></i></Link> 
                    <Link to="" target="blank"><i className="fa fa-twitter" aria-hidden="true"></i></Link>  
                    <Link to="" target="blank"><i className="fa fa-github" aria-hidden="true"></i></Link> 
                    <Link to="" target="blank"><i className="fa fa-youtube-play" aria-hidden="true"></i></Link>
                </div>
                	<div className="newsletter">
		<h2>Subscribe to our Newsletter</h2>
	<div className="input-group">
         <input type="email" className="form-control" placeholder="Enter your email" />
         <span className="input-group-btn">
         <button className="btn_subscribe" type="submit">Subscribe</button>
         </span>
          </div>
	</div>
                
            </div>
            <div className="credit">
                    <h6>❤ Made by pawan singh</h6>
        </div>
           
            </footer>
    )
}

export default Footer;
