import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Pagination = () => {
    const faArrowLeft ={ float: "left", margin: ".2rem", color: "#95979A",  height: "1.5rem", width: "1.5rem" }
    return (
        <div className="row d-flex justify-content-end">
            <nav aria-label="Page navigation example ">
            <ul class="pagination ">
                <li class="page-item  m-5">
                <Router>
                    <Link to="/">
                        <span style={{fontSize: "50px"}} aria-hidden="true">&laquo;</span>
                    </Link>
                </Router>
                </li>
                <li class="page-item m-5" >
                <Router>
                    <Link to="/">
                    <span style={{fontSize: "50px"}}   aria-hidden="true">&raquo;</span>
                    </Link>
                </Router>
                </li>
            </ul>
            </nav>
        </div>
    );
};

export default Pagination;