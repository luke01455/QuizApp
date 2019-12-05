import React from 'react';
import './App.scss';

import HomePage from './pages/homepage/homepage.component';

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
     <HomePage />
    </div>
  );
}

export default App;
