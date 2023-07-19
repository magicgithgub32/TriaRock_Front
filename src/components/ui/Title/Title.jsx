import React from 'react'
import './Title.css'

const Title = ({textTitle}) => {
  return (
    <div>
          <h2 className={`category-title${textTitle === "My favorite products" ? '-favs' : ''}`}
          >{textTitle}</h2>
    </div>
  )
}

export default Title
