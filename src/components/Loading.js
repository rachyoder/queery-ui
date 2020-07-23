import React, { Component } from 'react';
import { Spinner, Container, Row, Col } from 'reactstrap';

class Loading extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col><Spinner size='lg' /></Col>
                </Row>
            </Container>
        );
    }
}

export default Loading;