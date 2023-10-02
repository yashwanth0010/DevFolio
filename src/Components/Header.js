import React, { Component } from 'react';
import '../Assets/css/Header.css';


function Header() {


    const scrollTo = (ele) =>{
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
            <li onClick={()=>{scrollTo('hero')}}><a className="nav-link scrollto active">Home</a></li>
            <li><a className="nav-link scrollto" href="#about">About</a></li>
            <li><a className="nav-link scrollto" href="#services">Services</a></li>
            <li><a className="nav-link scrollto " href="#work">Work</a></li>
            <li><a className="nav-link scrollto " href="#blog">Blog</a></li>
            <li onClick={ ()=>{ scrollTo('projects') }}><a className="nav-link scrollto ">Projects </a></li>
            <li onClick={ ()=>{ scrollTo('contact') }}><a className="nav-link scrollto" >Contact</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
    </>
    );
}

export default Header;