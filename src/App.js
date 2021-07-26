import React, { useState } from 'react'
import './App.css'
import DisplayNumberRoot from './components/DisplayNumberRoot'
import AddNumberRoot from './components/AddNumberRoot'

const App = () => {
  const [number, setNumber] = useState(0)
  return (
    <div className='App'>
      <h1>Root</h1>
      <AddNumberRoot handleClick={(size) => setNumber(number + size)}></AddNumberRoot>
      <DisplayNumberRoot number={number}></DisplayNumberRoot>
    </div>
  )
}

export default App
