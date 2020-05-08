import React from 'react'
import './Style/Projects.css'
import minesweeper from './minesweeper.png'
import bball from './empty.png'
import ppi from './ppi.png'
import chatbot from './chatbot.png'
import facebook from './facebook.png'
import safety from './safety.png'
import roads from './roads.png'
import {Container, Row, Card, Image, Button} from 'react-bootstrap';

class Projects extends React.Component {
    render() {
        return (
            <div>
                <Container className="project-container">
                    <h2 class="project-title">Projects</h2>

                    <Card className="project-card">
                        <div class="project-image-wrapper">
                            <Image src={roads} className="image" />
                        </div>
                        <div class="info-wrapper">
                            <h3><span class="project-name"> Safe Roads </span></h3>
                            <p class="project-info">Final project for CIS 550: Database and Information Systems. Web app to explore the relationship between U.S. accident and weather data.</p>
                            <p class="project-info"><span class="tech-used">Tech Used: </span>Javascript, Node, Express, HTML, CSS, SQL, MongoDB, Heroku </p>
                            <Button href="https://github.com/mattmkim/safe-roads">View Project <i class="fas fa-external-link-alt"></i></Button>
                        </div>
                    </Card>

                    <Card className="project-card">
                        <div class="project-image-wrapper">
                            <Image src={safety} className="image" />
                        </div>
                        <div class="info-wrapper">
                            <h3><span class="project-name"> Penn Safety </span></h3>
                            <p class="project-info">Final project for CIS 350: Software Engineering. Platform to centralize student submitted tips and alerts.</p>
                            <p class="project-info"><span class="tech-used">Tech Used: </span>Javascript, Node, Express, HTML, CSS, MongoDB, Google Maps API</p>
                            <Button href="https://github.com/mattmkim/penn-safety">View Project <i class="fas fa-external-link-alt"></i></Button>
                        </div>
                    </Card>

                    <Card className="project-card">
                        <div class="project-image-wrapper">
                            <Image src={chatbot} className="image" />
                        </div>
                        <div class="info-wrapper">
                            <h3><span class="project-name"> Facebook Messenger Chatbot </span></h3>
                            <p class="project-info">Built a chatbot to help facilitate new relationships in my community; algorithm pairs users to meet with each other weekly.</p>
                            <p class="project-info"><span class="tech-used">Tech Used: </span>Javascript, Node, Express, HTML, CSS, EJS, MongoDB</p>
                            <Button href="https://github.com/mattmkim/rcf-ladders-chatbot">View Project <i class="fas fa-external-link-alt"></i></Button>
                        </div>
                    </Card>

                    <Card className="project-card">
                        <div class="project-image-wrapper">
                            <Image src={facebook} className="image" />
                        </div>
                        <div class="info-wrapper">
                            <h3><span class="project-name"> Facebook Clone </span></h3>
                            <p class="project-info">Final project for NETS 212: Scalable and Cloud Computing.</p>
                            <p class="project-info"><span class="tech-used">Tech Used: </span>React, Node, Express, Javascript, HTML, CSS, Hadoop MapReduce, DynamoDB</p>
                            <Button href="https://github.com/mattmkim/facebook-clone">View Project <i class="fas fa-external-link-alt"></i></Button>
                        </div>
                    </Card>

                    <Card className="project-card">
                        <div class="project-image-wrapper">
                            <Image src={ppi} className="image" />
                        </div>
                        <div class="info-wrapper">
                            <h3><span class="project-name"> Protein-Protein Interface Filtering </span></h3>
                            <p class="project-info">Developed naive and machine learning approach to filtering out false protein-protein interface predictions. Developed clustering algorithm to consider both spatial and chemical properties of atoms.</p>
                            <p class="project-info"><span class="tech-used">Tech Used: </span>Python, Pandas, Scipy, Pytorch, VMD</p>
                            <Button href="https://github.com/mattmkim/minesweeper">View Project <i class="fas fa-external-link-alt"></i></Button>
                        </div>
                    </Card>

                    <Card className="project-card">
                        <div class="project-image-wrapper">
                            <Image src={bball} className="image" />
                        </div>
                        <div class="info-wrapper">
                            <h3><span class="project-name"> All-NBA Team Prediction </span></h3>
                            <p class="project-info">Developed a machine learning model using SVMs to predict the All-NBA teams.</p>
                            <p class="project-info"><span class="tech-used">Tech Used: </span>Python, Pandas, Scikit-Learn, Matplotlib, Seaborn</p>
                            <Button href="https://github.com/mattmkim/allnba-prediction">View Project <i class="fas fa-external-link-alt"></i></Button>
                        </div>
                    </Card>


                    <Card className="project-card">
                        <div class="project-image-wrapper">
                            <Image src={minesweeper} className="image" />
                        </div>
                        <div class="info-wrapper">
                            <h3><span class="project-name"> Minesweeper </span></h3>
                            <p class="project-info">Implementation of classic minesweeper game.</p>
                            <p class="project-info"><span class="tech-used">Tech Used: </span>Java, Java Swing</p>
                            <Button href="https://github.com/mattmkim/minesweeper">View Project <i class="fas fa-external-link-alt"></i></Button>
                        </div>
                    </Card>

                </Container>
            </div>
        );
    }
}

export default Projects;