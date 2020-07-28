import React from 'react'
import {Container, Card, CardDeck} from 'react-bootstrap'
import penn from './upenn.png'
import monty from './monty.png'
import mailgun from './mailgun.png'
import princeton from './princeton.png'
import withWindowDimensions from './withWindowDimensions.jsx'
import './Style/Feed.css'

class Feed extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.isMobileSized) {
            return (
                <div>
                    <Container className="feed-container-mobile">
                    <h2 class="feed-title-mobile">Education</h2>
                        <Card className="feed-card">
                            <div class="content-wrapper">
                                <div class="logo-title-wrapper-mobile">
                                    <img class="feed-logo-mobile" src={penn}/>
                                    <div>
                                        <h2 class="feed-name-mobile"> University of Pennsylvania </h2>
                                        <p class="feed-date-mobile"> 2018 - 2022 &#183; 3.89 GPA </p>
                                        <ul class="feed-info-mobile">
                                    <li>Pursuing a BSE in Computer Science in the School of Engineering and Applied Sciences.</li>
                                    <li>Pursuing a Minor in Data Science in the School of Engineering and Applied Sciences.</li>
                                </ul>
                                    </div>
                                </div>
                                
                            </div>
                        </Card>
                        <Card className="feed-card">
                            <div class="content-wrapper">
                                <div class="logo-title-wrapper-mobile">
                                <img class="feed-logo-mobile" src={monty}/> 
                                    <div>
                                        <h2 class="feed-name-mobile"> Montgomery High School</h2>
                                        <p class="feed-date-mobile"> 2014 - 2018 &#183; 4.00 GPA </p>
                                        <ul class="feed-info-mobile">
                                    <li>Graduated top 10% of class.</li>
                                    <li>Involved in Model UN, Youth and Government, and Science Olympiad</li>
                                </ul>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </Card>
                    </Container>
        
                    <Container className="feed-container-mobile">
                        <h2 class="feed-title-mobile">Experience</h2>
                        <Card className="feed-card">
                            <div class="content-wrapper">
                                <div class="logo-title-wrapper-mobile">
                                    <img class="feed-logo-mobile" src={mailgun}/>
                                    <div>
                                        <h2 class="feed-name-mobile"> Software Engineering Intern, Mailgun </h2>
                                        <p class="feed-date-mobile"> May - Aug. 2020 &#183; San Antonio, TX </p>
                                        <ul class="feed-info-mobile">
                                    <li>Backend work on the Pipeline team.</li>
                                </ul>
                                    </div>
                                </div>
                                
                                
                            </div>
                        </Card>
        
                        <Card className="feed-card">
                            <div class="content-wrapper">
                                <div class="logo-title-wrapper-mobile">
                                    <img class="feed-logo-mobile" src={penn}/>
                                    <div>
                                        <h2 class="feed-name-mobile"> TA, MCIT 593: Intro to Computer Systems </h2>
                                        <p class="feed-date-mobile"> Aug. - Dec. 2019 &#183; Philadelphia, PA </p>
                                        <ul class="feed-info-mobile">
                                    <li>Teaching Assistant for MCIT 593: Introduction to Computer Systems. </li>
                                    <li>Held weekly office hours to assist students in topics such as computer systems architecture, low-level programming, and programming C; graded homework and exams.</li>
                                </ul>
                                    </div>
                                </div>
                                
                                
                            </div>
                        </Card>
        
                        <Card className="feed-card">
                            <div class="content-wrapper">
                                <div class="logo-title-wrapper-mobile">
                                    <img class="feed-logo-mobile" src={penn}/>
                                    <div>
                                        <h2 class="feed-name-mobile"> Data Science/Machine Learning Intern, <br></br>University of Pennsylvania </h2>
                                        <p class="feed-date-mobile"> May. - Aug. 2019 &#183; Philadelphia, PA </p>
                                        <ul class="feed-info-mobile">
                                    <li>Conducted research at the Penn Institute for Computational Science with the Patel Group to better understand the hydrophobicity of proteins and protein-protein interfaces. </li>
                                    <li>Developed algorithm in Python using Scipy to cluster atoms in a protein by first binning atoms based on their susceptibility to dewetting and then traversing their nearest neighbors.</li>
                                    <li>Developed a machine learning model using neural networks with Pytorch to classify atoms that were predicted to be a part of a protein-protein interface as true or false positives.</li>
                                    <li>Leveraged the HyperSearch API to optimize hyperparameters of the model.</li>
                                </ul>
                                    </div>
                                </div>
                                
                            </div>
                        </Card>
        
                        <Card className="feed-card">
                            <div class="content-wrapper">
                                <div class="logo-title-wrapper-mobile">
                                    <img class="feed-logo-mobile" src={princeton}/>
                                    <div>
                                        <h2 class="feed-name-mobile"> Research Intern, Princeton University </h2>
                                        <p class="feed-date-mobile"> June - Aug. 2017 &#183; Princeton, NJ </p>
                                        <ul class="feed-info-mobile">
                                    <li>Analyzed the relationship between dust optical depth and precipitation over Australia during the El Niño-Southern Oscillation Phenomenon to better understand the effect of natural aerosols on hydrology. </li>
                                    <li>Used Python and packages such as Numpy, Pandas, Scikit-learn, and Matplotlib to access and process data from +10,000 NASA HDF5 and net-CDF4 satellite data files.</li>
                                </ul>
                                    </div>
                                </div>
                                
                               
                            </div>
                        </Card>
                    </Container>
        
                    <Container className="tech-container-mobile">
                        <h2 class="feed-title-mobile">Technologies</h2>
                            <Card className="tech-card-mobile">
                            <div class="content-wrapper-mobile">
                                <div class="title-wrapper-mobile">
                                    <h2 class="feed-name-mobile">Languages</h2> 
                                </div>
                                    
                                <p class="tech-info-mobile">Java, Golang, Javascript, Python</p>
                            </div>
                            </Card>
                            <Card className="tech-card-mobile">
                            <div class="content-wrapper-mobile">
                                <div class="title-wrapper-mobile">
                                    <h2 class="feed-name-mobile">Web Development</h2>
                                </div>
                                <p class="tech-info-mobile">React, Node.js, Express, EJS, jQuery </p>
                            </div>
                            </Card>
                            <Card className="tech-card-mobile">
                            <div class="content-wrapper-mobile">
                            <div class="title-wrapper-mobile">
                                    <h2 class="feed-name-mobile">Databases & Deployment</h2>
                                </div>
                                <p class="tech-info-mobile">AWS DynamoDB, MongoDB, Cassandra, SQL, MapReduce, Docker, Heroku</p>
                            </div>
                            </Card>
                            <Card className="tech-card-mobile">
                            <div class="content-wrapper-mobile">
                             <div class="title-wrapper-mobile">
                                    <h2 class="feed-name-mobile">Misc.</h2>
                                </div>
                                <p class="tech-info-mobile">AWS Lambda, Selenium, Prometheus.io, Grafana</p>
                            </div>
                            </Card>
                    </Container>
                </div>
            )} else {
            return (
                <div>
                    <Container className="feed-container">
                    <h2 class="feed-title">Education</h2>
                        <Card className="feed-card">
                            <div class="content-wrapper">
                                <div class="logo-title-wrapper">
                                    <img class="feed-logo" src={penn}/>
                                    <div>
                                        <h2 class="feed-name"> University of Pennsylvania </h2>
                                        <p class="feed-date"> 2018 - 2022 &#183; 3.89 GPA </p>
                                        <ul class="feed-info">
                                            <li>Pursuing a BSE in Computer Science in the School of Engineering and Applied Sciences.</li>
                                            <li>Pursuing a Minor in Data Science in the School of Engineering and Applied Sciences.</li>
                                        </ul>
                                    </div>
                                </div>
                                
                            </div>
                        </Card>
                        <Card className="feed-card">
                            <div class="content-wrapper">
                                <div class="logo-title-wrapper">
                                <img class="feed-logo" src={monty}/> 
                                    <div>
                                        <h2 class="feed-name"> Montgomery High School</h2>
                                        <p class="feed-date"> 2014 - 2018 &#183; 4.00 GPA </p>
                                        <ul class="feed-info">
                                    <li>Graduated top 10% of class.</li>
                                    <li>Involved in Model UN, Youth and Government, and Science Olympiad</li>
                                </ul>
                                    </div>
                                </div>
                                
                            </div>
                        </Card>
                    </Container>
        
                    <Container className="feed-container">
                        <h2 class="feed-title">Experience</h2>
                        <Card className="feed-card">
                            <div class="content-wrapper">
                                <div class="logo-title-wrapper">
                                    <img class="feed-logo" src={mailgun}/>
                                    <div>
                                        <h2 class="feed-name"> Software Engineering Intern, Mailgun </h2>
                                        <p class="feed-date"> May - Aug. 2020 &#183; San Antonio, TX </p>
                                        <ul class="feed-info">
                                    <li>Backend work on the Pipeline team.</li>
                                </ul>
                                    </div>
                                </div>
                                
                                
                            </div>
                        </Card>
        
                        <Card className="feed-card">
                            <div class="content-wrapper">
                                <div class="logo-title-wrapper">
                                    <img class="feed-logo" src={penn}/>
                                    <div>
                                        <h2 class="feed-name"> TA, MCIT 593: Intro to Computer Systems </h2>
                                        <p class="feed-date"> Aug. - Dec. 2019 &#183; Philadelphia, PA </p>
                                        <ul class="feed-info">
                                    <li>Teaching Assistant for MCIT 593: Introduction to Computer Systems. </li>
                                    <li>Held weekly office hours to assist students in topics such as computer systems architecture, low-level programming, and programming C; graded homework and exams.</li>
                                </ul>
                                    </div>
                                </div>
                                
                                
                            </div>
                        </Card>
        
                        <Card className="feed-card">
                            <div class="content-wrapper">
                                <div class="logo-title-wrapper">
                                    <img class="feed-logo" src={penn}/>
                                    <div>
                                        <h2 class="feed-name"> Data Science/Machine Learning Intern, <br></br>University of Pennsylvania </h2>
                                        <p class="feed-date"> May. - Aug. 2019 &#183; Philadelphia, PA </p>
                                        <ul class="feed-info">
                                    <li>Conducted research at the Penn Institute for Computational Science with the Patel Group to better understand the hydrophobicity of proteins and protein-protein interfaces. </li>
                                    <li>Developed algorithm in Python using Scipy to cluster atoms in a protein by first binning atoms based on their susceptibility to dewetting and then traversing their nearest neighbors.</li>
                                    <li>Developed a machine learning model using neural networks with Pytorch to classify atoms that were predicted to be a part of a protein-protein interface as true or false positives.</li>
                                    <li>Leveraged the HyperSearch API to optimize hyperparameters of the model.</li>
                                </ul>
                                    </div>
                                </div>
                                
                            </div>
                        </Card>
        
                        <Card className="feed-card">
                            <div class="content-wrapper">
                                <div class="logo-title-wrapper">
                                    <img class="feed-logo" src={princeton}/>
                                    <div>
                                        <h2 class="feed-name"> Research Intern, Princeton University </h2>
                                        <p class="feed-date"> June - Aug. 2017 &#183; Princeton, NJ </p>
                                        <ul class="feed-info">
                                    <li>Analyzed the relationship between dust optical depth and precipitation over Australia during the El Niño-Southern Oscillation Phenomenon to better understand the effect of natural aerosols on hydrology. </li>
                                    <li>Used Python and packages such as Numpy, Pandas, Scikit-learn, and Matplotlib to access and process data from +10,000 NASA HDF5 and net-CDF4 satellite data files.</li>
                                </ul>
                                    </div>
                                </div>
                                
                                
                            </div>
                        </Card>
                    </Container>
        
                    <Container className="tech-container">
                        <h2 class="feed-title">Technologies</h2>
                        <CardDeck className="carddeck">
                            <Card className="tech-card">
                            <div class="content-wrapper">
                                <div class="title-wrapper">
                                    <h2 class="feed-name">Languages</h2> 
                                </div>
                                    
                                <p class="tech-info">Java, Golang, Javascript, Python</p>
                            </div>
                            </Card>
                            <Card className="tech-card">
                            <div class="content-wrapper">
                                <div class="title-wrapper">
                                    <h2 class="feed-name">Web Development</h2>
                                </div>
                                <p class="tech-info">React, Node.js, Express, EJS, jQuery </p>
                            </div>
                            </Card>
                        </CardDeck>
                        <CardDeck className="carddeck">
                            <Card className="tech-card">
                            <div class="content-wrapper">
                            <div class="title-wrapper">
                                    <h2 class="feed-name">Databases & Deployment</h2>
                                </div>
                                <p class="tech-info">AWS DynamoDB, MongoDB, Cassandra, SQL, MapReduce, Docker, Heroku</p>
                            </div>
                            </Card>
                            <Card className="tech-card">
                            <div class="content-wrapper">
                             <div class="title-wrapper">
                                    <h2 class="feed-name">Misc.</h2>
                                </div>
                                <p class="tech-info">AWS Lambda, Selenium, Prometheus.io, Grafana</p>
                            </div>
                            </Card>
                        </CardDeck>
                    </Container>
                </div>
            )}
    }
}

export default withWindowDimensions(Feed);