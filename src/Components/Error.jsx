import React, { Component } from 'react';
import "../Assets/css/Error.css";
import error from "../Assets/img/error.gif";
import { Link } from 'react-router-dom';
function Error404() {
    return (  
        <>
        <div className="Errorcontainer"  style={{marginTop:'100px'}}>
    <div className="row">
        <div>
            <div >
                <div className="errorContainer">
                    <img className="img-error" src={error} alt='Error'/>
                    <h2>404 Not Found</h2>
                    <p>Sorry, an error has occured, Requested page not found!</p>
                    <div className="error-actions">
                        <Link to='/'>
                        <a  className="btn btn-primary btn-lg">
                            <span className="glyphicon glyphicon-arrow-left"></span>
                            Back To MyPortfolio 
                        </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
        </>
    );
}

export default Error404;