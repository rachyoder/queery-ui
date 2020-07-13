import React from 'react';
import LoginRegister from './components/auth/LoginRegister';
import SearchBar from './components/SearchBar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import { Button, Row, Container } from 'reactstrap';
import API_Calls from './components/utilities/Axios';
import Cookie from 'js-cookie';


export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			token: '',
		}
		this.grabToken = this.grabToken.bind(this);
		this.logout = this.logout.bind(this);
	}

	grabToken(token) {
		this.setState({ token: token });
	}

	// Sends GET request to revoke token
	logout(token) {
		API_Calls.__get('/logout', token)
			.then(res => {
				this.grabToken('');
				Cookie.remove('token');
			})
	}

	render() {
		return (
			<React.Fragment>
				<Container fluid={true}>

					<Row>
						{this.state.token ?
							(
								<Button onClick={this.logout} >Logout</Button>
							) : (
								<LoginRegister grabToken={this.grabToken} token={this.state.token} />
							)}
					</Row>
					<SearchBar />
				</Container>
			</React.Fragment>

		);
	}
}
