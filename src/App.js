import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import Profile from './Components/Feed';
import Feed from './Components/Feed';
import Sidebar from './Components/Sidebar';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Profile />
        <Feed />
        <Sidebar />
      </div>
    );
  }
}

export default App;
