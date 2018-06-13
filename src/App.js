import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { AddMoreForm } from "./AddMoreForm";
import Home from './Home';
import Login from './Login';
import Basic from './Basic';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            <Link to={'/'}>Home</Link> --
            <Link to={'/Login'}>Form</Link> --
            <Link to={'/Basic'}>Basic</Link> --
          </header>

          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Login' component={Login} />
            <Route exact path='/Basic' component={Basic} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
