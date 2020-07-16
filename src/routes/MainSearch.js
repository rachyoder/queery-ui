import React, { Component } from 'react';
import LoginRegister from '../components/auth/LoginRegister';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';

import { Button, Col, Row, Container } from 'reactstrap';

class MainSearch extends Component {
    render() {
        return (
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

        );
    }
}

export default MainSearch;