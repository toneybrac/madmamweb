import React from 'react';
import { Link } from 'react-router-dom'
import { GiRotaryPhone } from 'react-icons/gi';
import { ImLocation } from "react-icons/im";
import { GrMail } from "react-icons/gr";
import { FaFacebookSquare, FaYoutubeSquare } from "react-icons/fa";
import './styles/Contact.css';

import { Row, Col, Card, FormGroup, CardText, Button, Form, Label, Input } from 'reactstrap';

function Contact() {
  return (
    <div>
         <div>
            <h1 className='text-center pt-5 pb-5'>Contact Us</h1>
        </div>

        <div className='pb-5'>
            <Row className='bg-light rounded px-5 py-5'>
                <Col sm='6'>
                    <div >
                    <Card className='px-5 py-5 text-center'>
                        <CardText className='p-2 border border-1 sz'>Address</CardText>

                        <div>
                        <CardText>
                        <ImLocation size={30} color={'#ff0e21'} />
                        Weaver Street, Opposite Methodist Church, Paynesville City, Monrovia, Liberia
                        </CardText>

                        <CardText>
                        <GiRotaryPhone size={30} color={'#ff0e21'} />
                        +231777694920 / +231886694920
                        </CardText>

                        <CardText>
                        <GrMail size={30} color={'#ff0e21'} />
                        markdeah86@gmail.com
                        </CardText>

                        </div>
                        <hr style={{color: '#ff0e21'}}className='sh' />     

                        <div className='container py-4'>
                          <Row>
                          <Col className="col-sm">
                          <CardText >
                            <a href='https://www.facebook.com/markdeah/'>
                            <FaFacebookSquare size={70} color={'#ff0e21'} className='sh rounded-3'/>
                            </a>
                       
                        
                        </CardText>
                        </Col>
                         
                        <Col className="col-sm">
                        <CardText >
                          <a href='https://www.youtube.com/channel/UC0X0GEOTEuhlmmdYQKu5RmQ'>
                        <FaYoutubeSquare size={70} color={'#ff0e21'} className='sh rounded-3'/>
                        </a>
                        </CardText>
                        </Col>

                          </Row>
                        
                        </div>
                        
                        
                        
                    </Card>
                    </div>

                </Col>

                <Col sm='6 col-q'>
                    <Card className=''>
                <Form inline className='px-5 py-5'>
                <FormGroup className="mb-2 me-sm-2 mb-sm-0">
    <Label
      className="me-sm-2"
      for="exampleEmail"
    >
      Name
    </Label>
    <Input
      id="exampleText"
      name="text"
      placeholder="John Doe"
      type="text"
    />
  </FormGroup>

  <FormGroup className="mb-2 me-sm-2 mb-sm-0">
    <Label
      className="me-sm-2"
      for="exampleEmail"
    >
      Email
    </Label>
    <Input
      id="exampleEmail"
      name="email"
      placeholder="something@idk.com"
      type="email"
    />
  </FormGroup>
  <FormGroup>
    <Label for="exampleText">
      Message
    </Label>
    <Input
      id="exampleText2"
      name="text"
      rows="5"
      type="textarea"
      placeholder="Write your message here."
    />
  </FormGroup>
  
  
  <Button color='dark' outline>
    Send
  </Button>
</Form>
</Card>

               

                </Col>
            </Row>
        </div>
    </div>
  )
}

export default Contact;