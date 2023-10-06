import React, { Component } from "react";
function EducationCard(props) {
  return (
    <>
      <div class="col-sm-4 col-lg-4">
        <div class="counter-box pt-4 pt-md-0">
          <div class="counter-ico">
            <span class="ico-circle">
              <img src={props.img} alt="school"/>
            </span>
          </div>
          <div class="counter-num">
            <div className="edu">
              {props.edu}
            </div> 
            <div  style={{fontSize:"1.29rem" , fontWeight:"799"}}> {props.inst} </div>
            <div class="counter-text">{props.branch}</div>
            <span class="counter-text"> GPA : {props.cgpa}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default EducationCard;
