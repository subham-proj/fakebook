import React from 'react';
import './App.css';

import {Container} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './Before/login';
import Signup from './Before/signup';
import NewsFeed from './After/newsfeed';
import NotFound from './error';


function App() {
  return (
    <div>
    <Router>
      <Switch>

        <Route exact path="/signup">
          <Container className="layout">
            <div className="signup">
              <Signup/>
            </div>
          </Container>
        </Route>

        <Route exact path="/newsfeed">
          <NewsFeed/>
        </Route>

        <Route exact path="/">
          <Container className="layout">
            <div className="login">
              <Login/>
            </div>
          </Container>
        </Route>

        <Route path="" component={NotFound} />

      </Switch>
    </Router>    
    </div>
  );
}

export default App;
