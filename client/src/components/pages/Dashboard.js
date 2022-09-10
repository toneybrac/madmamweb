import React, { useEffect } from 'react'
import UploadV1 from './UploadV1';
import Upload from './Upload';
import { Card, CardText, Col, Row } from 'reactstrap';

function Dashboard() {


  useEffect(() => {
    //loadImages();
    fetch('http://localhost:3001/dashboard', {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type':'application/json',
        Accept:'application/json',
        'Access-Control-Allow-Origin':'*',
      },
      body: JSON.stringify({
        token: window.localStorage.getItem('token'),
      }),
    }).then((res) => res.json())
    .then((data) => {
      //console.log(data, 'userData');
      //console.log(data.fname, 'userData');
      //const user_name = userData.fname;
     
    });


  }, [])
  

  return (
    <div>
          <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Row>
         
          
            <Col className='col-sm'>
            <Upload />
            </Col>

            <Col className='col-sm'>
            <UploadV1 />
            </Col>
        </Row>
        
       
    </div>
  )
}

export default Dashboard