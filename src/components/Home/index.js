import React, { Component } from 'react';
import {Navbar, Nav,NavItem, FormGroup, FormControl, InputGroup, Glyphicon, Image} from 'react-bootstrap';
import {
    Link
  } from 'react-router-dom';
import style from './style.css';
import MainContainer from './MainContainer';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'Allane',
        };
      }
    render(){
        return(
            <div className="container-fluid">
            <div className="container-fluid">
                <Navbar fixedTop collapseOnSelect className="menu">
                    <Navbar.Header>
                            <Navbar.Brand>
                                    <Link to="/home"><Image src="./src/assets/brand.png" alt="LAB" responsive/></Link>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Navbar.Form pullLeft>
                            <form>
                                <FormGroup id="search">
                                    <InputGroup>
                                            <InputGroup.Addon className="glysearch"> <Glyphicon glyph="search" /></InputGroup.Addon>
                                            <FormControl type="text" placeholder="Search" />
                                    </InputGroup>
                                </FormGroup>
                            </form>
                        </Navbar.Form>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#"><Glyphicon glyph="glyphicon glyphicon-question-sign" /></NavItem>
                            <NavItem eventKey={2} href="#"><Glyphicon glyph="glyphicon glyphicon-bell" /></NavItem>
                            <NavItem eventKey={3} href="#"><Glyphicon glyph="glyphicon glyphicon-user" /><span className="usernameText">{this.state.username}</span></NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <div id="bodyContent">
                <MainContainer />
            </div>
            </div>
        );
    }
}

export default Home;