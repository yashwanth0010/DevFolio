import React, { Component } from 'react';
import '../Assets/css/Hero.css';
import BackImg from "../Assets/img/hero-bg.jpg"
import {Typewriter, Cursor} from 'react-simple-typewriter'

function Hero() {

    const data_items = Typewriter({
      words:['Developer', 'ML Engineer', 'Freelancer'],
      loop:{},
      typeSpeed:120,
      deleteSpeed:100,
    });
  


    return ( 
    <>
         <div id="hero" className="hero route bg-image"  style={{ 
      backgroundImage: `url(${BackImg})`  
    }}>
    <div className="overlay-itro"></div>
    <div className="hero-content display-table">
      <div className="table-cell">
        <div className="container">
          <h1 className="hero-title mb-4">I am Yashwanth Kumar</h1>
          <p className="hero-subtitle">
            <span>{data_items}</span>
            <span><Cursor cursorStyle='|' /></span>
          </p>
        </div>
      </div>
    </div>
  </div>
    </> );
}

export default Hero;