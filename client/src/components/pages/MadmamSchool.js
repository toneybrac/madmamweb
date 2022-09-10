import React from 'react';
import { Button, Card, CardText, Row, Col } from 'reactstrap';
import madH from '../../assets/madH.jpg';
import Rapper1 from '../../assets/rapper1.jpg';
import Dance1 from '../../assets/dance1.jpg';
import Singer1 from '../../assets/singer1.jpg';
import '../styles/ProjectShowIt.css';

function MadmamSchool() {
  return (
    <div style={{marginTop: "100px"}} className='px-3' >
        <div className=' py-5 px-5 rounded-3 shadow-lg p-3 mb-5 rounded'>
        <h1 className='text-center border border-1 rounded-1 p-3 sh1'> Madmam School System</h1>
        <p className='text-center py-2 ct2' style={{color:'#ff6666'}}>MADMAM School System is a regular Academic school but with a focus
        on musics and arts as elective courses. We focus on kids from nursery to grade 2 and work inline with parents to decide the passion of their kids to focus on
        as extracurricular activities. From grade 3 to grade 6, they start theoretical learning in 
        specialize areas. Then from 7th grade to 12th grade, we will add practice to theory, and when
        graduating from high school, they will come out with an academic diploma plus a certificate
        in their specialize field.</p>

        </div>

       <div className='border border-0 py-4 px-4' style={{background: "whitesmoke", borderRadius: "10px"}} >
        

       <CardText className='text-center'>This program is pending..</CardText>
        
        </div> 
        
    </div>
  )
}

export default MadmamSchool;
