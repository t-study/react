import React, { useState, useEffect } from 'react'
import './App.css'

const Nav = ({ list, handleClick }) => {
  return (
    <nav>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <a
              href={item.id}
              data-id={item.id}
              onClick={(e) => {
                e.preventDefault()
                handleClick(e.target.dataset.id)
              }}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

const Ariticle = ({ title, desc }) => {
  return (
    <article>
      <h2>{title}</h2>
      {desc}
    </article>
  )
}

const App = () => {
  const [article, setArticle] = useState({ title: 'Welcome', desc: 'Hello React & Ajax' })
  const [list, setList] = useState([])

  useEffect(() => {
    fetch('list.json')
      .then((result) => result.json())
      .then((json) => setList(json))
  }, [])

  const handleClick = (id) => {
    fetch(id + '.json')
      .then((result) => result.json())
      .then((item) => setArticle(item))
      .catch((e) => console.error(e))
  }

  return (
    <div className='App'>
      <h1>WEB</h1>
      <Nav handleClick={(id) => handleClick(id)} list={list}></Nav>
      <Ariticle title={article.title} desc={article.desc} />
    </div>
  )
}

export default App
