import React from 'react';
import {Card, Row, Col} from 'react-bootstrap';
import Search from './Search';

const HomePage = () => {
    return(
        <div style={{padding: "10em"}}>
            <div className="heading">
                <h2>The Shoppies</h2>
            </div>
            <Row className="card-style">
                <Col>
                    <Card md={8}>
                        <Card.Body>
                            <Search/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row md={8}>
                <Col>
                    <Card md={8}>
                        <Card.Body>
                            <h6> Results from "" </h6>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card md={8}>
                        <Card.Body>
                            <h6>Nominations</h6>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </div>
    );
}

export default HomePage;