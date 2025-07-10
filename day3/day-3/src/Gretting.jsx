import React from 'react'
import Welcome from './Welcome';
import Calculator from './Calculator';
const Gretting = () => {
    const date = new Date()
    const day = date.getDate();
    const hours = date.getHours();

  return (
    <div>
     <p>"Hi Joyson, Welcome to React Learning!"</p> 
    <h6> day : {day}
    </h6>
     <h6> Hours: {hours}</h6><br />
      <Welcome name="Joyson" />
      <Calculator />
    </div>
  )
   
}

export default Gretting
