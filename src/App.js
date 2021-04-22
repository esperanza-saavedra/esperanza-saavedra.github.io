import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {ThemeProvider} from '@material-ui/core'

import Home from './views/Home'
import Mathematics from './views/Mathematics'

import theme from './theme/themeConfig'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/matematicas">
            <Mathematics/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
