import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSearch, faMicrophone } from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {
    const [search, setSearch] = useState('')
    const BarStyling = {width:"100%",background:"#fff", border:"2px solid #D8D9D9", padding:".5rem", borderRadius:'10rem'};
    const inputStyle = {border: "0", width:"100%", outline: "0", background: "none"};
    const buttonStyle = {border: "none", background: "none", outline: "0"}
    const iconStyle ={ float: "left", margin: ".2rem", color: "#95979A",  height: "1.5rem", width: "1.5rem", display: "flex", justifyContent: "center", alignItems: "center" }
    return (
        <div>
            <div style={BarStyling} className="d-flex">
                <FontAwesomeIcon style={iconStyle} icon={faSearch} />
                <input 
                style={inputStyle}
                key="random1"
                value={search}
                placeholder={"Search"}
                onChange={(e) => setSearch(e.target.value)}
                />
                 <button style={buttonStyle}>
                    <FontAwesomeIcon style={iconStyle} className="border-left ml-2" icon={faMicrophone} />
                 </button>
            </div>
        </div>
    );
};

export default SearchBar;