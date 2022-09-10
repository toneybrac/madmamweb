import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Col, Row, Card, CardText, Form, Button, Label, Input, FormGroup } from 'reactstrap';
import '../styles/Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();


  const Auth = (e) => {
    e.preventDefault();
   
     if (username === 'madmamAdmin' && password === 'admin@2022') {
      history.push('/dashboard')
      //console.log('hello');
     } else {
      alert('Wrong username or password')
     }
  }



  return (

    <div style={{marginTop:'100px'}} className='px-4'>
    <div className="App">
        <h2>Sign In</h2>
        <Form onSubmit={Auth} className="form">
          <FormGroup>
            <Label for="exampleEmail">Username</Label>
            <Input
              type="text"
              
              id="exampleEmail"
              placeholder="john"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="pass"
              id="examplePassword"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
        <Button color='dark' outline type='submit'>Submit</Button>
      </Form>
    </div>
  

    </div>
  )
}

export default Login;