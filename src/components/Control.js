const Control = ({ onChangeMode }) => {
  return (
    <div>
      <ul>
        <li>
          <a
            href="/create"
            onClick={(e) => {
              e.preventDefault()
              onChangeMode('create')
            }}
          >
            create
          </a>
        </li>
        <li>
          <a
            href="/update"
            onClick={(e) => {
              e.preventDefault()
              onChangeMode('update')
            }}
          >
            update
          </a>
        </li>
        <li>
          <input
            type="button"
            value="delete"
            onClick={(e) => {
              e.preventDefault()
              onChangeMode('delete')
            }}
          ></input>
        </li>
      </ul>
    </div>
  )
}

export default Control
