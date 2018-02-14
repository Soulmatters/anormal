import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Navbar from '../components/Navbar'
import Theme from '../components/Theme'
import style from './style.css'

const TemplateWrapper = ({ children }) => (
  <MuiThemeProvider muiTheme={Theme}>
    <div>
      <Helmet title="Home | Anormal Space" />
      <Navbar />
      <div>{children()}</div>
    </div>
  </MuiThemeProvider>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
