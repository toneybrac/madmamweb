import React from 'react';
import { Button, Card, CardText, Row, Col } from 'reactstrap';
import Ad1 from '../../assets/ad1.jpg';
import Ad2 from '../../assets/ad2.jpg';
import L1 from '../../assets/l1.jpg';
import R1 from '../../assets/r1.jpg';

import '../styles/Ad.css';

function AdolescenceSportMeet() {
  return (
    <div style={{marginTop: "100px"}} className='px-3' >
        <div className=' py-5 px-5 rounded-3 shadow-lg p-3 mb-5 rounded'>
        <h1 className='text-center border border-1 rounded-1 p-3 sh1'> Adolescence Sport Meet</h1>
        
        <p className='text-center  ct2'></p>
        <br />
        <hr style={{color: 'gray', height:'4px'}} className='my-2' />
        <p className='text-center ct3' style={{fontFamily:'monospace'}}><span style={{color: 'black', fontFamily:'tahoma' }}>Theme <span style={{color:'#ff0e21'}}>:</span> </span>Promoting Sports Culture </p>

        </div>

       <div className='border border-0 py-4 px-4' style={{background: "whitesmoke", borderRadius: "10px"}} >
        <Row >
            <Col className="col-sm">
            <Card className='sh1'>
            <Card className='my-5 mx-5 ' style={{background:'whitesmoke', padding:'10px', border:'none', borderRadius:'10px'}}>
                
            <p className='text-center  ct4 py-4 px-4' >Featuring children under 15 years as players, coaches, linesmen, referees, midecal team and coaches
         We aimed to conduct training for those passionate about these roles in sport.</p>
         </Card>
            </Card>
            </Col>

            

            <Col className="col-sm col-mq">
            <Card className='sh1 p-3'>
               <img  src={Ad2} width={626} height={310} className='img-mq'   style={{borderRadius:'10px'}}/>
              
            </Card>
            </Col>
        </Row>

        <Row className='py-4'>
            <Col className="col-sm col-mq">
            <Card className='sh1 p-3 '>
               <img  src={L1} width={470}  className='img-mq mx-auto'   style={{borderRadius:'10px'}}/>
              
            </Card>
            </Col>

            

            <Col className="col-sm col-mq">
            <Card className='sh1 p-3'>
               <img  src={R1} width={470}  className='img-mq mx-auto'   style={{borderRadius:'10px'}}/>
              
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

export default AdolescenceSportMeet;