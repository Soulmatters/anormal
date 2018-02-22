import React from 'react'
import Link from 'gatsby-link'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import FlatButton from 'material-ui/FlatButton'
import logo from '../img/logo.svg'

const Navbar = () => (
  <AppBar
    title={
      <Link to="/">
        <img
          src={logo}
          alt="Anormal space"
          style={{ width: '60px', marginRight: 10, flex: 0 }}
        />
      </Link>
    }
    iconStyleLeft={{ display: 'none' }}
 
  >
  <div style={{
    height:'64px',
    display: 'flex',
    flexFlow: 'wrap row',
    alignItems: 'center',
    color: '#fff'
  }} className="menu">
  <Link to="/">  Acasă</Link>
  <Link to="/despre-noi">Despre noi</Link>
  </div>
  </AppBar>
)

export default Navbar
