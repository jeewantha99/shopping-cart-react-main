

import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

export const Footer = () => {
  return (
    <div class="footer">
     <div class="footer_link">
     <h4>Links</h4>
     <Link to="/"> Shop </Link>
     <Link to="/"> Contact us </Link>
     </div>

     <div class="footer_contact">
     <h5>optimize@gmail.com</h5>
     <h5>0778208747</h5>
     <div class="footer_social">
        <a  href="#">
           <div  class="facebook"></div>
        </a>
        <a href="">
        <div  class="whatsapp"></div>
        </a>
        <a href="">
        <div  class="twitter"></div>
        </a>
        <a href="">
        <div  class="instagram"></div>
        </a>
        <a href="">
        <div  class="youtube"></div>
        </a>
     </div>

     </div>
</div>
  );
};
