import React from 'react';
import './App.scss';

import { Switch, Route, BrowserRouter } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import PrizeOption from './components/prize-option/prize-option.component';
import QuizModal from './components/quiz-modal/quiz-modal.component';

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
      <BrowserRouter>
        <Route path="/" component={QuizModal} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/car" component={PrizeOption} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
