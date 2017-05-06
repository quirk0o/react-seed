import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Layout} from './modules/layout'

const App = () => (
  <Router>
    <Layout>
      <Route exact path="/" render={() => null} />
    </Layout>
  </Router>
)

export default App
