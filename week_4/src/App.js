import React, { Component } from 'react';
import logo from './star.svg';
import iconMenu from './icon_menu.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Banner/>
        <MainContent/>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <header className="main-header">
        <div className="main-title">
          <h1 className="title">Website Title /</h1>
          <img src={logo} className="App-logo" alt="starlogo" />
          <button className="menu"><img src={iconMenu} alt="menu trigger icon" /></button>
        </div>
        <ul className="main-nav">
          <li className="close-icon"><a href="javascript:void(0)" className="closebtn">&times;</a></li>
          <li><a href="#">Item1</a></li>
          <li><a href="#">Item2</a></li>
          <li><a href="#">Item3</a></li>
          <li><a href="#">Item4</a></li>
        </ul>
      </header>

    );
  }
}

class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <h1 className="headline">Welcome Message</h1>
      </div>
    );
  }
}

class MainContent extends Component {
  render() {
    return (
      <div>
        <div className="section-title">
          <h2>Section Title</h2>
        </div>

        <div className="content">
          <Box/><Box/><Box/><Box/>
        </div>

        <footer className="mainFooter">
          <span>Call to Action</span>
        </footer>

        <div className="content hide">
          <Box/><Box/><Box/><Box/>
        </div>
      </div>
    );
  }
}

class Box extends Component {
  render() {
    return (
      <div className="box">
        <h3>Content Box</h3>
      </div>
    );
  }
}

export default App;
