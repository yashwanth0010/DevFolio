import React, { Component } from 'react';
import "../Assets/css/Error.css";
import error from "../Assets/img/error.gif";
import { Link } from 'react-router-dom';
function Error404() {
    return (  
        <>
        <div class="Errorcontainer"  style={{marginTop:'100px'}}>
    <div class="row">
        <div>
            <div >
                <div class="errorContainer">
                    <img class="img-error" src={error} alt='Error'/>
                    <h2>404 Not Found</h2>
                    <p>Sorry, an error has occured, Requested page not found!</p>
                    <div class="error-actions">
                        <Link to='/'>
                        <a  class="btn btn-primary btn-lg">
                            <span class="glyphicon glyphicon-arrow-left"></span>
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