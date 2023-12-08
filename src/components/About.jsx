import { Alert, Col, Container, Row } from "react-bootstrap";

export function About(){
    return (
        <Container>
            <Alert variant="primary" className="mt-5">
                <h1>About Us</h1>
            </Alert>
            <Row >
                <Col lg={4}>
                    <h3>Mission</h3>
                </Col>
                <Col lg={4}>
                <h3>Vision</h3>
                </Col>
                <Col lg={4}>
                <h3>History</h3>
                </Col>
            </Row>    
        </Container>
        
    );
}