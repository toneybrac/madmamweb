import React, { Component } from 'react';
import { Link } from 'react-router';
import { CloudinaryContext, Transformation, Video } from 'cloudinary-react';
import axios from 'axios';

class Display extends Component {

    state = { videos: []};

    getVideos() {
        axios.get('http://res.cloudinary.com/cube-international-incorporated/video/list/miniflix.json')
        .then(res => {
            console.log(res.data.resources);
            this.setState({ videos: res.data.resources });
        });
    }

    componentDidMount() {
        this.getVideos();
    }

    render() {

        const { videos } = this.state;

        return (
            <div>
                <br />
                <br />
                <br />
                <br />
                <div className='col-sm-12'>
                    <CloudinaryContext cloudName='cube-international-incorporated'>
                       { videos.map((data, index) => (
                        <div className='col-sm-4' key={index}>
                             <div className='embed-responsive embed-responsive-4by3'>
                            <Video publicId={data.public_id} width='300' height='300' controls />
                        </div>
                        <div>Created at {data.created_at}</div> 

                        </div>
                       ))
                       }
                    </CloudinaryContext>
                </div>
            </div>
        );
                    
    }

}

export default Display;