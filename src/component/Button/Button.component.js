import React from 'react'

import './Button.styles.css'

const Button = ({ imp, text, link }) => {
  return (
    <div className={`button ${imp === 'secondary' ? 'button-white' : ''}`}>
      <a href={link}>{text}</a>
    </div>
  )
}

export default Button
