import React, {Component} from 'react'
import './App.css';
import {Navbar, Nav, Container, Dropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Profile from './Components/Profile';
import Feed from './Components/Feed';
import Projects from './Components/Projects';
import withWindowDimensions from './Components/withWindowDimensions.jsx'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 'home'
        }
    }

    renderBody() {
        var currentPage = this.state.currentPage;

        if (currentPage === 'home') {
            return (
            <div>
                <Profile />
                <Feed />
            </div>
            );
        } else if (currentPage === "projects") {
            return (
                <div>
                    <Projects />
                </div>
            )
        }
    }

    render() {
        if (this.props.isMobileSized) {
            return (
                <div>
                    <div class="wrapper-mobile">
                        <Container className="navbar-container" fluid>
                            <Navbar className="navbar" fixed="top" bg="faded" variant="light">
                                <Dropdown>
                                    <Dropdown.Toggle className="toggle"> </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item><Nav.Link onClick={() => { this.setState({currentPage: 'home'})}}>Home</Nav.Link></Dropdown.Item>  
                                        <Dropdown.Item><Nav.Link onClick={() => { this.setState({currentPage: 'projects'})}}>Projects</Nav.Link></Dropdown.Item>
                                        <Dropdown.Item href="/Resume_2021.pdf">Resume</Dropdown.Item>
                                        <Dropdown.Item href="mailto:mattmkim@seas.upenn.edu">Contact</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <div class="icon-wrapper-mobile">
                                    <div class="icons">
                                        <a href="https://www.linkedin.com/in/matthew-kim-874ab1150/" target="_blank"> 
                                            <i class="fab fa-linkedin-in"></i>
                                        </a>
                                    </div>  
                                    <div class="icons">
                                        <a href="https://github.com/mattmkim?tab=repositories" target="_blank">
                                            <i class="fab fa-github"></i>
                                        </a>
                                    </div>
                                    <div class="icons">
                                        <a href="https://www.facebook.com/matthew24kim" target="_blank">
                                            <i class="fab fa-facebook"></i>
                                        </a>
                                    </div>
                                    <div class="icons">
                                        <a href="https://medium.com/@mattmkim" target="_blank">
                                            <i class="fab fa-medium-m"></i>
                                        </a>
                                    </div>
                                </div>
                            </Navbar>
                        </Container>      
                        {this.renderBody()}
                        
                    </div>
                </div>
        
          );
        } else {
            return (
                <div>
                    <div className="App wrapper">
                        <Container className="navbar-container" fluid>
                            <Navbar className="navbar" fixed="top" bg="faded" variant="light">
                                <div class="name">
                                    Matthew Kim
                                </div>
                                <Nav className="mx-auto">
                                    <Nav.Link onClick={() => { this.setState({currentPage: 'home'})}}>Home</Nav.Link>
                                    <Nav.Link onClick={() => { this.setState({currentPage: 'projects'})}}>Projects</Nav.Link>
                                    <Nav.Link href="/Resume_2021.pdf" target="_blank">Resume</Nav.Link>
                                    <Nav.Link href="mailto:mattmkim@seas.upenn.edu">Contact</Nav.Link>
                                </Nav>
                                <div class="icon-wrapper">
                                    <div class="icons">
                                        <a href="https://www.linkedin.com/in/matthew-kim-874ab1150/" target="_blank"> 
                                            <i class="fab fa-linkedin-in"></i>
                                        </a>
                                    </div>  
                                    <div class="icons">
                                        <a href="https://github.com/mattmkim?tab=repositories" target="_blank">
                                            <i class="fab fa-github"></i>
                                        </a>
                                    </div>
                                    <div class="icons">
                                        <a href="https://www.facebook.com/matthew24kim" target="_blank">
                                            <i class="fab fa-facebook"></i>
                                        </a>
                                    </div>
                                    <div class="icons">
                                        <a href="https://medium.com/@mattmkim" target="_blank">
                                            <i class="fab fa-medium-m"></i>
                                        </a>
                                    </div>
                                </div>
                                
                            </Navbar>
                        </Container>      
                        {this.renderBody()}
                        
                    </div>
                </div>
        
          );
        }
        
    }
}
 
export default withWindowDimensions(App);
