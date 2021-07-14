import React, { Component } from 'react'
import Subject from './components/Subject'
import TOC from './components/TOC'
import ReadContent from './components/ReadContent'
import UpdateContent from './components/UpdateContent'
import Control from './components/Control'

import './App.css'
import CreateContent from './components/CreateContent'

class App extends Component {
  constructor(props) {
    super(props)
    this.max_content_id = 3
    this.state = {
      mode: 'read',
      selected_content_id: 2,
      subject: { title: 'WEB', sub: 'World Wide Web!' },
      welcome: { title: 'Welcome', desc: 'Hello, React!' },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is for information' },
        { id: 2, title: 'CSS', desc: 'CSS is for design' },
        { id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive' },
      ],
    }
  }
  getReadContent() {
    for (var i = 0; i < this.state.contents.length; i++) {
      var data = this.state.contents[i]
      if (data.id === this.state.selected_content_id) {
        return data
      }
    }
    return null
  }
  getContent() {
    var _title,
      _desc,
      _article = null
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title
      _desc = this.state.welcome.desc
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if (this.state.mode === 'read') {
      var _content = this.getReadContent()
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
    } else if (this.state.mode === 'create') {
      _article = (
        <CreateContent
          onSubmit={function (_title, _desc) {
            this.max_content_id += 1
            this.setState({
              contents: this.state.contents.concat({ id: this.max_content_id, title: _title, desc: _desc }),
              mode: 'read',
              selected_content_id: this.max_content_id,
            })
          }.bind(this)}
        ></CreateContent>
      )
    } else if (this.state.mode === 'update') {
      _article = (
        <UpdateContent
          data={this.getReadContent()}
          onSubmit={function (_id, _title, _desc) {
            var _contents = Array.from(this.state.contents)
            for (var i = 0; i < _contents.length; i++) {
              if (_id === _contents[i].id) {
                _contents[i] = { id: _id, title: _title, desc: _desc }
                break
              }
            }
            this.setState({
              contents: _contents,
              mode: 'read',
            })
          }.bind(this)}
        ></UpdateContent>
      )
    }
    return _article
  }
  render() {
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: 'welcome' })
          }.bind(this)}
        ></Subject>
        <TOC
          data={this.state.contents}
          onChangePage={function (id) {
            this.setState({
              mode: 'read',
              selected_content_id: Number(id),
            })
          }.bind(this)}
        ></TOC>
        <Control
          onChangeMode={function (_mode) {
            if (_mode === 'delete') {
              if (window.confirm('really?')) {
                var _contents = Array.from(this.state.contents)
                for (var i = 0; i < _contents.length; i++) {
                  if (this.state.selected_content_id === _contents[i].id) {
                    _contents.splice(i, 1)
                    break
                  }
                }
                this.setState({
                  contents: _contents,
                  mode: 'welcome',
                })
              }
              alert('deleted!')
            } else {
              this.setState({
                mode: _mode,
              })
            }
          }.bind(this)}
        ></Control>
        {this.getContent()}
      </div>
    )
  }
}

export default App
