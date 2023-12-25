import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer id="footer">
            <div id="footer-widgets" class="container style-1">
               <div class="row">
                  <div class="col-md-4">
                     <div class="widget widget_text">
                       
                        <div class="textwidget">
                           <a href="index1.html" class="footer-logo"> <img src="assets/images/Finance_logo.png" alt="Awesome Logo"/> </a>

                        </div>
                     </div>
                  </div>
                  <div class="col-md-4">
                     <div class="widget widget_links">
                        <h2 class="widget-title"><span>COMPANY LINKS</span></h2>
                        <ul class="wprt-links clearfix col2">
                           <li><Link to="/">Home</Link></li>
                           <li><Link to="/presale">PreSale</Link></li>
                           <li><Link to="/about">About Us</Link></li>
                           <li><Link to="/contact">Contact-Us</Link></li>
                           <li> <Link to="/team">Team</Link></li>

                          
                          
                        </ul>
                     </div>
                  </div>
                  <div class="col-md-4">
                     <div class="widget widget_information">
                        <h2 class="widget-title"><span>SOCIALS LINKS</span></h2>
                       
                     </div>
                     <div class="widget widget_socials">
                        <div class="socials">
                           <a target="_blank" href="#"><i class="fa fa-twitter"></i></a>
                           <a target="_blank" href="#"><i class="fa fa-facebook"></i></a>
                           <a target="_blank" href="#"><i class="fa fa-google-plus"></i></a>
                           <a target="_blank" href="#"><i class="fa fa-pinterest"></i></a>
                           <a target="_blank" href="#"><i class="fa fa-dribbble"></i></a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            
         </footer>
  )
}

export default Footer