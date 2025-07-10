import React from 'react'
import Greeting from './Gretting.jsx';
const Welcome = (props) => {
  return (
    <div>
      <h1> This is my name due {props.name}</h1>
    </div>
  )
}

export default Welcome