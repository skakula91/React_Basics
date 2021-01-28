import logo from './logo.svg';
import './App.css';
import react, { Component } from 'react';
import Counter from './components/counter/counter';


class App extends Component
{
  render()
  {
    return <div className="App">
      <Counter></Counter>
    </div>
  };
}

export default App;
