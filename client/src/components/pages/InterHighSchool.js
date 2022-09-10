import React, { useHistory as History } from 'react';
import { Button, Card, CardText, Row, Col } from 'reactstrap';



import Dance1 from '../../assets/dance1.jpg';
import Music1 from '../../assets/music1.jpg';
import Dance2 from '../../assets/dance2.mp4';
import Dance3 from '../../assets/Dance3.mp4';
import madH from '../../assets/madH.jpg';
import '../styles/InterHighSchool.css';

function InterHighSchool() {

const go = () => {
    History.push('/contact');

    
}

  return (
    <div style={{marginTop: "100px"}} className='px-3' >
        <div className=' py-5 px-5 rounded-3 shadow-lg p-3 mb-5 rounded'>
        <h1 className='text-center border border-1 rounded-1 p-3 my-2 sh1'> Inter High School Music & Dance</h1>
        <p className='text-center ct2' style={{color:'#ff6666'}}>Features schools choir and dance team </p>
        <hr style={{color: 'gray', height:'4px' }}/>
        <p className='text-center ct3' style={{fontFamily:'monospace'}}><span style={{color: 'black', fontFamily:'tahoma' }}>Theme <span style={{color:'#ff0e21'}}>:</span> </span>Promoting talents through education </p>

        </div>

        <div className='border border-0 py-4 px-4' style={{background: "whitesmoke", borderRadius: "10px"}} >
        <Row >
            <Col className="col-sm">
            <Card className='sh1'>
               <img src={Dance1} width={405} height={300} className='p-3'/>
               <CardText className='text-center ct1 py-3'>Dancing</CardText>
            </Card>
            </Col>

            <Col className="col-sm">
            <Card className='sh1'>
               <video src={Dance2} width={405} height={300} className='p-3'/>
               <CardText className='text-center ct1 py-3'>Acting</CardText>
            </Card>
            </Col>

            <Col className="col-sm">
            <Card className='sh1'>
               <img src={Music1} width={405} height={300} className='p-3'/>
               <CardText className='text-center ct1 py-3'>Singing</CardText>
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

export default InterHighSchool;