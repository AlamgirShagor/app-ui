import React from 'react';
import HeaderLeft from './HeaderLeft';
import SearchBar from './SearchBar';

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="col-8">
                        <SearchBar/>
                    </div>
                    <div className="col-4">
                        <HeaderLeft/>
                    </div>
                </div>
            </div> 
        </nav>
    );
};

export default Header;