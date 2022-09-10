import React from 'react';
import { Button, Card, CardText, Row, Col } from 'reactstrap';
import Mark1 from '../../assets/mark1.jpg';
import Ak from '../../assets/ak.jpg';
import wDeah from '../../assets/wDeah.jpg';
import DaKing2 from '../../assets/DaKing2.jpg';
import Eman from '../../assets/eman.jpg';

import '../styles/Wr.css';

function Writing() {
  return (
    <div style={{marginTop: "100px"}} className='px-3' >
        <div className=' py-5 px-5 rounded-3 shadow-lg p-3 mb-5 rounded'>
        <h1 className='text-center border border-1 rounded-1 p-3 sh1'> Writing</h1>
        <p className='text-center py-2 ct2' style={{color:'#ff6666'}}>We have a host of professional writers that can solve your song,
        Script, story, spoken words, and other professional writings.</p>

        </div>

       <div className='border border-0 py-4 px-4' style={{background: "whitesmoke", borderRadius: "10px"}} >
        <CardText className='text-center'>Meet Our Writers</CardText>
        
        <Row >
            <Col className="col-sm">
            <Card className='sh1'>
               <img src={Mark1} width={405} height={300} className='p-3' style={{objectFit:'cover'}}/>
               <CardText className='text-center py-2'>Mr. Mark Deah</CardText>
            </Card>
            </Col>

            <Col className="col-sm cd-q">
            <Card className='sh1'>
               <img src={Ak} width={405} height={300} className='p-3' />
               <CardText className='text-center py-2'>Mr. Anthony Koon</CardText>
            </Card>
            </Col>

            <Col className="col-sm cd-q">
            <Card className='sh1'>
               <img src={wDeah} width={405} height={300} className='p-3'/>
               <CardText className='text-center py-2'>Mr. William Deah</CardText>
            </Card>
            </Col>
            
            <Col className="col-sm cd-q">
            <Card className='sh1'>
               <img src={DaKing2} width={405} height={300} className='p-3 mx-auto' />
               <CardText className='text-center py-2'>Samuel DaKing Anthony</CardText>
            </Card>
            </Col>

            <Col className="col-sm cd-q">
            <Card className='sh1' >
               <img src={Eman} width={405} height={300} className='p-3 mx-auto'/>
               <CardText className='text-center py-2'>Emmanuel EBless Wehyee</CardText>
            </Card>
            </Col>

           
        </Row>

        <Row className='py-5 px-5'>
        <Button color="dark" outline className='py-2'> Contact Us Now </Button>
        </Row>
        
        </div> 
        
    </div>
  )
}

export default Writing;