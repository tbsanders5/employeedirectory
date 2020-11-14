import React from "react";
import API from "../utils/api";
import Search from "./Search";
import DateFormat from "dateformat";
import "../styles/table.css"

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

    handleInputChange = event => {
        if (event.target.name === "search") {
            const searchTerm = event.target.value.toLowerCase();
            this.setState({
                search: searchTerm
            })
        }
    }

    sortByFirstName = () => {
        const sortEmployees = this.state.results.sort((a, b) => {
            if (b.name.first > a.name.first) {
                return -1
            }
            if (a.name.first > b.name.first) {
                return 1
            }
            return 0;
        });

        if (this.state.order === "DESC") {
            sortEmployees.reverse();
            this.setState({ order: "ASC" });
        } else {
            this.setState({ order: "DESC" });
        }
        this.setState({ results: sortEmployees })
    }

    sortByLastName = () => {
        const sortEmployees = this.state.results.sort((a, b) => {
            if (b.name.last > a.name.last) {
                return -1
            }
            if (a.name.last > b.name.last) {
                return 1
            }
            return 0;
        });

        if (this.state.order === "DESC") {
            sortEmployees.reverse();
            this.setState({ order: "ASC" });
        } else {
            this.setState({ order: "DESC" });
        }
        this.setState({ results: sortEmployees })
    }
    
    render() {
        return (
            <div>
                <Search handleInputChange={this.handleInputChange}
                search={this.state.search} />

                <div className="table-responsive">
                    <table className="table text-center table-center table-hover table-responsive">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>First Name <span className="fas fa-caret-square-down" onClick={this.sortByFirstName}></span></th>
                                <th>Last Name <span className="fas fa-caret-square-down" onClick={this.sortByLastName}></span></th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>DOB</th>
                            </tr>
                        </thead>

                    {
                        this.state.results && this.state.results.map(item => 
                            item.name.first.toLowerCase().includes(this.state.search) ?
                            <tbody key={item.login.uuid}>
                                <tr>
                                    <td><img src={item.picture.thumbnail} className="rounded-circle" alt="thumbnail" /></td>
                                    <td>{item.name.first}</td>
                                    <td>{item.name.last}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.email}</td>
                                    <td>{DateFormat(item.dob.date, "mediumDate")}</td>
                                </tr>
                            </tbody>
                            :
                            item.name.last.toLowerCase().includes(this.state.search) ?
                            <tbody ley={item.login.uuid}>
                                <tr>
                                    <td><img src={item.picture.thumbnail} className="rounded-circle" alt="thumbnail" /></td>
                                    <td>{item.name.first}</td>
                                    <td>{item.name.last}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.email}</td>
                                    <td>{DateFormat(item.dob.date, "mediumDate")}</td>
                                </tr>
                            </tbody>
                            :
                            null
                            )};
                    </table>
                </div>
            </div>
        )
    }
}

export default Table;