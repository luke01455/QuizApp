import React from 'react';
import './App.scss';

const App = () => {
  const questions = [
    {
      question: '',
      imageUrl: 'https://i.ibb.co/8ztMxrV/repeat3img.jpg',
      id: 5,
      1: '',
      2: '',
      3: '',
      4: '',
      correct: 4
    }
  ]

  return (
    <div className="App">
      <div> Quiz App </div>
      <div> Question </div>
      <div> Answers </div>
    </div>
  );
}

export default App;
