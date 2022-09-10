import React, { useState, useEffect, useRef } from 'react';
import { Image, Video } from 'cloudinary-react';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage, AdvancedVideo, lazyload } from '@cloudinary/react';
import axios from 'axios';
import {  TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, CardBody } from 'reactstrap';
import classnames from 'classnames';
import './styles/Archive.css';



const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.REACT_APP_CLOUDINARY_NAME
  }
});

const VideoPreview = ({ video }) => {
  const playerRef = useRef();

  function onMouseOver() {
    playerRef.current.videoRef.current.play();
  }

  function onMouseOut() {
    playerRef.current.videoRef.current.pause();
  }

  return (
    <div  onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
      <AdvancedImage
        cldImg={cld.image(video.id).setAssetType('video').delivery('q_auto').format('auto:image')}
      />
      <AdvancedVideo
        ref={playerRef}
        loop
        muted
        width="100%"
        cldVid={cld.video(video.id).effect('e_preview:duration_4').delivery('q_auto').format('auto')}
        plugins={[lazyload()]}
      />

      <h3 >
        
        <a href={video.link} rel="noreferrer">
          { video.title }
          </a> 

          
      </h3>
    </div>
  )
}


export default function Archive(props) {
  const [activeTab, setActiveTab] = useState('1');
  


  const [imageIds, setImageIds] = useState();
    const loadImages = async () => {
        try {
            const res = await fetch('/api/images');
            const data = await res.json();
            setImageIds(data);
        } catch (err) {
            console.error(err);
        }
    };

    const [videoIds, setVideoIds] = useState();
    const loadVideos = async () => {
        try {
            const res = await fetch('http://localhost:3001/uploadVideo');
            const data = await res.json();
            setVideoIds(data);
            console.log(data);
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        loadVideos();
        loadImages();
    }, []);

/*
    useEffect(() => {
        loadImages();
    }, []);
    */

return (
    <div>
        <div>
            <h1 className='text-center pt-5 pb-5'>Archives</h1>
        </div>
        <Nav tabs className='arch'>
          <NavItem >
            <NavLink  id='tabName1' style={{cursor: 'pointer'}} 
              className={activeTab == '1' ? 'active' : ''} onClick={() => setActiveTab('1')}
            >
              Gallery
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink id='tabName2' style={{cursor: 'pointer'}}
              className={activeTab == '2' ? 'active' : ''} onClick={() => setActiveTab('2')}
            >
              Videos
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink id='tabName3' style={{cursor: 'pointer'}}
              className={activeTab == '3' ? 'active' : ''} onClick={() => setActiveTab('3')}
            >
              Audios
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab} classNametabBoard style={{paddingBottom: '80px'}}>
          <TabPane tabId="1" className='tabBoard'>
          <Row className='px-4 py-5'>
          <h1 className='pb-2'>MADMAM GALLERY</h1>
         
          </Row>

          <div className='d-flex justify-content-evenly bg-whitesmoke mx-4' style={{marginBottom: '20px'}}>
            
              
              <div className="gallery px-5 mx-auto">
              {imageIds &&
                    imageIds.map((imageId, index) => (
                      
                        <Image className='p-2   col-sm-3'
                            key={index}
                            cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
                            publicId={imageId}
                            width="300"
                            crop="scale"
                            
                        />
                        
                    ))}
                    </div>


             
            
            
            </div>
          
          
         
         
              
          

            
          </TabPane>
          <TabPane tabId="2" className='tabBoard'>
          <Row className='px-4 py-5'>
            <h1 className='pb-2'>MADMAM VIDEOS</h1>
            </Row>

              <div className='gallery px-5 mx-auto'>
                
                {videoIds &&
                    videoIds.map((videoId, index) => (
                      
                        <Video className='p-2   col-sm-3'
                            key={index}
                            cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
                            publicId={videoId}
                            width="360"
                            height="300"
                            controls
                            
                        />
                        
                    ))}
                
              </div>
              
              
              
            
            <br />
          </TabPane>
          <TabPane tabId="3" className='tabBoard'>
          <Row className='px-4 py-5'>
            <h1 className='pb-5'>MADMAM AUDIOS</h1>
              <Col sm="3">
                <Card body className=''>
                  <CardTitle>Pending</CardTitle>
                  
                </Card>
              </Col>
              
              
            </Row>
            <br />
          </TabPane>
        </TabContent>
    </div>
  );
}