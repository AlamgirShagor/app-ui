import React, { useState } from 'react';
import img from './img.jpg'

const userData = [{
    id:"1213654",
    author:"Aaron Fisher",
    url: "https://unsplash.com/photos/yC-Yzbqy7PY"
}]
const FormContent = () => {
    const [info, setInfo] = useState('');
    const handleBlur = e =>{
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        });
    };
    return (
        <form className="my-4">
            <div class="row">
                <div className="col-md-6">
                    <div className="border p-4 m-2 rounded">
                    <div className="row mb-4">
                        <div className="col d-flex align-items-center">
                            <img style={{width: "100px", height : "100px", borderRadius: "50%"}} src={img} alt=""/>
                            <div className="ml-3">
                            <h3>{userData[0].author}</h3>
                            <h6 style={{color: "#CECECE"}}>ID {userData[0].id}</h6>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 ">
                            <label style={{fontSize: "1rem", fontWeight: "500"}} htmlFor="phone">Phone</label>
                            <input
                                type="text"
                                id="phone"
                                name="Phone"
                                class="form-control text-primary mb-2 py-3 bg-light"
                                onChange={handleBlur}
                            />

                            <label style={{fontSize: "1rem", fontWeight: "500"}} htmlFor="code">Code</label>
                            <input
                                type="text"
                                id="code"
                                name="Code"
                                class="form-control text-primary mb-2 py-3 bg-light"
                                onChange={handleBlur}
                            />
                        </div>
                        <div className="col-md-6">
                        <label style={{fontSize: "1rem", fontWeight: "500"}} htmlFor="fax">Fax</label>
                            <input
                                type="text"
                                id="fax"
                                name="Fax"
                                class="form-control text-primary mb-2 py-3 bg-light"
                                onChange={handleBlur}
                            />

                            <label style={{fontSize: "1rem", fontWeight: "500"}} htmlFor="sub-code">Sub Code</label>
                            <input
                                type="text"
                                id="sub-code"
                                name="Sub Code"
                                class="form-control text-primary mb-2 py-3 bg-light"
                                onChange={handleBlur}
                            />
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="row border p-4 m-2 rounded">
                        <div className="col-12">
                            <label style={{fontSize: "1rem", fontWeight: "500"}} htmlFor="Carrier">Carrier</label>
                            <input
                                type="text"
                                id="Carrier"
                                name="Carrier"
                                class="form-control text-primary mb-2 py-3 bg-light"
                                onChange={handleBlur}
                            />
                        </div>
                        <div className="col-md-6 ">
                            <label style={{fontSize: "1rem", fontWeight: "500"}} htmlFor="Company Name">Company Name</label>
                            <input
                                type="text"
                                id="Company Name"
                                name="Company Name"
                                class="form-control text-primary mb-2 py-3 bg-light"
                                onChange={handleBlur}
                            />

                            <label style={{fontSize: "1rem", fontWeight: "500"}} htmlFor="NAIC Code">NAIC Code</label>
                            <input
                                type="text"
                                id="NAIC Code"
                                name="NAIC Code"
                                class="form-control text-primary mb-2 py-3 bg-light"
                                onChange={handleBlur}
                            />

                            <label style={{fontSize: "1rem", fontWeight: "500"}} htmlFor="Underwriter">Underwriter</label>
                            <input
                                type="text"
                                id="Underwriter"
                                name="Underwriter"
                                class="form-control text-primary mb-2 py-3 bg-light"
                                onChange={handleBlur}
                            />
                        </div>
                        <div className="col-md-6">
                        <label style={{fontSize: "1rem", fontWeight: "500"}} htmlFor="Company Number">Company Number</label>
                            <input
                                type="text"
                                id="Company Number"
                                name="Company Number"
                                class="form-control text-primary mb-2 py-3 bg-light"
                                
                                onChange={handleBlur}
                            />

                            <label style={{fontSize: "1rem", fontWeight: "500"}} htmlFor="Program-code">Program Code</label>
                            <input
                                type="text"
                                id="Program-code"
                                name="Program Code"
                                class="form-control text-primary mb-2 py-3 bg-light"
                                onChange={handleBlur}
                            />

                            <label style={{fontSize: "1rem", fontWeight: "500"}} htmlFor="Underwiter_Offiec">Underwriter office</label>
                            <input
                                type="text"
                                id="Underwiter_Offiec"
                                name="Underwriter office"
                                class="form-control text-primary mb-2 py-3 bg-light"
                                onChange={handleBlur}
                            />
                        </div>

                    </div>
                </div>
            </div>
        </form>
    );
};

export default FormContent;