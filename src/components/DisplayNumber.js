const DisplayNumber = ({ number }) => {
  return (
    <div>
      <h2>Display Number</h2>
      <input type='text' value={number} readOnly></input>
    </div>
  )
}

export default DisplayNumber
