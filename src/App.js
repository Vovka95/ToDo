import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ToDo from './components/Todo/ToDo';
import Registration from './components/Registration/Registration'

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Registration} />
          <Route path="/todo" component={ToDo} />
        </div>
      </Router>
      

    );
  }
}

export default App;

