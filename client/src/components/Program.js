import React from 'react'
import ProgramSlide from './ProgramSlide';
import Post from './Post';




export default function Program() {
  return (
    <div>
        <div className='my-4 mx-5' >
        <h1 className='text-center pb-2 mx-5' style={{ borderBottom: '5px solid black'}}>Programs</h1>
        </div>

        <div className='my-4'>
            <h3 className='text-center'>Browse Through And Feel The Excitement</h3>
            </div>

            <div style={{background: 'whitesmoke'}}>
              <ProgramSlide />
             <Post />
            </div>
      
    </div>
  )
}
