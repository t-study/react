import React from 'react'
import AddNumber from './AddNumber'

const AddNumberRoot = ({ handleClick }) => {
  return (
    <div>
      <h2>Add Number Root</h2>
      <AddNumber handleClick={(size) => handleClick(size)}></AddNumber>
    </div>
  )
}

export default AddNumberRoot
