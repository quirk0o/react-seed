import React from 'react'
import {Route} from 'react-router-dom'
import {Layout} from './modules/layout'

const App = () => (
  <Layout>
    <Route exact path="/" render={() => null} />
  </Layout>
)

export default App
