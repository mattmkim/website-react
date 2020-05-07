import React from 'react'
import './Style/Projects.css'
import minesweeper from './minesweeper.png'
import bball from './empty.png'
import ppi from './ppi.png'
import {Container, Row, Card, Image, Button} from 'react-bootstrap';

class Projects extends React.Component {
    render() {
        return (
            <div>
                <Container className="project-container">
                    <h2 class="project-title">Projects</h2>

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