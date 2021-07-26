import React, { useState } from 'react'

const AddNumber = ({ handleClick }) => {
  const [size, setSize] = useState(0)
  return (
    <div>
      <h2>Add Number</h2>
      <input
        type='button'
        value='+'
        onClick={(e) => {
          handleClick(size)
        }}
      ></input>
      <input type='number' value={size} onChange={(e) => setSize(Number(e.target.value))}></input>
    </div>
  )
}

export default AddNumber
