import React from 'react'
import {
  cyan500,
  cyan700,
  blue500,
  pinkA200,
  grey100,
  grey300,
  grey400,
  grey500,
  white,
  darkBlack,
  fullBlack,
  lightBlack,
  darkWhite,
  lightWhite
} from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'

import { fade } from 'material-ui/utils/colorManipulator'
import spacing from 'material-ui/styles/spacing'
import Paper from 'material-ui/Paper';

// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
const Theme = getMuiTheme({
  palette: {
    primary1Color: blue500,
    accent1Color: pinkA200,
    textColor: fade(darkBlack, 0.83),
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
  card: {
    titleColor: fade(lightWhite, 0.87),
    subtitleColor: fade(lightWhite, 0.54),
  },

  cardText: {
    textColor: darkWhite,
  },
  appBar:{
    color: 'linear-gradient( #a044ff,  #6a3093)'
  },
 

})

export default Theme
