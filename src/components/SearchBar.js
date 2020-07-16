import React, { Component } from 'react';
import { Input } from 'reactstrap';
import API_Calls from './utilities/Axios';
import './SearchBar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            search: '',
            results: [],
        }
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
        let value = { title: event.target.value };
        this.props.grabQuery(event.target.value);
        API_Calls.__post(value, '/titlesearch', '')
            .then(res => {
                this.setState({ results: res.data });
                this.props.grabResults(this.state.results);
            })
    }

    render() {
        return (
            <React.Fragment>
                <Input type='text' name='search' id='search-field' placeholder="Search..." onChange={this.handleChange} value={this.state.search} />
            </React.Fragment>
        );
    }
}

export default SearchBar;
