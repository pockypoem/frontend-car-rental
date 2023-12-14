import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import stylesheet
import { Link } from 'react-router-dom';

import '../styles/loginPage.css';

function Login() {
    return (
        <Container fluid>
            <Row className='d-flex justify-content-center align-items-center h-100'>
                <Col col='12'>
                    <Card className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                        <Card.Body className='p-5 w-100 d-flex flex-column'>

                            <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                            <p className="text-white-50 mb-3">Please enter your login and password!</p>

                            <Form>
                                <Form.Group className='mb-4' controlId='formControlLgemail'>
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type='email' placeholder='Enter email' size='lg' />
                                </Form.Group>

                                <Form.Group className='mb-4' controlId='formControlLgpass'>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type='password' placeholder='Password' size='lg' />
                                </Form.Group>

                                <Button variant='primary' size='lg' style={{ width: '100%' }}>
                                    Login as Admin
                                </Button>

                                <hr className="my-4" />

                                <Link to="/dashboard">
                                    <Button className="mb-2 custom-google-btn" size="lg" style={{ backgroundColor: '#dd4b39' }}>
                                        Sign in as User with google
                                    </Button>
                                </Link>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
