import React, { Component } from 'react';
import { Card, CardTitle, CardText, Row, Container } from 'reactstrap';

class SearchResults extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const results = this.props.results.map((result, idx) => {
            return (
                <Row key={idx} className='my-4'>
                    <Card body className='py-1'>
                        <CardTitle>{result.title}</CardTitle>
                        <CardText>{result.body}</CardText>
                    </Card>
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