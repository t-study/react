import React, { useState } from 'react'
import store from '../store'

const DisplayNumber = () => {
  const [number, setNumber] = useState(0)
  store.subscribe(() => {
    setNumber(store.getState().number)
  })
  return (
    <div>
      <h2>Display Number</h2>
      <input type='text' value={number} readOnly></input>
    </div>
  )
}

export default DisplayNumber
