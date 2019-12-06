import React from 'react';
import './App.scss';

import { Switch, Route, BrowserRouter } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import PrizeOption from './components/prize-option/prize-option.component';
import QuizModal from './components/quiz-modal/quiz-modal.component';
import QuizPage from './pages/quiz-page/quiz-page.component'

const App = () => {
  const questions = [
    {
      question: '2x2',
      imageUrl: 'https://i.ibb.co/8ztMxrV/repeat3img.jpg',
      id: 1,
      1: '4',
      2: '11',
      3: '245',
      4: '555',
      correct: 1
    },
    {
      question: '3x3',
      imageUrl: 'https://i.ibb.co/8ztMxrV/repeat3img.jpg',
      id: 2,
      1: '43',
      2: '9',
      3: '1',
      4: '23',
      correct: 2
    },
    {
      question: '4x4',
      imageUrl: 'https://i.ibb.co/8ztMxrV/repeat3img.jpg',
      id: 3,
      1: '432',
      2: '234',
      3: '423',
      4: '16',
      correct: 4
    },
    {
      question: '5x5',
      imageUrl: 'https://i.ibb.co/8ztMxrV/repeat3img.jpg',
      id: 4,
      1: '434',
      2: '4344',
      3: '25',
      4: '4421',
      correct: 3
    },
  ]

  return (
    <div className="App">
      <BrowserRouter>
         <Route path="/quiz" component={QuizPage} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/car" component={PrizeOption} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
