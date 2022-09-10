import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Media, Col, Row, Button } from 'reactstrap';
import './styles/Post.css';

function Post() {
    const [data, setData] = useState([]);
 

  
    useEffect(() => {
      //getPost();
      
    });
  
    const getPost = () => {
      axios.get('http://localhost:5000/post')
      .then((res) => 
      setData(res.data))
      
      
      .catch((err) => console.log(err, 'it has an error'));
    };

  return (
    <div >
        
        <Row className=''>
        
        <Media className='d-flex justify-content-evenly'>
            
              

            {
        data.map((singleData) => {
          const base64String = btoa(
            String.fromCharCode(...new Uint8Array(singleData.img.data.data))
          );
         return <Row className='card1 postRow d-flex '>
          <Col sm='4'> 
         <img src={`data:image/png; base64, ${base64String}`} alt='img' className=' imgCardP img-fluid  mx-4 mb-3'  /> 
         </Col>

         <Col>
           <p>{singleData.title}</p>
           <p>{singleData.desc}</p>
           <Button color='primary'>View More</Button>
         </Col>
         </Row>
          
        })
      }
      

     
              
            
            
            

        </Media>
        

      
        </Row>
    </div>
  )
}

export default Post;