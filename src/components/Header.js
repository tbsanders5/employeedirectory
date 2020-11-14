import React from "react";
import "../styles/header.css"

function Header() {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid" id="jumbo">
                <section className="container">
                    <h1 className="display-6"><i className="fas fa-user-friends"><b>Company Directory</b></i></h1>
                    <p className="lead">Search by employees first or last name or select a column.</p>
                </section>
            </div>
        </div>
    );
}

export default Header;