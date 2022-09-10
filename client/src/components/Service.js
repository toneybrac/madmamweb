import React from 'react'

import ServiceSlide from './ServiceSlide';



export default function Srvice() {
  return (
    <div>
        <div className='my-4 mx-5' >
        <h1 className='text-center pb-2 mx-5' style={{ borderBottom: '5px solid black'}}>Services Offer</h1>
        </div>

        <div className='my-4'>
            <h3 className='text-center'>Feel Free To Choose From The Numerous Services Offered By MADMAM</h3>
            </div>

            <div >
              
              <ServiceSlide />
            </div>
      
    </div>
  )
}
