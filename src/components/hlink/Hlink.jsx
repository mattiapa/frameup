import React from 'react'
import "./hlink.css"

const Hlink = ({href, name}) => {
  return (
    <>
    <a className="hlink" href={href} target="_blank" rel="noreferrer">{name} <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
    </>
  )
}

export default Hlink