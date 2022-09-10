import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import './styles/Archive.css';

export default class Archive extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
       
      });

      
      

      /*if (this.state.activeTab !== '1') {
      
          document.getElementById("tabName1").style.backgroundColor = "whitesmoke";
          document.getElementById("tabName2").style.backgroundColor = "white";
          document.getElementById("tabName3").style.backgroundColor = "white";
        }
        else if (this.state.activeTab !== '2') {
       
          document.getElementById("tabName1").style.backgroundColor = "white";
          document.getElementById("tabName2").style.backgroundColor = "whitesmoke";
          document.getElementById("tabName3").style.backgroundColor = "white";
        }
        else if (this.state.activeTab !== '3') {
      
          document.getElementById("tabName1").style.backgroundColor = "white";
          document.getElementById("tabName2").style.backgroundColor = "white";
          document.getElementById("tabName3").style.backgroundColor = "whitesmoke";
        }
        else {
          document.getElementById("tabName1").style.backgroundColor = "black";
        } */

    }
  };


 state = {
  data: [],
 }

 componentDidMount() {
  axios.get('http://localhost:5000/')
        .then((res) => {
          //setData(res.data))
        // this.state({photos: res.data})
        const data = res.data;
        this.setState({ data });
         })
       .catch((err) => console.log(err, 'it has an error'));
 }

 

     
        
        
        
    

 

 

  render() {

    return (
      <div>
        <div>
            <h1 className='text-center pt-5 pb-5'>Archives</h1>
        </div>
        <Nav tabs className='arch'>
          <NavItem >
            <NavLink  id='tabName1' style={{cursor: 'pointer'}} 
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Gallery
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink id='tabName2' style={{cursor: 'pointer'}}
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2');  }}
            >
              Videos
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink id='tabName3' style={{cursor: 'pointer'}}
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Audios
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab} classNametabBoard style={{paddingBottom: '80px'}}>
          <TabPane tabId="1" className='tabBoard'>
          <Row className='px-4 py-5'>
          <h1 className='pb-5'>MADMAM GALLERY</h1>
         
          </Row>
              
          {
        this.state.data.map((singleData) => {
          const base64String = btoa(
            String.fromCharCode(...new Uint8Array(singleData.img.data.data))
          );
         return <img src={`data:image/png; base64, ${base64String}`} alt='img' className='card1'  width="300"/>
        })
      }

            {/*
          <Row className='px-4 py-5'>
            <h1 className='pb-5'>MADMAM GALLERY</h1>
              <Col sm="3">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button className='pt-5 pb-5'>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="3">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button className='pt-5 pb-5'>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="3">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button className='pt-5 pb-5'>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="3">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button className='pt-5 pb-5'>Go somewhere</Button>
                </Card>
              </Col>
            </Row>
            <Row className='mx-1 my-4'>
            <h1></h1>
              <Col sm="3">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button className='pt-5 pb-5'>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="3">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button className='pt-5 pb-5'>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="3">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button className='pt-5 pb-5'>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="3">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button className='pt-5 pb-5'>Go somewhere</Button>
                </Card>
              </Col>
            </Row>
            <br />
    */}
          </TabPane>
          <TabPane tabId="2" className='tabBoard'>
          <Row className='px-4 py-5'>
            <h1 className='pb-5'>MADMAM VIDEOS</h1>
              <Col sm="3">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button className='pt-5 pb-5'>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="3">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button className='pt-5 pb-5'>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="3">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button className='pt-5 pb-5'>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="3">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button className='pt-5 pb-5'>Go somewhere</Button>
                </Card>
              </Col>
            </Row>
            <Row className='mx-1 my-4'>
            <h1></h1>
              <Col sm="3">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button className='pt-5 pb-5'>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="3">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button className='pt-5 pb-5'>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="3">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button className='pt-5 pb-5'>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="3">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button className='pt-5 pb-5'>Go somewhere</Button>
                </Card>
              </Col>
            </Row>
            <br />
          </TabPane>
          <TabPane tabId="3" className='tabBoard'>
          <Row className='px-4 py-5'>
            <h1 className='pb-5'>MADMAM AUDIOS</h1>
              <Col sm="3">
                <Card body className=''>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button className='pt-5 pb-5'>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="3">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button className='pt-5 pb-5'>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="3">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button className='pt-5 pb-5'>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="3">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button className='pt-5 pb-5'>Go somewhere</Button>
                </Card>
              </Col>
            </Row>
            <Row className='mx-1 my-4'>
            <h1></h1>
              <Col sm="3">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button className='pt-5 pb-5'>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="3">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button className='pt-5 pb-5'>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="3">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button className='pt-5 pb-5'>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="3">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button className='pt-5 pb-5'>Go somewhere</Button>
                </Card>
              </Col>
            </Row>
            <br />
          </TabPane>
        </TabContent>
      </div>
    );
  }
}