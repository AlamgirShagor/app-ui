import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import FormContent from '../FormContent/FormContent';
import ProgressBar from '../ProgressBar/ProgressBar';
import StatusOfTransaction from '../StatusOfTransaction/StatusOfTransaction';
import Pagination from '../Pagination/Pagination';
import HomeIcon from '../HomeIcon/HomeIcon';
const InfoFormMin = () => {
    return (
        <div className="container">
            <div className="row d-flex text-primary text-bold ml-3 align-items-center mt-5">
                <Router>
                    <Link to="/">
                        <FontAwesomeIcon style={{fontSize: '1.1rem', marginRight:".3rem"}} icon={faArrowLeft} />
                        <span  style={{fontSize: "1.2rem"}}>BACKTOHOMEPAGE</span>
                    </Link>
                </Router>
            </div>
            <FormContent/>
            <ProgressBar/>
            <StatusOfTransaction/>
            <Pagination/>
            <HomeIcon/>
        </div>
    );
};

export default InfoFormMin;