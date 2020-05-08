import React, {Component} from 'react'
import './App.css';
import {Navbar, Nav, Container} from 'react-bootstrap';
import Profile from './Components/Profile';
import Feed from './Components/Feed';
import Projects from './Components/Projects';


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
        return (
            <div>
                <div className="App wrapper">
                    <Container className="navbar-container" fluid>
                        <Navbar className="navbar" fixed="top" bg="faded" variant="light">
                            <Nav className="mx-auto">
                                <Nav.Link onClick={() => { this.setState({currentPage: 'home'})}}>Home</Nav.Link>
                                <Nav.Link onClick={() => { this.setState({currentPage: 'projects'})}}>Projects</Nav.Link>
                                {/* <Nav.Link onClick={() => { this.setState({currentPage: 'music'})}}>Music</Nav.Link>   */}
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
                    {this.renderBody()}
                    
                    <div class="copy-container">
                        <p class="copy">Matthew Kim &copy; 2020 </p>
                    </div>

                    
                </div>
            </div>
    
      );
    }
}
 
export default App
