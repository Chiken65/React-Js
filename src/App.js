import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { AddMoreForm } from "./AddMoreForm";
import Home from './Home';
import Login from './Login';
import Basic from './Basic';
import callApis from './callApis';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <br />
            {/* <h1 className="App-title">Welcome to React</h1> */}
            <Link to={'/'}>Home</Link> --
            <Link to={'/Login'}>Form</Link> --
            <Link to={'/Basic'}>Basic</Link> --
            <Link to={'/callApis'}>callApis</Link>
          </header>

          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Login' component={Login} />
            <Route exact path='/Basic' component={Basic} />
            <Route exact path='/callApis' component={callApis} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
