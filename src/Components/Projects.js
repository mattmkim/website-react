import React from 'react'
import './Style/Projects.css'
import {Container, Row, Card, Image, Button} from 'react-bootstrap';

class Projects extends React.Component {
    render() {
        return (
            <div>
                <Container className="project-container">
                    <h2 class="project-title">Projects</h2>

                    <div class="project-row">
                        <Card className="card-project">
                            <div class="card-body">
                                <div class="images">
                                    <i class="far fa-folder-open fa-7x"></i>
                                    <a href="https://github.com/mattmkim/safe-roads" target="_blank"> 
                                        <i class="fab fa-github fa-5x"></i>
                                    </a>
                                </div>
                                <div class="card-info">
                                    <h4 class="card-title">Safe Roads</h4>
                                    <p>Final project for CIS 550: Database and Information Systems. Web app to explore the relationship between U.S. accident and weather data.</p>
                                    <p class="card-tech">Tech Used: Javascript, Node, Express, SQL, MongoDB, Heroku</p>
                                </div>
                            </div>
                        </Card>
                        <Card className="card-project">
                            <div class="card-body">
                                <div class="images">
                                    <i class="far fa-folder-open fa-7x"></i>
                                    <a href="https://github.com/mattmkim/penn-safety" target="_blank"> 
                                        <i class="fab fa-github fa-5x"></i>
                                    </a>
                                </div>
                                <div class="card-info">
                                    <h4 class="card-title">Penn Safety</h4>
                                    <p>Final project for CIS 350: Software Engineering. Platform to centralize student submitted tips and alerts.</p>
                                    <p class="card-tech">Tech Used: Javascript, Node, Express, MongoDB, Google Maps API</p>
                                </div>
                            </div>
                        </Card>
                    </div>

                    <div class="project-row">
                        <Card className="card-project">
                            <div class="card-body">
                                <div class="images">
                                    <i class="far fa-folder-open fa-7x"></i>
                                    <a href="https://github.com/mattmkim/rcf-ladders-chatbot" target="_blank"> 
                                        <i class="fab fa-github fa-5x"></i>
                                    </a>
                                </div>
                                <div class="card-info">
                                    <h4 class="card-title">Facebook Messenger Chatbot</h4>
                                    <p>Built a chatbot using the Messenger Platform to help facilitate new relationships in my community. The bot polls and pairs users to meet with each other weekly.</p>
                                    <p class="card-tech">Tech Used: Javascript, Node, Express, EJS, MongoDB</p>
                                </div>
                            </div>
                        </Card>
                        <Card className="card-project">
                            <div class="card-body">
                                <div class="images">
                                    <i class="far fa-folder-open fa-7x"></i>
                                    <a href="https://github.com/mattmkim/ppi-filtering" target="_blank"> 
                                        <i class="fab fa-github fa-5x"></i>
                                    </a>
                                </div>
                                <div class="card-info">
                                    <h4 class="card-title">Protein-Protein Interface Filtering</h4>
                                    <p>Developed naive and machine learning approach to filtering out false protein-protein interface predictions. Developed clustering algorithm to consider both spatial and chemical properties of atoms.</p>
                                    <p class="card-tech">Tech Used: Python, Pandas, Scipy, Pytorch, VMD</p>
                                </div>
                            </div>
                        </Card>
                    </div>

                    <div class="project-row">
                        <Card className="card-project">
                            <div class="card-body">
                                <div class="images">
                                    <i class="far fa-folder-open fa-7x"></i>
                                    <a href="https://github.com/mattmkim/facebook-clone" target="_blank"> 
                                        <i class="fab fa-github fa-5x"></i>
                                    </a>
                                </div>
                                <div class="card-info">
                                    <h4 class="card-title">Facebook Clone</h4>
                                    <p>Final project for NETS 212: Scalable and Cloud Computing. Built a Facebook replica with two other classmates. </p>
                                    <p class="card-tech">Tech Used: Javascript, React, Node, Express, AWS, EC2, MapReduce</p>
                                </div>
                            </div>
                        </Card>
                        <Card className="card-project">
                            <div class="card-body">
                                <div class="images">
                                    <i class="far fa-folder-open fa-7x"></i>
                                    <a href="https://github.com/mattmkim/allnba-prediction" target="_blank"> 
                                        <i class="fab fa-github fa-5x"></i>
                                    </a>
                                </div>
                                <div class="card-info">
                                    <h4 class="card-title">All-NBA Team Prediction</h4>
                                    <p>Developed a machine learning model using SVMs to predict the All-NBA teams.</p>
                                    <p class="card-tech">Tech Used: Python, Pandas, Scikit-Learn, Matplotlib, Seaborn</p>
                                </div>
                            </div>
                        </Card>
                    </div>

                    <div class="project-row">
                        <Card className="card-project">
                            <div class="card-body">
                                <div class="images">
                                    <i class="far fa-folder-open fa-7x"></i>
                                    <a href="https://github.com/mattmkim/minesweeper" target="_blank"> 
                                        <i class="fab fa-github fa-5x"></i>
                                    </a>
                                </div>
                                <div class="card-info">
                                    <h4 class="card-title">Minesweeper</h4>
                                    <p>Implementation of the classic minesweeper game.</p>
                                    <p class="card-tech">Tech Used: Java, Java Swing</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Projects;