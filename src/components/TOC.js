import React, { Component } from 'react'

const Item = ({ data, onChangePage }) => {
  const { id, title } = data
  return (
    <li>
      <a
        href={'/content/' + id}
        data-id={id}
        onClick={(e) => {
          e.preventDefault()
          onChangePage(e.target.dataset.id)
        }}
      >
        {title}
      </a>
    </li>
  )
}

class TOC extends Component {
  shouldComponentUpdate(newProps, newState) {
    if (this.props.data === newProps.data) {
      return false
    }
    return true
  }
  render() {
    const { data, onChangePage } = this.props
    return (
      <nav>
        <ul>
          {data.map((item) => {
            return <Item key={item.id} data={item} onChangePage={onChangePage} />
          })}
        </ul>
      </nav>
    )
  }
}

export default TOC
