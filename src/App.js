import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from 'components/pages/Home'
import About from 'components/pages/About'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  )
}

export default App
