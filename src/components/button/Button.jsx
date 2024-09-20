import React from 'react'
import './button.css'

const Button = ({ buttonText, href, type='btn-primary' }) => {
  return (
    <button className={"button " + type}>
      <a href={href} target="_blank" rel="noreferrer">{buttonText}</a>
    </button>
  )
}

export default Button