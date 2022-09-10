import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, 
  Form,
  Col,
  Card,
  FormGroup,
  Row,
  Button, ModalFooter,
  Input } from 'reactstrap';
  import logo from '../assets/logo-1.png';




export default class Navbar1 extends React.Component {

  state={
    openModal : false
}

onClickButton = e =>{
    e.preventDefault()
    this.setState({openModal : true})
    if ( {openModal : true}) {
      this.toggle()
    }
      
    
}



onCloseModal = ()=>{
    this.setState({openModal : false})
}

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };

    
  }





  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }





  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" className="fixed-top shadow p-3 mb-5 bg-body">
          <Col xs='2'>
          <NavbarBrand href="/">
          <img  src={logo} alt="Logo" className='logo' width={100}  />
          </NavbarBrand>
          </Col>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Col xs='7'>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link onClick={this.toggle} to='/' className='text-decoration-none'>
                <NavLink>Home</NavLink>
                </Link>
               
              </NavItem>
              
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Programs
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    
                    <Link onClick={this.toggle} to='/projectShowIt' className='text-decoration-none'>
                      <NavLink>
                      Project Show It
                      </NavLink>
                   
                    </Link>
                    
                    
                  </DropdownItem>
                  <DropdownItem>
                  <Link onClick={this.toggle} to='/interHighSchool' className='text-decoration-none'>
                  <NavLink>
                    Inter-High School Musics & Dance
                    </NavLink>
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link onClick={this.toggle} to='/adolescenceSportsMeet' className='text-decoration-none'>
                    <NavLink>
                    Adolescent Sport Meet
                    </NavLink>
                    </Link>
                    
                  </DropdownItem>
                  <DropdownItem>
                  
                    <Link onClick={this.toggle} to='/madmamH' className='text-decoration-none'>
                    <NavLink>
                    MADMAM House
                    </NavLink>
                    
                    </Link>
                  </DropdownItem>
                  
                </DropdownMenu>
              </UncontrolledDropdown>
              
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Services
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    
                  <Link onClick={this.toggle} to='/musicProduction' className='text-decoration-none'>
                  <NavLink>
                    Music Production
                    </NavLink>
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                  <Link onClick={this.toggle} to='/videoProduction' className='text-decoration-none'>
                  <NavLink>
                    Video Production
                    </NavLink>
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                  <Link onClick={this.toggle} to='/writing' className='text-decoration-none'>
                  <NavLink>
                    Writing(Stories, Songs, Scripts)
                    </NavLink>
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                  <Link onClick={this.toggle} to='/madmamA' className='text-decoration-none'>
                  <NavLink>
                    MADMAM Academy
                    </NavLink>
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                  <Link onClick={this.toggle} to='/madmamS' className='text-decoration-none'>
                  <NavLink>
                    MADMAM Store
                    </NavLink>
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                  <Link onClick={this.toggle} to='/madmamSchool' className='text-decoration-none'>
                  <NavLink>
                    MADMAM School System
                    </NavLink>
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                  <Link onClick={this.toggle} to='/artistM' className='text-decoration-none'>
                    <NavLink>
                    MADMAM Artist Management
                    </NavLink>
                    </Link>
                  </DropdownItem>
                  
                </DropdownMenu>
              </UncontrolledDropdown>

              <NavItem>
              <Link onClick={this.toggle} to='/archive' className='text-decoration-none'>
                <NavLink>Archive</NavLink>
                </Link>
              </NavItem>
              <NavItem>
              <Link onClick={this.toggle} to='/about' className='text-decoration-none'>
                <NavLink>About</NavLink>
                </Link>
              </NavItem>
              <NavItem>
              <Link onClick={this.toggle} to='/contact' className='text-decoration-none'>
                <NavLink>Contact</NavLink>
                </Link>
              </NavItem>
              
            </Nav>
            </Col>
            <Col xs='6'>
            <Form className="fSearch" >
              <Row>
              
              
                <FormGroup row className="mb-0 mr-sm-1 mb-sm-2 gg">
                <Col sm={2}>
              <Button color="dark" outline className='search'> Search </Button>
              </Col>
                <Col sm={4}>
              <Input  type='search' placeholder='Search' className='txtSearch' />
              </Col>
              <Col sm={2}>
              <Button color="danger" onClick={this.toggle} outline className='donate'> <Link to='/donate' style={{color:'inherit', textDecoration:'inherit'}}>Donate</Link> </Button>
              <Modal open={this.state.openModal} onClose={this.onCloseModal} >
                
                <br />
                <br />
                
                    <div>
                      <Row>

                        
                         <Card>
                          <p className='title1'>Ministry Corporate Account Bank</p>
                          <p className='title2'>UBA</p>
                          <Row className='text-center'>
                            <p className='tItem'>Title: <span className='t'>Mark Deah Ministry of Arts & Music Inc</span></p>
                            <p className='tItem'>Number: <span className='t'>53040160001017</span></p>
                          </Row>
                         </Card>

                         <Card>
                          <p className='title1'>Ministry Operation Account Bank</p>
                          <p className='title3'>LBDI</p>
                          <Row className='text-center'>
                            <p className='tItem'>Title: <span className='t'>Mark Deah Ministry of Arts & Music(MADMAM)</span></p>
                            <p className='tItem'>Number: <span className='t'>010USD21804001002 / 010LRD21804001001</span></p>
                          </Row>
                         </Card>

                         <Card>
                          <p className='title1'>Mobile Money</p>
                          
                          <Row className='text-center'>
                            <p className='tItem' >MTN: <span className='t'>0886694920</span></p>
                            <p className='tItem' >SendWave: <span className='t'>0777694920</span></p>
                          </Row>
                         </Card>
                         

                         
                      </Row>
                    </div>
                    <ModalFooter>
          <Button color="primary">
            <Link to='/contact' onClick={this.onCloseModal} style={{color:'inherit', textDecoration:'inherit'}}>Contact Us</Link>
            
          </Button>{' '}
          <Button color="secondary" onClick={this.onCloseModal}>
            Cancel
          </Button>
        </ModalFooter>
                </Modal> 
              </Col>
              
              <Col sm={2}>
              <Button onClick={this.toggle} color="dark" outline className='login'> <Link to='/loginM' style={{color:'inherit', textDecoration:'inherit'}}>Login</Link> </Button>
              </Col>
              </FormGroup>
                 
              
              </Row>
              
              
            </Form>
            </Col>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
