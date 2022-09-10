import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './styles/ServiceSlide.css';

import ico from '../assets/logo-1.png';
import mad from '../assets/mad.jpg';
import madAP from '../assets/madAP.jpg';
import madD from '../assets/madD.jpg';
import madH from '../assets/madH.jpg';
import { MdOutlineEditNote, MdSchool, MdLocalGroceryStore } from "react-icons/md";
import { FaItunes, FaVideo, FaSchool } from "react-icons/fa";
import { GiMicrophone } from "react-icons/gi";
/*import apd from './icons/apd.png';
import hosting from './icons/hosting.png';
import cons from './icons/cons.png';
import database from './icons/database.png';
import cc from './icons/cc.png';
import cctv from './icons/cctv.png';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { DesktopOutline } from 'react-ionicons';
import { PhonePortraitOutline } from 'react-ionicons'; */


function ServiceSlide() {

 
  

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);


  
  const [data, setData] = useState([]);

  

    
    
     
  return (
    
    <>
      <div className='slider-container'>
              
         <div className='slider--main'>

              <div className='card1'  id='ccc'>
               <div className='item11'>
               <FaItunes size={120} color={'#ff0e21'} />
             </div>
             <div className='item-title1'>
               <h2>Music Production</h2>
             </div>
             <div className='item-disp'>
             <Button color="dark" outline > Read More </Button>
               
             </div>
             
             
             </div>
             <div className='card1'>
             <div className='item11' >
             <FaVideo size={120} color={'#ff0e21'} />
             </div>
             <div className='item-title1'>
               <h2>Video Production</h2>
             </div>
             <div className='item-disp'>
             <Button color="dark" outline > Read More </Button>
             </div>
             
             
             </div>
             <div className='card1'>
             <div className='item11'>
             <MdOutlineEditNote size={120} color={'#ff0e21'} />
             </div>
             <div className='item-title1'>
               <h2>Writing</h2>
             </div>
             <div className='item-disp'>
             <Button color="dark" outline > Read More </Button>
             </div>
             
            
             </div>
             <div className='card1'>
             <div className='item11'>
             <MdSchool size={120} color={'#ff0e21'} />
             </div>
             <div className='item-title1'>
               <h2>Madmam Academy</h2>
             </div>
             <div className='item-disp'>
             <Button color="dark" outline > Read More </Button>
             </div>
            
             
             </div>
             <div className='card1'>
             <div className='item11'>
             <MdLocalGroceryStore size={120} color={'#ff0e21'} />
             </div>
             <div className='item-title1'>
               <h2>Madmam Store</h2>
             </div>
             <div className='item-disp'>
             <Button color="dark" outline > Read More </Button>
             </div>
             
            
             </div>
             <div className='card1'>
             <div className='item11'>
             <FaSchool size={120} color={'#ff0e21'} />
             </div>
             <div className='item-title1'>
               <h2>Madmam School System</h2>
             </div>
             <div className='item-disp'>
             <Button color="dark" outline > Read More </Button>
             </div>
             
             
             </div>

             <div className='card1'>
             <div className='item11'>
             <GiMicrophone size={120} color={'#ff0e21'} />
             </div>
             <div className='item-title1'>
               <h2>Artist Management</h2>
             </div>
             <div className='item-disp'>
             <Button color="dark" outline > Read More </Button>
             </div>
             
             
             </div>
            
           
            
         </div>
        
     </div>
    </>
  );
}

export default ServiceSlide;
