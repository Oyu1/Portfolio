import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './styles/main.scss'

import { Main } from './pages'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
