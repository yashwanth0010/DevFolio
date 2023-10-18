import React, { Component } from "react";
function EducationCard(props) {
  return (
    <>
      <div className="col-sm-4 col-lg-4" key={props.id}>
        <div className="counter-box pt-4 pt-md-0">
          <div className="counter-ico">
            <span className="ico-circle">
              <img src={props.img} alt="school"/>
            </span>
          </div>
          <div className="counter-num">
            <div className="edu">
              {props.edu}
            </div> 
            <div  style={{fontSize:"1.29rem" , fontWeight:"799"}}> {props.inst} </div>
            <div className="counter-text">{props.branch}</div>
            <span className="counter-text"> GPA : {props.cgpa}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default EducationCard;
