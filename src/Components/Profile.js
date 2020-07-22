import React from 'react'
import './Style/Profile.css'
import profpic from './matt.jpg'
import penn from './upenn.png'
import {Container, Row, Card, Image} from 'react-bootstrap';

class Profile extends React.Component {
    render() {
        return (
            <Container className="profile-container">
                <div class="profile">
                    <div class="image-wrapper">
                        <Image src={profpic} roundedCircle/>
                    </div>              
                    <div class="intro">
                        <h1 class="name-large"> Hi, I'm Matthew Kim. </h1>
                        <p class="desc"> I'm a junior studying computer science and data science at the <a class="penn-link" href="https://www.seas.upenn.edu/" target="_blank">University of Pennsylvania</a>, and I 
                        like to <a class="penn-link" href="https://medium.com/@mattmkim" target="_blank">build things</a> to meet the needs of others.</p>
                        <p class="second">I'm currently looking for Summer 2021 SWE internships. Please feel free to reach out!</p>
                        {/* <p class="learning"> What I'm currently learning: <span class="react"> React </span> <i class="fab fa-react 5x"></i> </p> */}
                    </div>
                </div>
            </Container>
        
            
        
        );
        
    }
}

export default Profile;