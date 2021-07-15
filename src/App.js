import React, { useState } from 'react'
import Control from './components/Control'
import Subject from './components/Subject'
import TOC from './components/TOC'
import CreateContent from './components/CreateContent'
import ReadContent from './components/ReadContent'
import UpdateContent from './components/UpdateContent'

const App = () => {
  const [mode, setMode] = useState('read')
  const [subject] = useState({ title: 'WEB', sub: 'World Wide Web!' })
  const [contents, setContents] = useState([
    { id: 1, title: 'HTML', desc: 'HTML is for information' },
    { id: 2, title: 'CSS', desc: 'CSS is for design' },
    { id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive' },
  ])
  const [selected, setSelected] = useState(1)
  const [welcome] = useState({ title: 'Welcome', desc: 'Hello, React!' })
  const [maxId, setMaxId] = useState(3)

  const controlHandler = (_mode) => {
    if (_mode === 'delete') {
      if (window.confirm('really?')) {
        setContents(contents.filter((item) => item.id !== selected))
        setMode('welcome')
      }
      alert('deleted!')
    } else {
      setMode(_mode)
    }
  }

  const getReadContent = () => {
    return contents.filter((item) => item.id === selected)[0]
  }

  const getContent = () => {
    let _article = null
    if (mode === 'welcome') {
      _article = <ReadContent data={welcome} />
    } else if (mode === 'read') {
      _article = <ReadContent data={getReadContent()} />
    } else if (mode === 'create') {
      _article = (
        <CreateContent
          onSubmit={(title, desc) => {
            setContents([...contents, { id: maxId + 1, title, desc }])
            setMode('read')
            setSelected(maxId + 1)
            setMaxId(maxId + 1)
          }}
        />
      )
    } else if (mode === 'update') {
      _article = (
        <UpdateContent
          data={getReadContent()}
          onSubmit={(data) => {
            setContents(contents.map((el) => (data.id === el.id ? data : el)))
          }}
        />
      )
    }
    return _article
  }

  return (
    <div className="App">
      <Subject
        data={subject}
        onChangePage={(e) => {
          e.preventDefault()
          setMode('welcome')
        }}
      />
      <TOC
        data={contents}
        onChangePage={(id) => {
          setMode('read')
          setSelected(Number(id))
        }}
      />
      <Control onChangeMode={controlHandler} />
      {getContent()}
    </div>
  )
}

export default App
