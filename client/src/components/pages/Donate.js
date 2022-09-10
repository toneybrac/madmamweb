import React, { useState } from 'react';
import { Button, Card, CardText, Row, Col } from 'reactstrap';
import '../styles/Donate.css';
import Rapper1 from '../../assets/rapper1.jpg';
import Dance1 from '../../assets/dance1.jpg';
import Singer1 from '../../assets/singer1.jpg';

function Donate(args) {
 

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <div className='border border-0 py-4 px-5' style={{ borderRadius: "10px"}} >
      <Row className='bn'>
            <Col className="col-sm">
            <Card className='sh1'>
            <p className='title_1'>Ministry Corporate Account Bank</p>
                          <p className='title_2' style={{color:'#ff0e21', border:'1px solid #ff0e21'}}>UBA</p>
                          <Row className='text-center'>
                            <p className='tItem'>Title: <span className='t sh2 px-2'>Mark Deah Ministry of Arts & Music Inc</span></p>
                            <p className='tItem'>Number: <span className='t sh2 px-2'>53040160001017</span></p>
                          </Row>
              
            </Card>
            </Col>

            <Col className="col-sm">
            <Card className='sh1'>
            <p className='title_1'>Ministry Corporate Account Bank</p>
                          <p className='title_2' style={{color:'#009933', border:'1px solid #009933'}}>LBDI</p>
                          <Row className='text-center'>
                            <p className='tItem'>Title: <span className='t sh2 px-2'>Mark Deah Ministry of Arts & Music(MADMAM)</span></p>
                            <p className='tItem'>Number: <span className='t sh2 px-2'>010USD21804001002 / 010LRD21804001001</span></p>
                          </Row>
               
            </Card>
            </Col>

           
        </Row>

        <Row className='bn py-3'>
        <Col className="col-sm">
            <Card className='sh1'>
            <p className='title_1'>Mobile Money</p>
                          <p className='title_2' style={{color: '#000066', border:'1px solid #000066'}}>MTN</p>
                          <Row className='text-center'>
                            <p className='tItem'>Number: <span className='t sh2 px-2'>0886694920</span></p>
                            
                          </Row>
               
            </Card>
            </Col>

            <Col className="col-sm">
            <Card className='sh1'>
            <p className='title_1' >Mobile Money</p>
                          <p className='title_2' style={{color:'#ffa500', border:'1px solid #ffa500'}}>SendWave</p>
                          <Row className='text-center'>
                            <p className='tItem'>Number: <span className='t sh2'>0777694920</span></p>
                            
                          </Row>
               
            </Card>
            </Col>

        </Row>

        <Row className='py-5 px-5'>
        <Button color="dark" outline className='py-2'> Contact Us Now </Button>
        </Row>
        
        </div>
      
    </div>
  );
}

export default Donate;