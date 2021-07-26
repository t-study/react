import React from 'react'
import './App.css'
import DisplayNumberRoot from './components/DisplayNumberRoot'
import AddNumberRoot from './components/AddNumberRoot'

const App = () => {
  return (
    <div className='App'>
      <h1>Root</h1>
      <AddNumberRoot></AddNumberRoot>
      <DisplayNumberRoot></DisplayNumberRoot>
    </div>
  )
}

export default App
