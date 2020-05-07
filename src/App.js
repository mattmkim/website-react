import React from 'react'
import './App.css';
import {Navbar, Nav, NavItem, Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import Profile from './Components/Profile';
import Feed from './Components/Feed';

export default () => {

    return (
        <div>
            <div className="App wrapper">
                <Container className="navbar-container" fluid>
                    <Navbar className="navbar" fixed="top" bg="faded" variant="light">
                        <Nav className="mx-auto">
                            <Nav.Link >Home</Nav.Link>
                            <Nav.Link >Projects</Nav.Link>
                            <Nav.Link >Music</Nav.Link>  
                        </Nav>
                        <div class="icon-wrapper">
                            <div class="icons">
                                <a href="https://www.linkedin.com/in/matthew-kim-874ab1150/" target="_blank"> 
                                    <i class="fab fa-linkedin fa-2x"></i>
                                </a>
                            </div>  
                            <div class="icons">
                                <a href="https://github.com/mattmkim?tab=repositories" target="_blank">
                                    <i class="fab fa-github-square fa-2x"></i>
                                </a>
                            </div>
                            <div class="icons">
                                <a href="https://www.facebook.com/matthew24kim" target="_blank">
                                    <i class="fab fa-facebook-square fa-2x"></i>
                                </a>
                            </div>
                            <div class="icons"> 
                                <a href="mailto:mattmkim@seas.upenn.edu" target="_blank">
                                    <i class="fas fa-envelope-square fa-2x"></i>
                                </a>
                            </div>
                        </div>
                    </Navbar>
                    

                </Container>

                
                <Profile />
                <Feed />
            </div>
        </div>

  );
}