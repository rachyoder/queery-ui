import React, { Component } from 'react';
import { Card, Row, Col, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

class SearchResults extends Component {
    render() {
        const results = this.props.results.map((result, idx) => {
            let path = '/' + result.title + '-' + result.id;
            return (
                <Row key={idx} className='my-4'>
                    <Col xs='12' className='pr-0'>
                        <Link to={path}>
                            <Card id={result.id} body>
                                <Row>
                                    <Col xs='3' id='card-title' >
                                        <strong>{result.title}</strong>
                                    </Col>
                                    <Col xs='9' id='card-desc' >{result.desc}</Col>
                                </Row>
                            </Card>
                        </Link>
                    </Col>
                </Row>
            )
        });

        return (
            <div>
                {this.props.query ?
                    (
                        <Container className='my-5'>
                            {results}
                        </Container>

                    ) : (
                        null
                    )
                }
            </div>
        );
    }
}

export default SearchResults;
