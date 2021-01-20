import React from 'react';

const ProgressBar = () => {
    return (
        <div class="progress my-4">
            <div class="progress-bar" role="progressbar" style={{width: "15%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    );
};

export default ProgressBar;