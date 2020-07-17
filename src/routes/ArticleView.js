import React, { Component } from 'react';
import API_Calls from '../components/utilities/Axios';
import { Container, Row, Col, Spinner } from 'reactstrap';
import ArticleLayout from '../components/ArticleLayout';

class ArticleView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            article: {},
        }
    }

    componentDidMount() {
        let path = window.location.pathname;
        let path_id = path.split('-');
        let api_path = '/article/';

        this.props.id ? (api_path += this.props.id) : (api_path += path_id[path_id.length - 1]);

        API_Calls.__get(api_path, '')
            .then(res => {
                if (res.status === 200) {
                    console.log(res);
                    this.setState({ article: res.data });
                } else {
                    console.log('redirect to 404 page');
                }
            })
    }

    render() {
        return (
            <div>
                {this.state.article ?
                    (<ArticleLayout article={this.state.article} />) : (
                        <Container>
                            <Row>
                                <Col xs='12'>
                                    <Spinner size='lg' />
                                </Col>
                            </Row>
                        </Container>
                    )}
            </div>
        );
    }
}

export default ArticleView;