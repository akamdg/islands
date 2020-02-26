import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from './components/Home'
import Definitions from './components/Definitions'
import Events from './components/Events'
import Post from './components/Post'
import Flights from './components/Flights'

class App extends Component{
    render() {
        return (
          <BrowserRouter>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/definitions' component={Definitions}/>
              <Route path='/Events' component={Events}/>
              <Route path='/flights' component={Flights}/>
              <Route path='/:post_id' component={Post}/>
            </Switch>
          </div>
          </BrowserRouter>
        );
    }
}

export default App;
