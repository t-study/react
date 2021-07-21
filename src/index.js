import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Route, Switch, NavLink, useParams } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  )
}

const Topic = ({ contents }) => {
  const params = useParams()
  let selected_topic = { title: 'Sorry', description: 'Not Found' }
  const selected = contents.filter((item) => item.id === Number(params.topic_id))
  if (selected.length == 1) {
    selected_topic = selected[0]
  }
  return (
    <div>
      <h2>{selected_topic.title}</h2>
      {selected_topic.description}
    </div>
  )
}

const Topics = ({ contents }) => {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {contents.map((item) => (
          <li key={item.id}>
            <NavLink to={'/topics/' + item.id}>{item.title}</NavLink>
          </li>
        ))}
      </ul>

      <Route path='/topics/:topic_id'>
        <Topic contents={contents}></Topic>
      </Route>
    </div>
  )
}

const Contact = () => {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  )
}

const App = () => {
  const [contents] = useState([
    { id: 1, title: 'HTML', description: 'HTML is ...' },
    { id: 2, title: 'JS', description: 'JS is ...' },
    { id: 3, title: 'React', description: 'React is ...' },
  ])
  return (
    <div>
      <h1>Hello React Router DOM</h1>
      <ul>
        <li>
          <NavLink exact to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/topics'>Topics</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/topics'>
          <Topics contents={contents}></Topics>
        </Route>
        <Route path='/contact'>
          <Contact></Contact>
        </Route>
        <Route path='/'>Not Found</Route>
      </Switch>
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
