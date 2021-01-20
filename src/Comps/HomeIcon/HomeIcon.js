import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faEnvelope, faGlobe, faShoppingCart, faBoxOpen } from '@fortawesome/free-solid-svg-icons'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const HomeIcon = () => {
    const iconStyle ={ float: "left", margin: ".2rem", color: "#95979A",  height: "1.5rem", width: "1.5rem", margin: "0 15px"}
    const BarStyling = {width:"360px",background:"#fff", border:"2px solid #D8D9D9", height: "45px", padding:".5rem", borderRadius:'10rem'};
    return (
        <div className="d-flex justify-content-center">
            <div style={BarStyling} className="d-flex mb-5">
            <Router>
                <Link to="/">
                    <FontAwesomeIcon style={iconStyle} icon={faGlobe} />
                </Link>
            </Router>
            <Router>
                <Link to="/">
                    <FontAwesomeIcon style={iconStyle} icon={faEnvelope} />
                </Link>
            </Router>
            <Router>
                <Link to="/">
                    <FontAwesomeIcon style={{fontSize: "63px", padding: "10px", background: "#fff", margin: "30px",  marginTop: "-20px",  border: "1px solid #DEDEDE", borderRadius: '50%', color: "#74BEEE"}} icon={faHome} />
                </Link>
            </Router>
            <Router>
                <Link to="/">
                    <FontAwesomeIcon style={iconStyle} icon={faShoppingCart} />
                </Link>
            </Router>
            <Router>
                <Link to="/">
                    <FontAwesomeIcon style={iconStyle} icon={faBoxOpen} />
                </Link>
            </Router>
                 
            </div>
        </div>
    );
};

export default HomeIcon;