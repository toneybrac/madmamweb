import React from 'react';
import { CardText, List, Row, Col } from 'reactstrap';
import Logo from '../assets/logo-1.png';
import { Link } from 'react-router-dom';
import './styles/Footer.css';




function Footer() {

const d = new Date();
let year = d.getFullYear();



  return (
    <div className='py-5 px-4 '>
        <Row className=' py-5 px-5 rounded-3 shadow-lg p-3 mb-5 rounded'>
            <Col sm='3'>
            <img  src={Logo} alt="Logo" className='logo mx-auto my-4 d-block' width={100}  />

            </Col>

            <Col sm='3'>
                <CardText>Programs</CardText>
                <List type='unstyled'>
                    <li className='footerList'>
                    <Link to='/projectShowIt' className='text-decoration-none'>Project Show It</Link>
                    </li>
                    <li className='footerList'>
                    <Link to='/interHighSchool' className='text-decoration-none'>Inter High School Musics & Dance</Link>
                    </li>
                    <li className='footerList'>
                    <Link to='/adolescenceSportsMeet' className='text-decoration-none'>Adolescence Sports Meet</Link>
                    </li>
                    <li className='footerList'>
                    <Link to='/madmamH' className='text-decoration-none'>MADMAM House</Link>
                    </li>

                </List>
                
            </Col>

            <Col sm='3'>
            
            <CardText>Services</CardText>
                <List type='unstyled'>
                    
                    <li className='footerList'>
                        <Link to='/musicProduction' className='text-decoration-none'>Music Production</Link></li>
                    <li className='footerList'>
                    <Link to='/videoProduction' className='text-decoration-none'>Video Production</Link>
                    </li>
                    <li className='footerList'>
                    <Link to='/writing' className='text-decoration-none'>Writing(stories, songs, script)</Link></li>
                    
                    <li className='footerList'>
                    <Link to='/madmamAcademy' className='text-decoration-none'>MADMAM Academy</Link>
                    </li>
                    <li className='footerList'>
                    <Link to='/madmamStore' className='text-decoration-none'>MADMAM Store</Link>
                    </li>
                    <li className='footerList'>
                    <Link to='/madmamSchoolSystem' className='text-decoration-none'>MADMAM School System</Link>
                    </li>
                    <li className='footerList'>
                    <Link to='/artistManagement' className='text-decoration-none'>Artist Management</Link>
                    </li>

                </List>
                
            </Col>

            <Col sm='3'>
            <CardText>Programs</CardText>
            <List type='unstyled'>
            <li className='footerList'>Email: info@MADMAM.com </li>
            </List>
            
            
                
            </Col>
        </Row>
        <Row>
            <Col sm='4' className='text-center'>
            <p>
                Created By: Cube International Limited
            </p>
            </Col>
            <Col sm='4' className='text-center'>
            <p>All Right Reserved </p>
            </Col>
            <Col sm='4' className='text-center'>
            <p>CopyRight  { year}</p>
            </Col>
            
            
        </Row>

    </div>
  )
}

export default Footer