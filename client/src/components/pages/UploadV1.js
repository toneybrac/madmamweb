import React from 'react';
import { Button, Card } from 'reactstrap';
class UploadV1 extends React.Component {
  constructor(props){
     super(props);
     this.state = {}
   }
  showWidget = () => {
    
    let widget = window.cloudinary.createUploadWidget({ 
       cloudName: `cube-international-incorporated`,
       uploadPreset: `videos`}, 
    (error, result) => {
      if (!error && result && result.event === "success") { 
      console.log(result.info.url); 
    }});
    widget.open()
  }
  render() {
    return (<div>
       
           <Card className='py-4 px-4 mx-4 my-4 sh1'>
            <h2 className='py-3'>Upload Video</h2>
           <Button color="primary" outline onClick={this.showWidget}> Upload Image </Button>
           </Card>
           
           </div>
    );
  }
}
export default UploadV1;