import Details from './Details'
import React from 'react'
import './App.css'

function App() {
 const name = "Joyson";
 const age = 25;

 return (
    <>
     <Details name={name} age={age} />
    </>
  )
}

export default App
