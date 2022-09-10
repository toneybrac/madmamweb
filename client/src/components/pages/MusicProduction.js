import React from 'react';
import { Button, Card, CardText, Row, Col } from 'reactstrap';
import DaKing from '../../assets/DaKing.jpg';

import '../styles/Mp.css';

function MusicProduction() {
  return (
    <div style={{marginTop: "100px"}} className='px-3' >
        <div className=' py-5 px-5 rounded-3 shadow-lg p-3 mb-5 rounded'>
        <h1 className='text-center border border-1 rounded-1 p-3 sh1'> Music Production</h1>
       

        </div>

       <div className='border border-0 py-4 px-4' style={{background: "whitesmoke", borderRadius: "10px"}} >
        <Row >
        <Col className="col-sm">
            <Card className='sh1'>
            <Card className='my-5 mx-5 ' style={{background:'whitesmoke', padding:'10px', border:'none', borderRadius:'10px'}}>
                
            <p className='text-center  ct4 py-4 px-4' style={{color:'#ff6666'}}>MADMAM runs a recording studio called DivineSound. Our production engineer
            is a young and talented rap artist, songwriter and arranger. Samuel Anthony musically known as 
            Da King, the first ambassador of Montserrado got talent Project Show It program.</p>
         </Card>
            </Card>
            </Col>

            <Col className="col-sm col-q">
            <Card className='sh1'>
               <img src={DaKing} width={620} height={350} className='p-3 mp-q'/>
               <CardText className='text-center py-3'>Da King</CardText>
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

export default MusicProduction;