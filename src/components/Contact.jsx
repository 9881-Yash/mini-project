import { Alert, Col, Container, Row } from "react-bootstrap";

export function Contact(){
    return (
        <Container className="mt-5">
            <Alert variant="secondary">
                <h1>Contact Us</h1>
            </Alert>
            <Row>
                <Col lg={4}>
                    <h3> Phone </h3>
                    <h4> 91-842164545 </h4>
                </Col>
                <Col lg={4}>
                    <h3> Email </h3>
                    <h4> admin@yahoomail.com </h4>
                </Col>
                <Col lg={4}>
                    <h3> Address </h3>
                    <h4> Hawa Mahal , Jaipur . </h4>
                </Col>
            </Row>
        </Container>
    );
} 