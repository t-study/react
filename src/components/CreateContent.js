const CreateContent = ({ onSubmit }) => {
  return (
    <article>
      <h2>Create</h2>
      <form
        action="/create_process"
        method="POST"
        onSubmit={(e) => {
          e.preventDefault()
          onSubmit(e.target.title.value, e.target.desc.value)
        }}
      >
        <p>
          <input type="text" name="title" placeholder="title"></input>
        </p>
        <p>
          <textarea name="desc" placeholder="description"></textarea>
        </p>
        <input type="submit"></input>
      </form>
    </article>
  )
}

export default CreateContent
