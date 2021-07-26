import React from 'react'
import DisplayNumber from './DisplayNumber'

const DisplayNumberRoot = ({ number }) => {
  return (
    <div>
      <h2> Display Number Root </h2>
      <DisplayNumber number={number}></DisplayNumber>
    </div>
  )
}

export default DisplayNumberRoot
