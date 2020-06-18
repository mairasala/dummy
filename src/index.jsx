import React from 'react'
import PropTypes from 'prop-types'

// import{ baseTheme } from 'ava-theme-creator'

const MyTheme = ({children}) => (
  <div>
    <div>{children}</div>
    <button>hello!</button>
  </div>
)

MyTheme.propTypes = {
  children: PropTypes.node
}

export default MyTheme
