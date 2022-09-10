import React from 'react';
import { Button, Card, CardText, Row, Col } from 'reactstrap';
import madH from '../../assets/madH.jpg';
import Rapper1 from '../../assets/rapper1.jpg';
import Dance1 from '../../assets/dance1.jpg';
import Singer1 from '../../assets/singer1.jpg';
import '../styles/ProjectShowIt.css';

function ProjectShowIt() {
  return (
    <div style={{marginTop: "100px"}} className='px-3' >
        <div className=' py-5 px-5 rounded-3 shadow-lg p-3 mb-5 rounded'>
        <h1 className='text-center border border-1 rounded-1 p-3 sh1'> Project Show It</h1>
        <p className='text-center py-2 ct2' style={{color:'#ff6666'}}>A competition that features Singers, Rappers, and Dancers</p>

        </div>

       <div className='border border-0 py-4 px-4' style={{background: "whitesmoke", borderRadius: "10px"}} >
        <Row >
            <Col className="col-sm">
            <Card className='sh1'>
               <img src={Singer1} width={405} height={300} className='p-3'/>
               <CardText className='text-center ct1 py-3'>Singers</CardText>
            </Card>
            </Col>

            <Col className="col-sm">
            <Card className='sh1'>
               <img src={Dance1} width={405} height={300} className='p-3'/>
               <CardText className='text-center ct1 py-3'>Dancers</CardText>
            </Card>
            </Col>

            <Col className="col-sm">
            <Card className='sh1'>
               <img src={Rapper1} width={405} height={300} className='p-3'/>
               <CardText className='text-center ct1 py-3'>Rappers</CardText>
            </Card>
            </Col>
        </Row>

        <Row className='py-5 px-5'>
        <Button color="dark" outline className='py-2'> Show Us Now </Button>
        </Row>
        
        </div> 
        
    </div>
  )
}

export default ProjectShowIt