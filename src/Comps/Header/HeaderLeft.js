import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faGlobe, faCog } from '@fortawesome/free-solid-svg-icons'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
const HeaderLeft = () => {
    const iconStyle ={ float: "left", margin: ".2rem", color: "#95979A",  height: "1.5rem", width: "1.5rem" }
    const BarStyling = {width:"60%",background:"#fff", outline: "0", border:"2px solid #D8D9D9", padding:".5rem", borderRadius:'10rem'};
    const infoStyling = {width:"100%",background:"#fff", outline: "0", border:"2px solid #D8D9D9", padding:".5rem", borderRadius:'10rem'};
    return (
        <div className="row">
            <div className="col-md-5 my-1">
                <div class="dropdown" >
                <button style={BarStyling} class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <FontAwesomeIcon style={iconStyle} icon={faGlobe} />
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <span>comeing soon</span>
                </div>
                </div>
            </div>
            <div className="col-md-6 my-1">
                <div className="d-flex"  style={infoStyling}>
                    <div className="col">
                        <h6 className="mt-1">Name</h6>
                    </div>
                    <div className="col">
                        <FontAwesomeIcon style={iconStyle} className="text-primary" icon={faUser} />
                    </div>
                </div>
            </div>
            <div className="col-md-1 my-1 mr-auto py-2">
            <Router>
                <Link to="/">
                    <FontAwesomeIcon style={iconStyle} icon={faCog} />
                </Link>
            </Router>
                
                
            </div>
        </div>
    );
};

export default HeaderLeft;