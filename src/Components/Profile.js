import React from 'react'

class Profile extends React.Component {
    render() {
        return (
        <div>
            <img class="profile-picture" src="Downloads/profpic.jpg"/>
            <div class="intro">
                <h1 class="name"> hi, i'm <span class="my-name"> matthew kim.</span> </h1>
                <p class="desc"> I'm a sophomore studying CS at the University of Pennsylvania, interested in
                the applications of software development and data science. </p>
                <p class="learning"> What I'm currently learning: <span class="react"> React </span> <i class="fab fa-react 5x"></i> </p>
            </div>
        </div>
        );
    }
}

export default Profile;