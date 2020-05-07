import React from 'react'
import {Container, Card, CardDeck} from 'react-bootstrap'
import penn from './upenn.png'
import monty from './monty.png'
import mailgun from './mailgun.png'
import princeton from './princeton.png'
import './Style/Feed.css'

class Feed extends React.Component {
    render() {
        return (
        <div>
            <Container className="feed-container">
            <h2 class="feed-title">Education</h2>
                <Card className="feed-card">
                    <div class="content-wrapper">
                        <h2 class="feed-name"> University of Pennsylvania <img class="feed-logo" src={penn}/> </h2>
                        <p class="feed-date"> 2018 - 2022 &#183; 3.93 GPA </p>
                        <ul class="feed-info">
                            <li>Pursuing a BSE in Computer Science in the School of Engineering and Applied Sciences.</li>
                            <li>Pursuing a Minor in Data Science in the School of Engineering and Applied Sciences.</li>
                        </ul>
                    </div>
                </Card>
                <Card className="feed-card">
                    <div class="content-wrapper">
                        <h2 class="feed-name"> Montgomery High School <img class="feed-logo" src={monty}/> </h2>
                        <p class="feed-date"> 2014 - 2018 &#183; 4.00 GPA </p>
                        <ul class="feed-info">
                            <li>Graduated top 10% of class.</li>
                            <li>Involved in Model UN, Youth and Government, and Science Olympiad</li>
                        </ul>
                    </div>
                </Card>
            </Container>

            <Container className="feed-container">
                <h2 class="feed-title">Experience</h2>
                <Card className="feed-card">
                    <div class="content-wrapper">
                        <h2 class="feed-name"> Incoming Software Engineering Intern, Mailgun <img class="feed-logo" src={mailgun}/> </h2>
                        <p class="feed-date"> May - Aug. 2020 &#183; San Antonio, TX </p>
                        <ul class="feed-info">
                            <li>Incoming software engineering intern at Mailgun Technologies.</li>
                        </ul>
                    </div>
                </Card>

                <Card className="feed-card">
                    <div class="content-wrapper">
                        <h2 class="feed-name"> TA, MCIT 593: Intro to Computer Systems <img class="feed-logo" src={penn}/> </h2>
                        <p class="feed-date"> Aug. - Dec. 2019 &#183; Philadelphia, PA </p>
                        <ul class="feed-info">
                            <li>Teaching Assistant for MCIT 593: Introduction to Computer Systems. </li>
                            <li>Held weekly office hours to assist students in topics such as computer systems architecture, low-level programming, and programming C; graded homework and exams.</li>
                        </ul>
                    </div>
                </Card>

                <Card className="feed-card">
                    <div class="content-wrapper">
                        <h2 class="feed-name"> Data Science/Machine Learning Intern, <img class="feed-logo" src={penn}/> <br></br>University of Pennsylvania </h2>
                        <p class="feed-date"> May. - Aug. 2019 &#183; Philadelphia, PA </p>
                        <ul class="feed-info">
                            <li>Conducted research at the Penn Institute for Computational Science with the Patel Group to better understand the hydrophobicity of proteins and protein-protein interfaces. </li>
                            <li>Developed algorithm in Python using Scipy to cluster atoms in a protein by first binning atoms based on their susceptibility to dewetting and then traversing their nearest neighbors.</li>
                            <li>Developed a machine learning model using neural networks with Pytroch to classify atoms that were predicted to be a part of a protein-protein interface as true or false positives.</li>
                            <li>Leveraged the HyperSearch API to optimize hyperparameters of the model.</li>
                        </ul>
                    </div>
                </Card>

                <Card className="feed-card">
                    <div class="content-wrapper">
                        <h2 class="feed-name"> Research Intern, Princeton University <img class="feed-logo" src={princeton}/> </h2>
                        <p class="feed-date"> June - Aug. 2017 &#183; Princeton, NJ </p>
                        <ul class="feed-info">
                            <li>Analyzed the relationship between dust optical depth and precipitation over Australia during the El Niño-Southern Oscillation Phenomenon to better understand the effect of natural aerosols on hydrology. </li>
                            <li>Used Python and packages such as Numpy, Pandas, Scikit-learn, and Matplotlib to access and process data from +10,000 NASA HDF5 and net-CDF4 satellite data files.</li>
                        </ul>
                    </div>
                </Card>
            </Container>

            <Container className="tech-container">
                <h2 class="feed-title">Technologies</h2>
                <CardDeck className="carddeck">
                    <Card className="tech-card">
                    <div class="content-wrapper">
                        <div class="title-wrapper">
                            <h2 class="feed-name">General Purpose</h2> 
                        </div>
                            
                        <p class="feed-info">Java, Javascript, Python, C</p>
                    </div>
                    </Card>
                    <Card className="tech-card">
                    <div class="content-wrapper">
                        <div class="title-wrapper">
                            <h2 class="feed-name">Web Development</h2>
                        </div>
                        <p class="feed-info">React/Redux, Node, Express, HTML, CSS, jQuery, EJS </p>
                    </div>
                    </Card>
                </CardDeck>
                <CardDeck className="carddeck">
                    <Card className="tech-card">
                    <div class="content-wrapper">
                     <div class="title-wrapper">
                            <h2 class="feed-name">Open Source</h2>
                        </div>
                        <p class="feed-info">Numpy, Pandas, Scikit-Learn, Matplotlib, Scipy, Pytorch</p>
                    </div>
                    </Card>
                    <Card className="tech-card">
                    <div class="content-wrapper">
                    <div class="title-wrapper">
                            <h2 class="feed-name">Data & Databases</h2>
                        </div>
                        <p class="feed-info">AWS (DynamoDB), MongoDB, SQL, Hadoop Map Reduce, Heroku</p>
                    </div>
                    </Card>
                </CardDeck>
            </Container>
        </div>
            
            

        )
    }
}

export default Feed;