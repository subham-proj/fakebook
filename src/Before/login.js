import React,{useState} from 'react';
import {Card,Form,Button} from 'react-bootstrap';
import './before.css';
import { AiFillEye } from 'react-icons/ai';
import { AiFillEyeInvisible } from 'react-icons/ai';

import {Link, useHistory} from 'react-router-dom';

import {auth} from '../firebase';

function Login(){
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    
    const [email, setEmail] = useState('');
    const history = useHistory('');
    const [password,setPassword] = useState('');

    const login = (event) => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth);
            history.push("/newsfeed");
        })
        .catch((e) => {
            alert(e.message);
        })
        
    }
    
    
    return (
        <section id="login">
            <div className="logo">
                fakebook
            </div>
            <Card className="login-box">
                <Card.Body style={{backgroundColor:"white",borderRadius:"10px"}}>
                    <Form style={{backgroundColor:"white"}}>
                        <Form.Group controlId="formBasicEmail">
                        <Form.Control onChange = {(e) => setEmail(e.target.value)} size="lg" type="email" placeholder="Enter email" />
                        
                        </Form.Group>
                    
                        <Form.Group className="password" controlId="formBasicPassword">
                        <Form.Control onChange = {(e) => setPassword(e.target.value)} type={passwordShown ? "text" : "password"} className="password__input" size="lg" placeholder="Password" />
                        <span className="password__show" onClick={togglePasswordVisiblity}>  {passwordShown ? <AiFillEye/> : <AiFillEyeInvisible/>} 
                        </span>
                        </Form.Group>

                        
                        
                        <Button onClick={login} size="lg" block variant="primary" type="submit">
                            Log in
                        </Button>
                    </Form>
                        <div style={{textAlign:"center",backgroundColor:"white",paddingTop:"20px"}}>
                            <Link to="/">Forgot password?</Link>
                        </div>

                        <hr></hr>
                        
                        <div style={{textAlign:"center",backgroundColor:'white'}}>
                        <Link to="/signup"><Button size="lg" variant="success"> Create a new account</Button></Link>
                        </div>

                </Card.Body>
            </Card>
            <p style={{textAlign:"center",padding:"10px"}}><Link to="/" style={{color:"black",fontWeight:'bold'}}>Create a page</Link> for any famous person, band or business</p>
        </section>        
    )
}

export default Login;
