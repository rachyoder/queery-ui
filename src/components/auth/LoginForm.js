import React, { Component } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
        this.handleChange = this.handleChange.bind(this);
    }

    // Saves input values in state and passes along for form submission
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
        this.props.pullState(event.target.name, event.target.value);
    }

    render() {
        return (
            <div>
                <FormGroup>
                    <Label for='email-login'>
                        Email
                        </Label>
                    <Input type='email' name='email' id='email-login' placeholder='Enter email here...' value={this.state.email} onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for='password-login'>
                        Password
                        </Label>
                    <Input type='password' name='password' id='password-login' placeholder='Enter password here...' value={this.state.password} onChange={this.handleChange} />
                </FormGroup>
            </div>
        );
    }
}

export default LoginForm;
