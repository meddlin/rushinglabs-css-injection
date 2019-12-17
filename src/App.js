import React, { useState, useEffect } from 'react';
import InsecureProfile from './InsecureProfile';
import SecureProfile from './SecureProfile';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  

  return (
    <div className="App">

      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/insecure">Insecure</Link>
              </li>
              <li>
                <Link to="/secure">Secure</Link>
              </li>
            </ul>
          </nav>
        </div>

        <Switch>
          <Route path="/insecure">
            <InsecureProfile />
          </Route>
          <Route path="/secure">
            <SecureProfile />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
