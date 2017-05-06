import React from 'react'
import {Route} from 'react-router-dom'

import {Layout} from './modules/layout'

const App = () => (
  <Layout>
    <Route exact path="/" render={() => <h2>Home</h2>} />
    <Route path="/test" render={() => <h2>Test</h2>} />
  </Layout>
)

export default App
