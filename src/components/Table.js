import React from "react";
import API from "../utils/api";


class Table extends React.Component {

    state = {
        order: "",
        results: [],
        search: ""
    }

    componentDidMount() {
        API.ApiSearch()
        .then(res => {
            this.setState({ results: res.data.results })
            console.log(this.state.results)
        }).catch(err => console.log(err))
    }
}

export default Table;