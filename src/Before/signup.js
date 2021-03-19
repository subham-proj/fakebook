import React from 'react';
import './before.css';
import {Row,Col,Form,Card,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function signup() {
    return (
        <section id="signup">
        <div className="logo" style={{paddingTop:"150px"}}>
            fakebook
        </div>
        
        <Card className="signup-box">
                <Card.Body style={{backgroundColor:"white",borderRadius:"10px"}}>
                    <Form style={{backgroundColor:"white"}}>
                        <Row className="mb-3">
                            <Col style={{backgroundColor:"white"}}>
                                <Form.Control size="lg" style={{backgroundColor:"#F0F2F5"}} type="text" placeholder="First name" />
                            </Col>
                            <Col style={{backgroundColor:"white"}}>
                                <Form.Control size="lg" style={{backgroundColor:"#F0F2F5"}} type="text" placeholder="Last name" />
                            </Col>

                            
                        </Row>
                        <Form.Control size="lg" className="mb-3" style={{backgroundColor:"#F0F2F5"}} type="email" placeholder="Email address" />

                        <Form.Control size="lg" className="mb-3" style={{backgroundColor:"#F0F2F5"}} type="password" placeholder="New password" />

                        <Form.Label style={{backgroundColor:"white"}}>Birthday</Form.Label>
                        <Form.Control className="mb-3" style={{backgroundColor:"#F0F2F5"}} type="date" max="2014-05-20"/>

                        <Form.Label style={{backgroundColor:"white"}}>Gender</Form.Label>
                        <Row className="mb-3">
                            <Col style={{backgroundColor:"white"}}>
                                <input type="radio" id="Female" name="gender" value="Female"></input>
                                <label id="Female" className="signup-gender"  for="Female">&nbsp;Female</label>
                            </Col>

                            <Col style={{backgroundColor:"white"}}>
                                <input type="radio" id="Male" name="gender" value="Male"></input>
                                <label id="Male" className="signup-gender"  for="Male">&nbsp;Male</label>
                            </Col>

                            <Col style={{backgroundColor:"white"}}>
                                <input type="radio" id="Other" name="gender" value="Other" ></input>
                                <label id="Other" className="signup-gender"  for="Other">&nbsp;Other</label>
                            </Col>
                        </Row>
                        <Form.Text className="text-muted mb-3"  style={{backgroundColor:"white"}}>
                            By clicking "Sign Up" you agree to our <Link to="/">Terms</Link> , <Link to="/">Data Policy</Link> and <Link to="/">Cookie Policy</Link> . You can also receive SMS notifications from us and withdraw them at any time.
                        </Form.Text>
                        <div style={{textAlign:"center",backgroundColor:"white"}}>
                            <Button size="lg" variant="success">Sign Up</Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
            <div style={{paddingBottom:"60px"}}>
            </div>
        </section>
    )
}

export default signup;
