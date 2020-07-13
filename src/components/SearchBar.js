import React, { Component } from 'react';
import { Input, Row } from 'reactstrap';
import API_Calls from './utilities/Axios';

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
                <Row>
                    <Input type='text' name='search' id='search-field' placeholder="What's your Queery?" onChange={this.handleChange} value={this.state.search} />
                </Row>
            </React.Fragment>
        );
    }
}

export default SearchBar;
