import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <>
   <div>
    <h1>Counter App</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <h2>Count: {count}</h2>
   </div>
    </>
  )
}

export default App
