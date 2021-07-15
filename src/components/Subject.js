const Subject = ({ data, onChangePage }) => {
  const { title, sub } = data
  return (
    <header>
      <h1>
        <a href="/" onClick={onChangePage}>
          {title}
        </a>
      </h1>
      {sub}
    </header>
  )
}

export default Subject
