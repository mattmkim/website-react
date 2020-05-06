import React from 'react'
import './Style/Profile.css'
import profpic from './matt.jpg'
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
                            <h1 class="name"> Hi, I'm <span class="my-name"> Matthew Kim.</span> </h1>
                            <p class="desc"> I'm a sophomore studying CS at the University of Pennsylvania, interested in
                            the applications of software development and data science. </p>
                            {/* <p class="learning"> What I'm currently learning: <span class="react"> React </span> <i class="fab fa-react 5x"></i> </p> */}
                        </div>
                    </div>
                </Card>
            </Container>
        
            
        
        );
        
    }
}

export default Profile;