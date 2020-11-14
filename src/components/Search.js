import React from "react";


const searchBar = (props) => {

    return (
        <form className="form-group search-widget">
            <div className="input-group mb-3">
                <input 
                    onChange={props.handleInputChange}
                    value={props.search}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    id="search"
                    />
            </div>
        </form>
    );
}

export default searchBar;