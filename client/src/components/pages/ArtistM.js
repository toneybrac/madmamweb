import React from 'react';
import { Button, Card, CardText, Row, Col } from 'reactstrap';
import madH from '../../assets/madH.jpg';
import A1 from '../../assets/a1.jpg';
import A2 from '../../assets/a2.jpg';
import A3 from '../../assets/a3.jpg';
import A4 from '../../assets/a4.jpg';
import A5 from '../../assets/a5.jpg';
import A6 from '../../assets/a6.jpg';
import A7 from '../../assets/a7.jpg';
import A8 from '../../assets/a8.jpg';
import A9 from '../../assets/a9.jpg';
import '../styles/ProjectShowIt.css';

function ArtistM() {
  return (
    <div style={{marginTop: "100px"}} className='px-3' >
        <div className=' py-5 px-5 rounded-3 shadow-lg p-3 mb-5 rounded'>
        <h1 className='text-center border border-1 rounded-1 p-3 sh1'> MADMAM Artist Management</h1>
        <p className='text-center py-2 ct2' style={{color:'#ff6666'}}>MADMAM Artist Management program focuses on promoting talents that are ready for the 
        market. We also have a scouting program.</p>

        </div>

        <div className='border border-0 py-4 px-4' style={{background: "whitesmoke", borderRadius: "10px"}} >
        <Row className='py-3'>
          <CardText className='text-center' style={{fontSize:'20px'}}>Meet Our Artists</CardText>
        </Row>
        <Row className='py-3'>
            <Col className="col-sm">
            <Card className='sh1'>
               <img src={A1} width={405} height={300} className='p-3'/>
               
            </Card>
            </Col>

            <Col className="col-sm">
            <Card className='sh1'>
               <img src={A2} width={405} height={300} className='p-3'/>
               
            </Card>
            </Col>

            <Col className="col-sm">
            <Card className='sh1'>
               <img src={A3} width={405} height={300} className='p-3'/>
               
            </Card>
            </Col>
        </Row>

        <Row className='py-3'>
            <Col className="col-sm">
            <Card className='sh1'>
               <img src={A4} width={405} height={300} className='p-3'/>
               
            </Card>
            </Col>

            <Col className="col-sm">
            <Card className='sh1'>
               <img src={A5} width={405} height={300} className='p-3'/>
               
            </Card>
            </Col>

            <Col className="col-sm">
            <Card className='sh1'>
               <img src={A6} width={405} height={300} className='p-3'/>
               
            </Card>
            </Col>
        </Row>

        <Row className='py-3'>
            <Col className="col-sm">
            <Card className='sh1'>
               <img src={A7} width={405} height={300} className='p-3'/>
               
            </Card>
            </Col>

            <Col className="col-sm">
            <Card className='sh1'>
               <img src={A8} width={405} height={300} className='p-3'/>
               
            </Card>
            </Col>

            <Col className="col-sm">
            <Card className='sh1'>
               <img src={A9} width={405} height={300} className='p-3'/>
               
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

export default ArtistM;
