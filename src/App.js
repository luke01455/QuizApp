import React,  { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

import Spinner from './components/spinner/spinner.component';
import Header from './components/header/header.component'

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const QuizPage = lazy(() => import('./pages/quiz-page/quiz-page.component'));

const App = () => {
  
  return (
    <div className="App">
        <Header />
        <Switch>
          <Suspense fallback={<Spinner />}>
            <Route path="/quiz" component={QuizPage} />
            <Route exact path="/" component={HomePage} />
          </Suspense>
        </Switch>
    </div>
  );
};

export default App;
