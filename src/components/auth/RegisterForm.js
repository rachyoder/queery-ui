import React, { Component } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            confirm_password: '',
        }
        this.handleChange =this.handleChange.bind(this);
    }

    // Saves input values in state and passes along for form submission
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
        this.props.pullState(event.target.name, event.target.value);
    }

    render() {
        return (
            <React.Fragment>
                <FormGroup>
                    <Label for='name-register'>
                        Name
                        </Label>
                    <Input type='text' name='name' id='name-register' placeholder='Enter your name here...' value={this.state.name} onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for='email-register'>
                        Email
                        </Label>
                    <Input type='email' name='email' id='email-register' placeholder='Enter email here...' value={this.state.email} onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for='password-register'>
                        Password
                        </Label>
                    <Input type='password' name='password' id='password-register' placeholder='Enter password here...' value={this.state.passwored} onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for='confirm-register'>
                        Confirm Password
                        </Label>
                    <Input type='password' name='confirm_password' id='confirm-register' placeholder='Enter password here...' value={this.state.confirm_password} onChange={this.handleChange} />
                </FormGroup>
            </React.Fragment>
        );
    }
}

export default RegisterForm;
