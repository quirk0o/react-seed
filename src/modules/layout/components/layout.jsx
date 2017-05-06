import React from 'react'
import PropTypes from 'prop-types'

import './layout.scss'

const Layout = ({children}) => (
  <div>
    {children}
  </div>
)

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout