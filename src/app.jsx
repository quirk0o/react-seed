import React from 'react'
import {Route, NavLink} from 'react-router-dom'
import {Menu} from 'semantic-ui-react'

import {Layout} from './modules/layout'


const App = () => (
  <Layout>
    <Menu stackable color="teal">
      <Menu.Item as={NavLink} to="/">Home</Menu.Item>
    </Menu>
    <Route exact path="/" render={() => null} />
  </Layout>
)

export default App
