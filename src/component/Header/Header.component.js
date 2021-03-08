import React from 'react'
import TeslaLogo from '../../assets/teslaLogoSmall.svg'

import './Header.styles.css'

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <a href="https://www.tesla.com/">
          <img src={TeslaLogo} alt="Tesla Logo" />
        </a>
      </div>
      <div className="header-center">
        <a href="https://www.tesla.com/models">Model S</a>
        <a href="https://www.tesla.com/model3">Model 3</a>
        <a href="https://www.tesla.com/modelx">Model X</a>
        <a href="https://www.tesla.com/modely">Model Y</a>
        <a href="https://www.tesla.com/solarroof">Solar Roof</a>
        <a href="https://www.tesla.com/solarpanels">Solar Panel</a>
      </div>
      <div className="header-right">
        <a href="https://shop.tesla.com/?tesref=true">Shop</a>
        <a href="https://www.tesla.com/teslaaccount">Tesla Account</a>
      </div>
    </div>
  )
}

export default Header
