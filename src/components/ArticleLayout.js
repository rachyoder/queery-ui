import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class ArticleLayout extends Component {
    render() {
        const contributors = this.props.article.users.map((user, idx) => {
            return( <li key={idx}>{user.name}</li> );
        })
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>{this.props.article.title}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ul>
                            {contributors}
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>{this.props.article.body}</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ArticleLayout;