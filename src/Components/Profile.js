import React from 'react'
import './Style/Profile.css'
import profpic from './matt.jpg'
import penn from './upenn.png'
import {Container, Row, Card, Image} from 'react-bootstrap';

class Profile extends React.Component {
    render() {
        return (
            <Container className="profile-container">
                <Card className="profile-card">
                    <div class="profile">
                        <div class="image-wrapper">
                            <Image src={profpic} roundedCircle/>
                        </div>              
                        <div class="intro">
                            <h1 class="name"> Hi, I'm Matthew Kim. </h1>
                            <p class="desc"> I'm a junior studying computer science and data science at the <a class="penn-link" href="https://www.seas.upenn.edu/">University of Pennsylvania</a>, interested in
                            exploring the applications of software development. </p>
                            {/* <p class="learning"> What I'm currently learning: <span class="react"> React </span> <i class="fab fa-react 5x"></i> </p> */}
                        </div>
                    </div>
                </Card>
            </Container>
        
            
        
        );
        
    }
}

export default Profile;