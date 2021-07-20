import logo from './logo.svg';
import './App.css';
import react, {Component} from 'react';

import Study from './study/Study';

/**
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Function
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

class App extends Component{
  name;
  text = '문자열';

  render(){
    /**
     * var scope 가 함수 단위
     * let, const scope 가 Block 단위
     */
    var name = 'Class_var';
    // const name = 'Class_const';  
    // let name = 'Class_let';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload. {name}
          </p>
            
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div>
          <Study />
        </div>
      </div>
    );
  }
}
  


export default App;
