import React, { useState, useEffect } from 'react';
import {Image} from 'cloudinary-react';
import SlideShow from '../SlideShow';
import Program from '../Program';
import Service from '../Service';
import Archive from '../Archive';
import About from '../About';
import Contact from '../Contact';


export default function Home() {

  const [imageIds, setImageIds] = useState();


  //const [data, setData] = useState([]);

  const loadImages = async () => {
    try {
      const res = await fetch('/api/images');
      const data = await res.json();
      console.log(data);
      setImageIds(data);

      
    } catch (error) {
      console.error(error);
      
    }
  }

  useEffect(() => {
    //loadImages();

  }, [])
  return (
    <div>
    
    <SlideShow />
    <Program />
    <Service />
    <Archive />
    <About />
    <Contact />
       
      
       {/*
                  imageIds && imageIds.map((imageId, index) => {
                    <Image 
                    key={index}
                    cloudName="cube-international-incorporated"
                    publicId={imageId}
                    width="300"
                    crop="scale"
                    />
                  })
                */}
               
        
    </div>
  )
}
