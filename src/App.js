import React from 'react';
import ImageFrame from './components/ImageFrame'
import AddTwo from './components/AddTwo'
import Calculator from './components/Calculator'
import pikachu from './images/pikachu.png'

function App() {
  return (
  <div>
  <h1>Hello World</h1>
    <ImageFrame image={pikachu}/>
    <ImageFrame image={require('./images/pikachu.png')}/>
    <AddTwo x={5} y={3}/>
    <Calculator x={5} y={3} operation='add'/>
  </div>
  );
}

export default App;
