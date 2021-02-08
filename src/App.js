import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from 'components/pages/Home'
import About from 'components/pages/About'
import Sample from 'components/pages/Sample'

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/sample" component={Sample} />
    </Switch>
  )
}

export default App
