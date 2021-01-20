import React, { useState } from 'react';

const StatusOfTransaction = () => {
    const [transaction, setTransaction] = useState('');
    const handleBlur = e =>{
        setTransaction({
            ...transaction,
            [e.target.name]: e.target.value
        });
    };
    return (
        <div className="d-flex justify-content-center">
            <div className="col-6">
                <div className="row">
                    <div className="col">
                    <h4>Status of Transaction</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div class="custom-control custom-checkbox my-3">
                            <input onChange={handleBlur} type="checkbox" name="Quote" class="custom-control-input" value="Quote" id="Quote"/>
                            <label class="custom-control-label" for="Quote">Quote</label>
                        </div>
                        <div class="custom-control custom-checkbox my-3">
                            <input onChange={handleBlur} type="checkbox" name="Cancel" class="custom-control-input" value="Cancel" id="Cancel"/>
                            <label class="custom-control-label" for="Cancel">Cancel</label>
                        </div>
                    </div>
                    <div className="col-4">
                        <div class="custom-control custom-checkbox my-3">
                            <input onChange={handleBlur} type="checkbox" name="Bound" class="custom-control-input" value="Bound" id="Bound"/>
                            <label class="custom-control-label" for="Bound">Bound</label>
                        </div>
                        <div class="custom-control custom-checkbox my-3">
                            <input onChange={handleBlur} type="checkbox" name="Issue Policy" class="custom-control-input" value="Issue Policy" id="Issue Policy"/>
                            <label class="custom-control-label" for="Issue Policy">Issue Policy</label>
                        </div>
                    </div>
                    <div className="col-4">
                        <div class="custom-control custom-checkbox my-3">
                            <input onChange={handleBlur} type="checkbox" name="Change" class="custom-control-input" value="Change" id="Change"/>
                            <label class="custom-control-label" for="Change">Change</label>
                        </div>
                        <div class="custom-control custom-checkbox my-3">
                            <input onChange={handleBlur} type="checkbox" name="Renew" class="custom-control-input" value="Renew" id="Renew"/>
                            <label class="custom-control-label" for="Renew">Renew</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                <div className="col-md-6 ">
                            <label style={{fontSize: "1rem", fontWeight: "500"}} htmlFor="phone">Date</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                class="form-control text-primary mb-2 py-3 bg-light"
                                onChange={handleBlur}
                            />
                        </div>
                        <div className="col-md-6">
                        <label style={{fontSize: "1rem", fontWeight: "500"}} htmlFor="time">Time</label>
                            <input
                                type="Time"
                                id="time"
                                name="time"
                                class="form-control text-primary mb-2 py-3 bg-light"
                                onChange={handleBlur}
                            />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatusOfTransaction;