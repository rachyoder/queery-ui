import React from 'react';
import LoginRegister from './components/auth/LoginRegister';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import ArticleView from './routes/ArticleView';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import { Button, Row, Container, Col } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import API_Calls from './components/utilities/Axios';
import Cookie from 'js-cookie';
import './App.css';


export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			token: '',
			results: [],
			query: '',
		}
		this.grabToken = this.grabToken.bind(this);
		this.logout = this.logout.bind(this);
		this.grabResults = this.grabResults.bind(this);
		this.grabQuery = this.grabQuery.bind(this);
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

	// Grabs the results of the search query
	grabResults(results) {
		this.setState({ results: results });
	}

	// Grabs the query from the search to check if there is a value present
	grabQuery(query) {
		this.setState({ query: query });
	}

	render() {
		return (
			<React.Fragment>
				<Router>
					<main id='hero-search'>
						<header>
							<Container fluid={true}>
								<Row>
									{this.state.token ?
										(
											<Button id='logout' onClick={this.logout} >Logout</Button>
										) : (
											<LoginRegister grabToken={this.grabToken} token={this.state.token} />
										)}
								</Row>
							</Container>
						</header>
						<Container className='h-90'>
							<Row className='h-90 align-items-center'>
								<Col xs='12' className='text-center'>
									<h1 id='hero-title' className='pb-5' >What is Your Queery?</h1>
									<SearchBar grabResults={this.grabResults} grabQuery={this.grabQuery} />
								</Col>
							</Row>
						</Container>
						<SearchResults results={this.state.results} query={this.state.query} />
					</main>
				</Router>
			</React.Fragment>

		);
	}
}
