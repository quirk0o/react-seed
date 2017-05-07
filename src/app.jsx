import React from 'react'
import {Route} from 'react-router-dom'

import {Layout} from 'modules/layout'
import {Component} from 'modules/example'

const App = () => (
  <Layout>
    <Route exact path="/" render={() => <h2>Home</h2>} />
    <Route path="/test" component={Component} />
  </Layout>
)

export default App
