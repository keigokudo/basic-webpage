import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import TopPage from './components/pages/TopPage'
import About from './components/pages/About'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={TopPage} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  )
}

export default App
