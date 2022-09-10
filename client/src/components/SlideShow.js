import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import madH from '../assets/madH.jpg';
import madAP from '../assets/madAP.jpg';
import mad from '../assets/mad.jpg';
import madD from '../assets/madD.jpg';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    //src: 'https://picsum.photos/id/123/1200/400',
   src: mad,
    altText: 'Slide 1',
    caption: 'Slide 1',
    key: 1
  },
  {
    //src: 'https://picsum.photos/id/456/1200/400',
    src: madD,
    altText: 'Slide 2',
    caption: 'Slide 2',
    key: 2
  },
  {
    //src: 'https://picsum.photos/id/678/1200/400',
   src: madAP,
    altText: 'Slide 3',
    caption: 'Slide 3',
    key: 3
  },

  {
    //src: 'https://picsum.photos/id/678/1200/400',
   src: madH,
    altText: 'Slide 4',
    caption: 'Slide 4',
    key: 4
  }
 
 
];

const SlideShow = (args) => {

  

  

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
   
    return (
      <CarouselItem
      className="custom-tag"
      tag="div"
      
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
       
       key={item}
      >
        <img src={item.src} alt={item.altText} style={{ width: "100%", height: "100vh"}}/>
       
        
       {/*<CarouselCaption captionText={item.caption} captionHeader={item.caption} /> */}
      </CarouselItem>
    );
  });

  return (
    <div>
         <style>
        {
          `.custom-tag {
              max-width: 100%;
              height: 640px;
              background: black;
            }`
        }
      </style>
    <Carousel 
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
    </div>
  );
}

export default SlideShow;