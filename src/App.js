import React,  { lazy, Suspense } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.scss';

import Spinner from './components/spinner/spinner.component';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const QuizModal = lazy(() => import('./components/quiz-modal/quiz-modal.component'));
const QuizPage = lazy(() => import('./pages/quiz-page/quiz-page.component'));

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Suspense fallback={<Spinner />}>
            <Route path="/quiz" component={QuizPage} />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/beginquiz" component={QuizModal} />
          </Suspense>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
