import React from 'react';
import { Button, Card, CardText, Row, Col } from 'reactstrap';
import madH from '../../assets/madH.jpg';
import Rapper1 from '../../assets/rapper1.jpg';
import Dance1 from '../../assets/dance1.jpg';
import Singer1 from '../../assets/singer1.jpg';
import '../styles/ProjectShowIt.css';

function MadmamH() {
  return (
    <div style={{marginTop: "100px"}} className='px-3' >
        <div className=' py-5 px-5 rounded-3 shadow-lg p-3 mb-5 rounded'>
        <h1 className='text-center border border-1 rounded-1 p-3 sh1'> Madmam House</h1>
        <p className='text-center py-2 ct2' style={{color:'#ff6666'}}>A program that features actors and actresses for one month in a reality show.<br />
        Contestants are placed in a house to display different qualities of act.</p>

        </div>

       <div className='border border-0 py-4 px-4' style={{background: "whitesmoke", borderRadius: "10px"}} >
        

       <CardText className='text-center'>This program is pending..</CardText>
        
        </div> 
        
    </div>
  )
}

export default MadmamH;
