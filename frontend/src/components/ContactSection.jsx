import React from "react";
import "../css/contact.css";
import logo1 from "../assets/Logo.png"; 
import { FiPhone } from "react-icons/fi";
import { CiMail, CiTwitter, CiYoutube, CiInstagram,CiLocationOn  } from "react-icons/ci";
import { LuFacebook } from "react-icons/lu";

const ContactSection = () => {
  return (
    <div className="contact">
        

    <div className="contact-section">
      <div className="contact-box">
        <h3 className="title">CONNECT WITH US</h3>
        <p className="info"><FiPhone className="icon1"/> +91 9567843340</p>
        <p className="info"><CiMail className="icon1"/> info@deepnetsoft.com</p>
      </div>

      <div className="logo-container">
        <img src={logo1} alt="Deep Net Soft" className="logo" />
        <h2 className="company-name">
          DEEP <span>NET</span> SOFT
        </h2>
        <div className="icons">
          <LuFacebook/>
          <CiTwitter/>
          <CiYoutube/>
          <CiInstagram/>
        </div>
      </div>

      <div className="contact-box2">
        <h3 className="title">FIND US</h3>
        <p className="info"><CiLocationOn className="icon1"/> First floor, Geo Infopark,<br/>Infopark EXPY, Kakkanad</p>
      </div>
    </div>
    </div>
  );
};

export default ContactSection;
