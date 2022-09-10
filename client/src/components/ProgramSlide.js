import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';


import { Link } from 'react-router-dom';
import './styles/ProgramSlide.css';
import { Button } from 'reactstrap';

import ico from '../assets/logo-1.png';
import mad from '../assets/mad.jpg';
import madAP from '../assets/madAP.jpg';
import madD from '../assets/madD.jpg';
import madH from '../assets/madH.jpg';
/*import apd from './icons/apd.png';
import hosting from './icons/hosting.png';
import cons from './icons/cons.png';
import database from './icons/database.png';
import cc from './icons/cc.png';
import cctv from './icons/cctv.png';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { DesktopOutline } from 'react-ionicons';
import { PhonePortraitOutline } from 'react-ionicons'; */


function ProgramSlide() {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

 const [data, setData] = useState([]);


 

 
 //console.log(data)
 

  
   

    
    
     
  return (
    
    <>
      <div className='slider-container'>
              
         <div className='slider--main'>

         

        
              <div className='card1'  id='ccc'>
               <div className='item112'>
               <img  src={mad} alt="Logo" className='logo' width={380} height={200} style={{objectFit: 'cover'}}/>
             </div>
             
             <div className='item-disp'>
             <Button color="dark" outline > Read More </Button>
             </div>
             
             
             </div>
             <div className='card1'  id='ccc'>
               <div className='item112'>
               <img  src={madAP} alt="Logo" className='logo' width={380} height={200} style={{objectFit: 'cover'}} />
             </div>
             
             <div className='item-disp'>
             <Button color="dark" outline > Read More </Button>
             </div>
             
             
             </div>
             <div className='card1'  id='ccc'>
               <div className='item112'>
               <img  src={madD} alt="Logo" className='logo' width={380} height={200} style={{objectFit: 'cover'}}/>
             </div>
             
             <div className='item-disp'>
             <Button color="dark" outline > Read More </Button>
             </div>
             
             
             </div>
             <div className='card1'  id='ccc'>
               <div className='item112'>
               <img  src={madH} alt="Logo" className='logo' width={380} height={200} style={{objectFit: 'cover'}}/>
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

export default ProgramSlide;
