import React, {
  Component,
  useContext,
  useEffect,
  useRef,
  useState,
  useMemo,
} from "react";
import "../Assets/css/Header.css";

function Header() {
  const scrollTo = (ele, cname) => {
    document
      .getElementById(ele)
      ?.scrollIntoView({ block: "start", behavior: "smooth" });
    var act = document.querySelectorAll(".active");
    for (var i = 0; i < act.length; i++) {
      act[i].className = "nav-link scrollto";
    }
    document.getElementById(cname).className = "nav-link scrollto active";
  };

  return (
    <>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <a href="">Portfolio</a>
          </h1>

          <nav id="navbar" className="navbar">
            <ul>
              <li
                onClick={() => {
                  scrollTo("hero", "hhero");
                }}
              >
                <a className="nav-link scrollto active" id="hhero">
                  Home
                </a>
              </li>
              <li
                onClick={() => {
                  scrollTo("about", "habout");
                }}
              >
                <a className="nav-link scrollto" id="habout">
                  About
                </a>
              </li>
              <li
                onClick={() => {
                  scrollTo("education", "heducation");
                }}
              >
                <a className="nav-link scrollto" id="heducation">
                  Education
                </a>
              </li>
              <li
                onClick={() => {
                  scrollTo("projects", "hprojects");
                }}
              >
                <a className="nav-link scrollto " id="hprojects">
                  Projects{" "}
                </a>
              </li>
              <li
                onClick={() => {
                  scrollTo("achievements", "hachievements");
                }}
              >
                <a className="nav-link scrollto" id="hachievements">
                  Achievements
                </a>
              </li>
              <li
                onClick={() => {
                  scrollTo("contact", "hcontact");
                }}
              >
                <a className="nav-link scrollto" id="hcontact">
                  Contact
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
