import React, { useState } from 'react'

const Calculator = () => {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')

  const calculate = () => {
    if (isNaN(input) || input === '') {
      setResult('Please enter a valid number')
    } else {
      setResult(Number(input) * 2)
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter the number to calculate"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button onClick={calculate}>Cal</button>
      <div>{result}</div>
    </div>
  )
}

export default Calculator;