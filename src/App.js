import React from 'react';
import MainSearch from './routes/MainSearch';
import ArticleView from './routes/ArticleView';
import PageNotFound from './routes/PageNotFound';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import API_Calls from './components/utilities/Axios';
import Cookie from 'js-cookie';
import './App.css';


export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.grabToken = this.grabToken.bind(this);
		this.logout = this.logout.bind(this);
		this.grabResults = this.grabResults.bind(this);
		this.grabQuery = this.grabQuery.bind(this);
		this.grabPath = this.grabPath.bind(this);
		this.state = {
			token: '',
			results: [],
			query: '',
			path: null,
		}
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

	// Grabs the path of the selected search result as well as the id
	grabPath(path, id) {
		this.setState({ path: path, id: id });
	}

	render() {
		return (
			<React.Fragment>
				<Router>
					<Switch>
						<Route exact path='/'>
							<MainSearch grabToken={this.grabToken} grabResults={this.grabResults} grabQuery={this.grabQuery} results={this.state.results} query={this.state.query} token={this.state.token} logout={this.logout} grabPath={this.grabPath} />
						</Route>
						<Route path={this.state.path}>
							<ArticleView id={this.state.id} />
						</Route>
						<Route path="*">
							<PageNotFound />
						</Route>
					</Switch>
				</Router>
			</React.Fragment>

		);
	}
}
