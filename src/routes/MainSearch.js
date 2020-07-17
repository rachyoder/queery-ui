import React, { Component } from 'react';
import LoginRegister from '../components/auth/LoginRegister';
import SearchBar from '../components/search/SearchBar';
import SearchResults from '../components/search/SearchResults';

import { Button, Col, Row, Container } from 'reactstrap';

class MainSearch extends Component {
    render() {
        return (
            <main id='hero-search'>
                <header>
                    <Container fluid={true}>
                        <Row>
                            {this.props.token ?
                                (
                                    <Button id='logout' onClick={this.props.logout} >Logout</Button>
                                ) : (
                                    <LoginRegister grabToken={this.props.grabToken} token={this.props.token} />
                                )}
                        </Row>
                    </Container>
                </header>
                <Container className='h-90'>
                    <Row className='h-90 align-items-center'>
                        <Col xs='12' className='text-center'>
                            <h1 id='hero-title' className='pb-5' >What is Your Queery?</h1>
                            <SearchBar grabResults={this.props.grabResults} grabQuery={this.props.grabQuery} />
                        </Col>
                    </Row>
                </Container>
                <SearchResults results={this.props.results} query={this.props.query} grabPath={this.props.grabPath} />
            </main>

        );
    }
}

export default MainSearch;
