import React, {Component} from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import axios from 'axios'
import Header from './components/Header/Header';
import {HashRouter, Route, Switch} from 'react-router-dom'
import routes from './components/routes'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: []   
    }
  }
  
  render(){
    return (
      <HashRouter>
        <div className="App">
          <Header />
          {routes}
        </div>
      </HashRouter>
    )
  }
}
export default App
