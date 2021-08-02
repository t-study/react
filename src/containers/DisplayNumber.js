import React, { useState } from 'react'

import DisplayNumber from '../components/DisplayNumber'
import store from '../store'

const DisplayNumberContainer = () => {
  const [number, setNumber] = useState(0)
  store.subscribe(() => {
    setNumber(store.getState().number)
  })
  return <DisplayNumber number={number} />
}

export default DisplayNumberContainer
