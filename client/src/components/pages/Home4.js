import { useState, useEffect, useRef } from 'react';
//import Head from 'next/head'
import { Cloudinary } from '@cloudinary/url-gen';
import { Image, Video } from 'cloudinary-react';
import { AdvancedImage, AdvancedVideo, lazyload } from '@cloudinary/react';


//import Layout from '@components/Layout';
//import Container from '@components/Container';
//import Button from '@components/Button';

//import videos from '@data/videos';

//import styles from '@styles/Home.module.scss'

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

export default function Home() {

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
    }, []);
  return (
    <div>
      <div>
        <title>My Videos</title>
        <meta name="description" content="All of my cool videos." />
      </div>

      <div>
        <h1 className="sr-only">My Videos</h1>

        <h2 >Videos</h2>

        <ul >
          {/*
          
          {videoIds.map(videoId => {
            return (
              <li key={videoId.id}>
                <VideoPreview video={videoId} />
              </li>
            )
          })} */}

{videoIds &&
                    videoIds.map((videoId, index) => (
                      
                        <Video className='p-2   col-sm-3'
                            key={index}
                            cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
                            publicId={videoId}
                            width="300"
                            height="300"
                            controls
                            
                        />
                        
                    ))}
        </ul>
      </div>
    </div>
  )
}