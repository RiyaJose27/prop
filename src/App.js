import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
        <PersonCard firstName={"Doe"} lastName={"Joe"} age = {20} color = {"green"} />
        <PersonCard firstName={"Smith"} lastName={"Jose"} age = {70} color = {"green"}/>
    </div>
  );
}

export default App;
