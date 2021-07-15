import React, { useState } from 'react'

export const UpdateContent = ({ data, onSubmit }) => {
  const [item, setItem] = useState(data)

  const inputFormHandler = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value })
  }
  return (
    <article>
      <h2>Update</h2>
      <form
        action="/update_process"
        method="POST"
        onSubmit={function (e) {
          e.preventDefault()
          onSubmit(item)
        }}
      >
        <p>
          <input type="text" name="title" placeholder="title" value={item.title} onChange={inputFormHandler}></input>
        </p>
        <p>
          <textarea name="desc" placeholder="description" value={item.desc} onChange={inputFormHandler}></textarea>
        </p>
        <input type="submit"></input>
      </form>
    </article>
  )
}

export default UpdateContent
