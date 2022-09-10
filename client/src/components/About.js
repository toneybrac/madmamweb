import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Row, Col, Card, CardTitle, CardText, Button, List } from 'reactstrap';
import Logo from '../assets/logo-1.png';
import Mark from '../assets/Mark1.png';
import MarkW from '../assets/mark_wife.jpg';
import MarkF from '../assets/mark_family.jpg';
import './styles/About.css';

function About() {

    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
    const [data3, setData3] = useState([]);
 

  
    useEffect(() => {
      //getPost();
      ////getPost2();
    // getPost3();
      
    });
  
    const getPost = () => {
      axios.get('http://localhost:5000/profile')
      .then((res) => 
      setData(res.data))
      
      
      .catch((err) => console.log(err, 'it has an error kkk'));
    };

    const getPost2 = () => {
      axios.get('http://localhost:5000/profile2')
      .then((res) => 
      setData2(res.data))
      
      
      .catch((err) => console.log(err, 'it has an error kk'));
    };

    const getPost3 = () => {
      axios.get('http://localhost:5000/profile3')
      .then((res) => 
      setData3(res.data))
      
      
      .catch((err) => console.log(err, 'it has an error kk'));
    };

  return (
    

      <div>
      <div className='border border-0 mx-3 py-4 px-4' style={{background: "whitesmoke", borderRadius: "10px"}} >
        <Row >
            <Col className="col-sm">
            <Card className='sh1'>
            <CardText className='px-4 py-4'>
         MADMAM (Mark Deah Ministry of Arts and Music) was established 2015 to <span>identify, train and promote</span>
         talents. MADMAM Inc, is an entertainment company that runs talent hunt programs as a means of identifying talents,
         runs MADMAM Academy as a means of training talents, and an audio & video recording studio, MADMAM store, television
         and radio as our promotional arm.
         <br />
         <br />
         MADMAM Inc have successfully established their activities in five(5) counties across Liberia, which includes
         Montserrado, Nimba, Margibi, Bong and Grand Bassa respectively. They gradually working towards covering all 
         other counties within Liberia.
      </CardText>
            
            </Card>
            </Col>

            

            <Col className="col-sm">
            <Card className='sh1 px-3 py-5'>
            <img  src={Logo} className='mx-auto' alt="Logo" width={388}  style={{objectFit: 'cover', paddingBottom:'40px'}} />
              
            </Card>
            </Col>
        </Row>


        <Row className='py-4'>
            <Col className="col-sm">
            <Card className='sh1'>
            <img  src={Mark} alt="Logo" width={400} className='mx-auto'   style={{objectFit: 'cover'}}/>

            <p className='cap text-center'><b>Mark Deah</b> Founder and CEO
                   
                   MADMAM Inc.
                    <br />
             Is an entrepreneur, Gospel Artist, Advocate, and Philanthropist
             <br />
             who create jobs opportunity for many young people.</p>
            </Card>
            </Col>

            

            <Col className="col-sm">
            <Card className='sh1 px-4 py-4'>
            Mark is married to beautiful Mrs. Lwopu D. Deah and was blessed with a son Caleb Deah. Mark is a 2011 graduate
of the Africa Methodist Episcopal University(AMEU) with a degree in Business Administration. He also a final year
student at the graduate school of the University of Liberia where he's studying Banking and Finance.
<br />
<List className='pt-3'>
<li>
Mark is the formal Executive Music Director of <b>Mission Bethel Music Ministry</b> where he served for over 20 years.

</li>
<li>
He's one of the directors of <b>Monrovia Community Mass Choir (MCMC)</b>.
</li>
<li>
He's also the current youth pastor of <b>Mission Bethel Central Church</b>
</li>

</List>
<br />
Mark believes everyone is born with a gift and when developed, should be a great help to oneself and the world.
He believes in transformational leadership and has worked for most of his life mentoring young people, empowering
women, youth and society's most vulnerable. Mark firmly believes that at the core of every good leadership should
be the interest of the people. With a deep passion for people and love for his birth country Liberia, He is 
committed to bringing development and investment to entertainment in Liberia and the world at large.

            </Card>
            </Col>
        </Row>

        <Row className='py-4'>
            <Col className="col-sm">
            <Card className='sh1'>
            <img  src={MarkW} alt="Logo" width={400} className='mx-auto'   style={{objectFit: 'cover', paddingTop:'20px'}}/>

            <p className='cap text-center'>Mark & Wife</p>
            </Card>
            </Col>

            

            <Col className="col-sm">
            <Card className='sh1'>
            <img  src={MarkF} alt="Logo" width={400} className='mx-auto'   style={{objectFit: 'cover', paddingTop:'20px', paddingBottom:'53px'}}/>

            <p className='cap text-center'>Mark & Family</p>
            </Card>
            </Col>
        </Row>

        
        
        </div> 

    </div>
  )
}

export default About;