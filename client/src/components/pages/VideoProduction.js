import React from 'react';
import { Button, Card, CardText, Row, Col } from 'reactstrap';
import Vahei from '../../assets/Vahei1.jpg';

import '../styles/Vp.css';

function VideoProduction() {
  return (
    <div style={{marginTop: "100px"}} className='px-3' >
        <div className=' py-5 px-5 rounded-3 shadow-lg p-3 mb-5 rounded'>
        <h1 className='text-center border border-1 rounded-1 p-3 sh1'> Video Production</h1>
       

        </div>

       <div className='border border-0 py-4 px-4' style={{background: "whitesmoke", borderRadius: "10px"}} >
        <Row >
        <Col className="col-sm">
            <Card className='sh1'>
            <Card className='my-5 mx-5 ' style={{background:'whitesmoke', padding:'10px', border:'none', borderRadius:'10px'}}>
                
            <p className='text-center  ct4 py-3 px-4'>MADMAM Video Production cover movies, drama, comedy skits, music, events, and documentaries.
             Our producer is called Mr. Vahei L. Tolbert, He's a professional that has worked with the American
             embassy, French embassy and many big clients and businesses. Currently, he is the CEO of Lib-Image.</p>
         </Card>
            </Card>
            </Col>

            <Col className="col-sm col-q">
            <Card className='sh1'>
               <img src={Vahei} width={420} height={350} className='p-3 mx-auto mp-q' />
               <CardText className='text-center py-4'>Mr. Vahei L. Tolbert</CardText>
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

export default VideoProduction;