import React, { useState } from 'react'

const AddNumber = ({ onClick }) => {
  const [size, setSize] = useState(1)
  return (
    <div>
      <h2>Add Number</h2>
      <input type='button' value='+' onClick={() => onClick(size)}></input>
      <input type='number' value={size} onChange={(e) => setSize(Number(e.target.value))}></input>
    </div>
  )
}

export default AddNumber
