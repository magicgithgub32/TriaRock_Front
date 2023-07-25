import React from 'react'
import './Title.css'

const Title = ({textTitle}) => {
  return (
    <div className="title-container">
          <h2 className={`title${textTitle === "My favorite products" || 
          textTitle === "swimming" ||
          textTitle === "cycling" ||
          textTitle === "running" ? '-mobile' : ''}`}
          >{textTitle}</h2>
    </div>
  )
}

export default Title
