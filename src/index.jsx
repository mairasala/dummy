import React from 'react'
import PropTypes from 'prop-types'

import { ThemeProvider } from '@material-ui/core/styles' 

// import{ baseTheme } from 'ava-theme-creator'
console.log(ThemeProvider)
const MyTheme = ({children}) => (
  <ThemeProvider theme={{}}>
    <div>
      <div>{children}</div>
      <button>hello!</button>
    </div>
  </ThemeProvider>
)

MyTheme.propTypes = {
  children: PropTypes.node
}

export default MyTheme
