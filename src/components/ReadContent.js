const ReadContent = ({ data }) => {
  return (
    <article>
      <h2>{data.title}</h2>
      {data.desc}
    </article>
  )
}

export default ReadContent
