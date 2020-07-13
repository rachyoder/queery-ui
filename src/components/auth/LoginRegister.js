import React from 'react';
import { Button, Form, Modal, ModalHeader, ModalBody, ModalFooter, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import classnames from 'classnames';
import Cookie from 'js-cookie';
import API_Calls from '../utilities/Axios';

export default class LoginRegister extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false,
            activeTab: 'login',
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.toggleTab = this.toggleTab.bind(this);
        this.pullState = this.pullState.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Sets the state to reflect whether the modal should be visible or not
    toggleModal() {
        let modal = !this.state.modal;
        this.setState({ modal: modal });
    }

    // Selects which tab should be active
    toggleTab(tab) {
        if (tab !== this.state.activeTab) {
            this.setState({ activeTab: tab });
        }
    }

    // Passed down to child components to pull form data for submission
    pullState(name, value) {
        this.setState({ [name]: value });
    }

    // Submits the form data for login or registration
    handleSubmit(event) {
        event.preventDefault();
        let values, url;
        if (this.state.activeTab === 'login') {
            values = {
                email: this.state.email,
                password: this.state.password,
            };
            url = '/login';
        } else {
            values = {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                confirm_password: this.state.confirm_password,
            };
            url = '/register';
        }
        API_Calls.__post(values, url, '')
            .then(res => {
                if (res.status === 200) {
                    let token = res.data.data.token
                    this.props.grabToken(token);
                    Cookie.set('token', token);
                    this.setState({ modal: false, error: false });
                } else {
                    this.setState({ error: true });
                }
            })
    }

    render() {
        return (
            <React.Fragment>
                <Button onClick={this.toggleModal}>Login/Register</Button>
                <Modal isOpen={this.state.modal} autoFocus={true} centered={true} toggle={this.toggleModal}>
                    <ModalHeader>Welcome to Queery!</ModalHeader>
                    <Nav tabs>
                        <NavItem>
                            <NavLink className={classnames({ active: this.state.activeTab === 'login' })} onClick={() => this.toggleTab('login')}>Login</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={classnames({ active: this.state.activeTab === 'register' })} onClick={() => this.toggleTab('register')}>Register</NavLink>
                        </NavItem>
                    </Nav>
                    <Form onSubmit={this.handleSubmit}>
                        <ModalBody>
                            <TabContent activeTab={this.state.activeTab}>
                                <TabPane tabId='login'>
                                    <LoginForm pullState={this.pullState} />
                                </TabPane>
                                <TabPane tabId='register'>
                                    <RegisterForm pullState={this.pullState} />
                                </TabPane>
                            </TabContent>
                            {
                                this.state.error ?
                                    (
                                        <p className='text-danger'>The information you put in is incorrect. Please try again...</p>
                                    ) : (
                                        null
                                    )
                            }
                        </ModalBody>
                        <ModalFooter>
                            <Button type='submit' block={true}>Submit</Button>
                        </ModalFooter>
                    </Form>
                </Modal>
            </React.Fragment >
        );
    }
}
