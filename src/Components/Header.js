import React, { Component } from 'react';
import '../Assets/css/Header.css';


function Header() {


    const scrollToContact = (ele) =>{
      document.getElementById(ele)?.scrollIntoView({ behavior: 'smooth' });
    }

    return (  
    <>
          <header id="header" className="fixed-top">
    <div className="container d-flex align-items-center justify-content-between">

      <h1 className="logo"><a href="">Portfolio</a></h1>
      {/*<a href="index.html" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>*/}

      <nav id="navbar" className="navbar">
        <ul>
          <li onClick={()=>{scrollToContact('hero')}}><a className="nav-link scrollto active">Home</a></li>
          <li><a className="nav-link scrollto" href="#about">About</a></li>
          <li><a className="nav-link scrollto" href="#services">Services</a></li>
          <li><a className="nav-link scrollto " href="#work">Work</a></li>
          <li><a className="nav-link scrollto " href="#blog">Blog</a></li>
          <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>
          <li onClick={ ()=>{
            scrollToContact('contact')
          }}><a className="nav-link scrollto" >Contact</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
    </>
    );
}

export default Header;